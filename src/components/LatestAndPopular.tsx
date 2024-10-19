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
      <div className=" flex-row  text-sm  gap-2 roboto mt-4 hidden md:flex">
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
      <div className="flex md:flex-row flex-col gap-6">
        {/* main news */}
        <div className="flex flex-col h-full pb-10">
          <div className="relative w-full max-w-full h-0 pb-[55%] overflow-hidden">
            <Image
              src={data.homepageapi.latest[0].mainImageUrl}
              alt="latest news"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <h1 className="flex font-bold text-2xl mt-4">
            {data.homepageapi.latest[0].title}
          </h1>

          {/* related stories section */}
          <div className="flex flex-col mt-8">
            <h4 className="text-middleGray roboto flex ">RELATED STORIES</h4>
            <div className="flex md:flex-row flex-col justify-center items-center gap-2 lg:h-32 h-16 font-bold">
              <div className="cursor-pointer">
                {data.homepageapi.latest[1].title}
              </div>
              <div className="border-l-2 border-lightGray h-full mr-4"></div>
              <div className="cursor-pointer">
                {data.homepageapi.latest[2].title}
              </div>
              <div className="border-l-2 border-lightGray h-full mr-4"></div>
              <div className="cursor-pointer">
                {data.homepageapi.latest[3].title}
              </div>
            </div>
          </div>
        </div>

        {/* second column */}
        <div className="flex flex-col md:flex-row w-full justify-between gap-8">
          <div className="flex flex-col sm:flex-row md:flex-col gap-3 ">
            <div className="max-w-sm">
              <a href="#">
              <div className="relative w-full h-0 pb-[56.25%]"> 
                <Image
                  src={data.homepageapi.latest[1].mainImageUrl}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                /></div>
              </a>
              <div className="pt-5">
                <a href="#">
                  <h5 class="mb-2 text-lg font-bold tracking-tight">
                    {data.homepageapi.latest[1].title}
                  </h5>
                </a>
                <p className="mb-2 text-sm text-gray-700 dark:text-gray-400">
                  {data.homepageapi.latest[1].description}
                </p>
              </div>
            </div>

            <div className="border-b-2 mb-2 border-lightGray w-[85%] h-1 block sm:hidden md:block"></div>

            <div className="max-w-sm ">
              <a href="#">
              <div className="relative w-full h-0 pb-[56.25%]"> 
                <Image
                  src={data.homepageapi.latest[2].mainImageUrl}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                /></div>
              </a>
              <div className="pt-5">
                <a href="#">
                  <h5 class="mb-2 text-lg font-bold tracking-tight">
                    {data.homepageapi.latest[2].title}
                  </h5>
                </a>
                <p className="mb-2 text-sm text-gray-700 dark:text-gray-400">
                  {data.homepageapi.latest[2].description}
                </p>
              </div>
            </div>
          </div>

          {/* section with writers */}
          {/* I put authors and images randomly because I could not fetch author photo form API */}
          <div className="flex flex-col gap-3 ">
            <div className="flex flex-row items-center">
              <div className="relative w-12 h-10 md:w-20 md:h-14">
                <Image
                  src={data.homepageapi.latest[0].mainImageUrl}
                  alt=""
                  layout="fill"
                  className="rounded-full object-cover"
                />
              </div>

              <div className="ml-3">
                <div className="roboto tracking-wider sm:text-sm text-customGray uppercase">
                  {data.homepageapi.news[0].authors[0].firstName +
                    " " +
                    data.homepageapi.news[0].authors[0].lastName}
                </div>
                <div className="sm:text-xs">
                  {data.homepageapi.latest[0].title}
                </div>
              </div>
            </div>
            <div className="border-b-2 border-lightGray w-full"></div>
            <div className="flex flex-row items-center">
              <div className="relative w-12 h-10 md:w-20 md:h-14">
                <Image
                  src={data.homepageapi.latest[1].mainImageUrl}
                  alt=""
                  layout="fill"
                  className="rounded-full object-cover"
                />
              </div>

              <div className="ml-3">
                <div className="roboto tracking-wider sm:text-sm text-customGray uppercase">
                  {data.homepageapi.headline[0].authors[0].firstName +
                    " " +
                    data.homepageapi.headline[0].authors[0].lastName}
                </div>
                <div className="sm:text-xs">
                  {data.homepageapi.latest[0].title}
                </div>
              </div>
            </div>
            <div className="border-b-2 border-lightGray w-full"></div>
            <div className="flex flex-row items-center">
              <div className="relative w-12 h-10 md:w-20 md:h-14">
                <Image
                  src={data.homepageapi.latest[0].mainImageUrl}
                  alt=""
                  layout="fill"
                  className="rounded-full object-cover"
                />
              </div>

              <div className="ml-3">
                <div className="roboto tracking-wider sm:text-sm text-customGray uppercase">
                  {data.homepageapi.news[0].authors[0].firstName +
                    " " +
                    data.homepageapi.news[0].authors[0].lastName}
                </div>
                <div className="sm:text-xs">
                  {data.homepageapi.latest[0].title}
                </div>
              </div>
            </div>
            <div className="border-b-2 border-lightGray w-full"></div>
            <div className="flex flex-col gap-3">
              <div>
                <div className="roboto text-xs tracking-widest text-trtBlue uppercase">
                  {data.homepageapi.latest[0].categories[1].title}
                </div>
                <div className="font-bold text-sm">
                  {data.homepageapi.latest[0].title}
                </div>
              </div>
              <div className="border-b-2 border-lightGray w-full"></div>
              <div>
                <div className="roboto text-xs tracking-widest text-trtBlue uppercase">
                  {data.homepageapi.latest[2].categories[1].title}
                </div>
                <div className="font-bold text-sm">
                  {data.homepageapi.latest[2].title}
                </div>
              </div>
              <div className="border-b-2 border-lightGray w-full"></div>
              <div>
                <div className="roboto text-xs tracking-widest text-trtBlue uppercase">
                  {data.homepageapi.latest[3].categories[1].title}
                </div>
                <div className="font-bold text-sm">
                  {data.homepageapi.latest[3].title}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>popular</div>
    </div>
  );
};

export default LatestAndPopular;
