"use client";

import React, { useEffect, useState } from "react";
import PopularToday from "./PopularToday";
import MainInLatestNews from "./MainInLatestNews";
import SecondLevelMainInLatestNews from "./SecondLevelMainInLatestNews";

const LatestAndPopular = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../../../../db.json", {cache: "no-cache"});
        const json = await response.json();
        console.log(json);
        setData(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);


  if (!data) {
    return <div>Loading...</div>; // Veriler yüklenene kadar yükleniyor mesajı
  }

  const topics: string[] = [
    "TOPICS",
    "AZERBAIJAN-ARMENIA DISPUTE",
    "COVID-19",
    "EASTERN MEDITERRANEAN",
    "MY TURKEY",
  ];

  return (
    <div className="flex flex-col gap-6 overflow-hidden">
      {/* topics section */}
      <div className=" flex-row  text-sm  gap-8 roboto mt-4 screen768:hidden flex">
        {topics.map((topic, index) => {
          return (
            <div key={index}
              className={`flex flex-row gap-8 ${
                topic != "TOPICS" ? "text-customGray" : "text-black"
              }`}
            >
              <div key={index}>{topic}</div>
              {index < topics.length - 1 && (
                <div className="border-l-2 border-lightGray h-full "></div>
              )}
            </div>
          );
        })}
      </div>

      {/* latest news section */}
      <div className="flex flex-row screen992:flex-col  gap-6">
        {/* main news */}
        <MainInLatestNews data={data} />

        <div className="block screen992:hidden border-l-2 border-lightGray h-auto mx-2 mr-4"></div>
        <div className="hidden screen992:block border-t-2 border-customGray w-full my-2"></div>

        {/* second column */}
        <SecondLevelMainInLatestNews data={data} />
      </div>

      <div className="block border-t-2 border-lightGray my-6 "></div>

      {/* popular news section */}
      <div>
        <div className="screen768:text-[14px] text-[16px] roboto tracking-widest text-popularTitleGray mb-4">
          POPULAR TODAY
        </div>
        <div className="pl-4 pr-4">
          <PopularToday data={data} />
        </div>
      </div>
    </div>
  );
};

export default LatestAndPopular;
