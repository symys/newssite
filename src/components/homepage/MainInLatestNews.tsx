'use client';
;import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useArticle } from '../../app/context/ArticleContext';
/* eslint-disable @typescript-eslint/no-explicit-any */


function MainInLatestNews({ data }: any) {
  const { setArticle } = useArticle();
  const router = useRouter();

  const handleClick = (id: number): void => {
    const selectedArticle:any= data.articlesapi.find((article:any) => article.id === id)
    setArticle(selectedArticle);
    router.push('screens/singlearticlepage')
  };

  return (
    <div className="flex flex-col h-full pb-10">
      <div
        className="relative w-full max-w-full h-0 pb-[55%] overflow-hidden cursor-pointer"
        onClick={() => handleClick(data.homepageapi.latest[0].id)}
      >
        <Image
          src={data.homepageapi.latest[0].mainImageUrl}
          alt="latest news"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <h1 className="flex font-bold text-2xl mt-4 cursor-pointer" onClick={() => handleClick(data.homepageapi.latest[0].id)}>
        {data.homepageapi.latest[0].title}
      </h1>

      {/* related stories section */}
      <div className="flex flex-col mt-8">
        <h4 className="text-middleGray roboto">RELATED STORIES</h4>
        <div className="flex flex-col md:flex-row justify-center font-bold">
          <div className="cursor-pointer pr-4 mt-4" onClick={() => handleClick(data.homepageapi.latest[1].id)}>
            {data.homepageapi.latest[1].title}
          </div>
          {/* until mobile screen vertical line display, after mobile screen horizontal screen display */}
          <div className="hidden md:block border-l-2 border-lightGray h-auto mx-2 mr-4"></div>
          <div className="block md:hidden border-t-2 border-lightGray w-full my-2"></div>
          <div className="cursor-pointer mt-4 pr-4" onClick={() => handleClick(data.homepageapi.latest[2].id)}>
            {data.homepageapi.latest[2].title}
          </div>
          <div className="hidden md:block border-l-2 border-lightGray h-auto mx-2 mr-4"></div>
          <div className="block md:hidden border-t-2 border-lightGray w-full my-2"></div>
          <div className="cursor-pointer mt-4" onClick={() => handleClick(data.homepageapi.latest[3].id)}>
            {data.homepageapi.latest[3].title}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainInLatestNews;
