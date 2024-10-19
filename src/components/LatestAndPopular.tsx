"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const LatestAndPopular = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/db.json");
        const json = await response.json();
        console.log(json);
        setData(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Data'nın yüklendiğinden emin ol
  if (!data) {
    return <div>Loading...</div>; // Veriler yüklenene kadar yükleniyor mesajı göster
  }

  const topics = [
    "TOPICS",
    "AZERBAIJAN-ARMENIA DISPUTE",
    "COVID-19",
    "EASTERN MEDITERRANEAN",
    "MY TURKEY",
  ];

  return (
    <div>
      {/* topics section */}
      <div className=" flex-row w-screen text-sm  gap-2 roboto mt-4 hidden md:flex">
        {topics.map((topic, index) => {
          return (
            <div
              className={`flex flex-row gap-4 ${
                topic != "TOPICS" ? "text-customGray" : "text-black"
              }`}
            >
              <div>{topic}</div>
              {index < topics.length - 1 && (
                <div className="border-l-2 border-lightGray h-full mr-2"></div>
              )}
            </div>
          );
        })}
      </div>

      {/* latest news section */}
      <div className="flex flex-row">
        {/* <div>{data.homepageapi.latest[2].title}</div> */}
        <div>
          <Image
            src={data.homepageapi.latest[0].mainImageUrl}
            alt="latest news"
            width={180}
            height={38}
            priority
          />
          <h2>{data.homepageapi.latest[0].title}</h2>
          <div>
            <h4>RELATED STORIES</h4>
            <div className="flex flex-row">
            <Image
            src={data.homepageapi.latest[0].mainImageUrl}
            alt="latest news"
            width={180}
            height={38}
            priority
          />
          <Image
            src={data.homepageapi.latest[0].mainImageUrl}
            alt="latest news"
            width={180}
            height={38}
            priority
          />
          <Image
            src={data.homepageapi.latest[0].mainImageUrl}
            alt="latest news"
            width={180}
            height={38}
            priority
          />
            </div>
          </div>
        </div>
        <div>firstcol</div>
        <div>seccol</div>
      </div>
      <div>popular</div>
    </div>
  );
};

export default LatestAndPopular;
