import userData from "@constants/data";
import React from "react";

export default function Achievements() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
        Achievements
        </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-4">
        <div className="grid grid-cols-3 gap-5 dark:bg-gray-900 max-w-3xl mx-auto pt-20">
          {userData.achievements.map((ac, idx) => (
            <>
              <AchievementCard
                key={idx}
                title={ac.title}
                month={ac.month}
                year={ac.year}
                organization={ac.organization}
              />
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

const AchievementCard = ({ title, month, year, organization }) => {
  return (
    <div className="relative border p-4 rounded-md shadow-xl w-full bg-white dark:bg-gray-800 z-10 mx-4">
      <h1 className="font-semibold text-xl">{title}</h1>
      <p className="text-gray-600 text-sm dark:text-gray-400 my-2">{organization}</p>
      <h6>{month} {year}</h6>
    </div>
  );
};
