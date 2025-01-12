"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Use useParams for dynamic route parameters
import { ref, get } from "firebase/database";
import { rtdb } from "../../../../firebase/firebaseConfig"; // Ensure you're importing the correct Firebase config
import Head from "next/head"; // Import Head from next/head
import Image from "next/image"; // Import Image from next/image for optimized image rendering

interface EventDetailData {
  title: string;
  date: string;
  time: string;
  location: string;
  tracks: string;
  details: string;
  coverImage: string;
  duration: number; // Duration in hours
}

const EventDetailPage = () => {
  const { eventSlug } = useParams(); // Get the eventSlug using useParams
  const [eventData, setEventData] = useState<EventDetailData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (eventSlug) {
      const eventRef = ref(rtdb, `events/${eventSlug}`);
      get(eventRef).then((snapshot) => {
        if (snapshot.exists()) {
          setEventData(snapshot.val());
        } else {
          setEventData(null);
        }
        setLoading(false);
      });
    }
  }, [eventSlug]);

  if (loading) {
    return <p>Loading event details...</p>;
  }

  if (!eventData) {
    return <p>Event not found</p>;
  }

  // Set metadata using Head component from next/head
  return (
    <>
      <Head>
        <title>{`${eventData.title} | DEVRhylme Foundation`}</title>
        <meta
          name="description"
          content={
            eventData.details ||
            "Join us for an exciting event hosted by DEVRhylme Foundation!"
          }
        />
        <meta property="og:title" content={`${eventData.title} | DEVRhylme Foundation`} />
        <meta property="og:description" content={eventData.details} />
        <meta
          property="og:image"
          content={eventData.coverImage || "/images/event/default.jpg"}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${eventData.title} | DEVRhylme Foundation`} />
        <meta name="twitter:description" content={eventData.details} />
        <meta
          name="twitter:image"
          content={eventData.coverImage || "/images/event/default.jpg"}
        />
      </Head>

      <section
        id="event-detail"
        className="bg-gray-1 dark:bg-dark-2 py-16 lg:py-30 px-4 sm:px-6 lg:px-12 xl:px-24 pt-[100px]" // Added pt-[30px] for 30px padding at the top
      >
        <div className="container mx-auto mt-500">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full lg:w-1/2 xl:w-2/3 pr-4">
              <h1 className="text-3xl sm:text-4xl font-bold text-dark dark:text-white mb-6">
                {eventData.title}
              </h1>
              <p className="text-base text-body-color dark:text-dark-6 mb-6">
                {eventData.details}
              </p>
              <div className="flex flex-wrap items-center gap-6 mb-6">
                <p className="text-lg font-semibold text-body-color dark:text-dark-4">
                  Location: {eventData.location}
                </p>
                <p className="text-lg font-semibold text-body-color dark:text-dark-4">
                  Date: {eventData.date}
                </p>
                <p className="text-lg font-semibold text-body-color dark:text-dark-4">
                  Time: {eventData.time}
                </p>
                <p className="text-lg font-semibold text-body-color dark:text-dark-4">
                  Duration: {eventData.duration} hours
                </p>
              </div>

              <div className="flex items-center justify-center sm:justify-start">
                <p className="text-xl text-body-color dark:text-dark-6 mb-4 sm:mb-0">
                  Tracks: {eventData.tracks}
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/2 xl:w-1/3 mt-8 lg:mt-0">
              <div className="relative h-80 sm:h-96 lg:h-[500px] xl:h-[600px]">
                <Image
                  src={eventData.coverImage || "/images/event/default.jpg"}
                  alt={eventData.title}
                  fill
                  className="mt-50 object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventDetailPage;
