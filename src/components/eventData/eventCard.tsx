"use client";

import React from "react";
import Image from "next/image";
import { GoTag } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import { FaCalendarAlt } from "react-icons/fa";


interface EventProps {
  imageUrl: string;
  title: string;
  date: string;
  location: string;
  tags: string[];
  eventStatus: string;
  daysLeft: number;
}

const Event: React.FC<EventProps> = ({
  imageUrl,
  title,
  date,
  location,
  tags,
  eventStatus,
  daysLeft,
}) => {
  return (
    <div className="py-2 w-full mx-auto bg-white dark:bg-dark-2 rounded-lg shadow-md border border-gray-700 dark:border-gray-300 group">
      <div className="flex items-center justify-between pb-2 border-b border-gray-300 dark:border-gray-700">
        <div className="flex items-center space-x-2 ml-auto pr-3">
          <span className="text-xs font-semibold text-green-600 bg-green-100 dark:bg-green-800 dark:text-green-300 px-2 py-1 rounded">
            {eventStatus}
          </span>
          <span className="text-xs text-orange-500">
            {daysLeft} days left
          </span>
        </div>
      </div>

      <div className="p-3 relative w-full h-48 sm:h-40 md:h-52 lg:h-48 overflow-hidden group">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 ease-out group-hover:scale-110"
          priority
        />
      </div>

      <div className="px-4 py-2">
        <h2 className="text-lg font-bold text-gray-800 dark:text-white">
          {title}
        </h2>
        <div className="flex items-center justify-between">
          <p className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 mt-1">
            <CiLocationOn className="text-lg text-black dark:text-white font-bold" />{location}
          </p>
          <p className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 mt-1">
            <FaCalendarAlt />{date}
          </p>
        </div>
        <div className="flex items-center flex-wrap gap-2 mt-4">
          <GoTag className="font-bold" />
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs font-medium bg-blue-200 text-blue-500 px-2 py-1 rounded"
            >{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Event;
