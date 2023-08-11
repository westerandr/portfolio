import userData from "@constants/data";
import Image from "next/image";
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 dark:bg-gray-900 max-w-3xl mx-auto pt-20">
          {userData.achievements.map((ac, idx) => (
              <AchievementCard
                key={idx}
                title={ac.title}
                month={ac.month}
                year={ac.year}
                organization={ac.organization}
                imgUrl={ac.imgUrl}
              />
          ))}
        </div>
      </div>
    </section>
  );
}

const AchievementCard = ({ title, month, year, organization, imgUrl }) => {
  return (
    <div className="flex justify-center w-full">
    <a className="rounded-3xl inline-block overflow-hidden shadow-xl max-w-xs cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-102 duration-300">
        <div className="relative group w-full overflow-hidden bg-black h-40 rounded-t-3xl">
            <Image
            alt=""
            src={imgUrl}
            width={800}
            height={800}
            className="object-fill w-full h-full transform duration-700 backdrop-opacity-100"
            />
            <div className="absolute bg-gradient-to-t from-black w-full h-full flex items-end justify-center -inset-y-0"><h1 className="font-bold text-lg text-white mb-2 pl-3">{title}</h1></div>
        </div>
        <div className="bg-white">
            <div className="text-center px-3 pb-6 pt-2">
                <p className="mt-2 font-sans font-light text-slate-700">
                    {organization}
                </p>
            </div>
            <div className="flex justify-center pb-3 text-slate-700">
                <div className="text-center mr-3 border-r pr-3 last:border-r-0">
                    <h2>{month}</h2>
                </div>
                <div className="text-center mr-3 border-r pr-3 last:border-r-0">
                    <h2>{year}</h2>
                </div>
            </div>
        </div>
    </a>

</div>
  );
};
