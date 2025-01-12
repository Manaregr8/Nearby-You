"use client";

import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { rtdb } from "../../../firebase/firebaseConfig"; // Ensure you're importing the correct Firebase config
import EventBanner from "@/components/eventData/eventBanner";
import Event from "@/components/eventData/eventCard";
import "@/components/eventData/eventStyles.css";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

// Define the EventData interface with all fields required (no optional fields)
interface EventData {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  tracks: string;
  details: string;
  coverImage: string;
  tags: string[];
  duration: number; // Duration in hours
  eventStatus: string; // Event status can be "upcoming", "ongoing", or "expired"
  daysLeft: number; // Number of days left for the event to happen
}

const ContactPage = () => {
  const [events, setEvents] = useState<EventData[]>([]); // Using EventData interface for type safety
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter(); // Initialize router for navigation

  useEffect(() => {
    const eventsRef = ref(rtdb, "events");

    const unsubscribe = onValue(eventsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Parse the data into an array of events
        const parsedEvents = Object.entries(data).map(([id, value]) => {
          if (typeof value === "object" && value !== null) {
            // Type assertion to EventData to ensure we access the properties correctly
            const eventData = value as EventData;

            const eventDate = new Date(`${eventData.date}T${eventData.time}`);
            const currentDate = new Date();

            // Calculate days left
            const timeDiff = eventDate.getTime() - currentDate.getTime();
            const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Days difference

            // Calculate event status
            let eventStatus: string = "upcoming"; // Default status
            const eventEndTime = eventDate.getTime() + eventData.duration * 60 * 60 * 1000; // Add duration to event start time
            if (currentDate.getTime() >= eventEndTime) {
              eventStatus = "expired"; // If event has passed
            } else if (currentDate.getTime() >= eventDate.getTime()) {
              eventStatus = "ongoing"; // If event is currently happening
            }

            // Return event object after adding event status and days left
            // Exclude 'id' from spreading the `eventData`, and manually assign it
            return {
              ...eventData, // Spread the other properties without id
              id, // Add `id` manually
              eventStatus,
              daysLeft,
            };
          }
          return null; // Return null if value is not in expected format
        }).filter((event): event is EventData => event !== null); // Filter out any null events

        setEvents(parsedEvents);
      } else {
        setEvents([]); // Handle case where no events exist
      }
      setLoading(false);
    });

    return () => unsubscribe(); // Clean up the listener when the component unmounts
  }, []);

  const handleEventClick = (eventId: string) => {
    router.push(`/events/${eventId}`); // Navigate to the event detail page
  };

  if (loading) {
    return <p>Loading events...</p>; // Show a loading indicator while fetching the data
  }

  return (
    <>
      <div className="w-full">
        <div className="gradientBorder">
          <EventBanner />
        </div>
        <div className="eventCards">
          <h2 className="pt-5 font-bold sm:text-xl">
            Explore Events
            <span className="font-normal pl-1 text-slate-500">({events.length})</span>
          </h2>
          <div className="py-6 gridCards">
            {events.map((event) => (
              <div key={event.id} onClick={() => handleEventClick(event.id)} className="cursor-pointer">
                <Event
                  key={event.id} // Use event.id to uniquely identify each event
                  imageUrl={event.coverImage || "/images/event/event1.jpeg"} // Handle coverImage if missing
                  title={event.title}
                  date={event.date}
                  location={event.location}
                  tags={event.tags || []} // Use an empty array if tags are not provided
                  eventStatus={event.eventStatus}
                  daysLeft={event.daysLeft}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
