"use client";
import Image from "next/image";
import { useArticle } from "../../context/ArticleContext";
import React from "react";
import parse from 'html-react-parser';

function SingleArticlePage() {
  const { article } = useArticle();
  if (!article) {
    return <div>Loading...</div>;
  }

  const formattedArticle = {
    ...article, // article objesinin tüm alanlarını kopyalıyoruz
    publishedDate: new Date(article.publishedDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }), // Tarihi özel formatta saklıyoruz
  };

  const YOUTUBE_OBJ = formattedArticle.content.body.find(
    (item: any) => item.blockType === "youtube"
  );
  const YOUTUBE_URL = YOUTUBE_OBJ.metadata.url;
  const embedUrl = YOUTUBE_URL.replace(/(?:https:\/\/www\.youtube\.com\/watch\?v=)([^&]+)/, "https://www.youtube.com/embed/$1");


  let cleanedArticleArray: any[] = [];
  formattedArticle.content.body.map((item: any) => {
    const cleanedText =
      item.blockType === "text" && item.value.replace(/^<p>|<\/p>$/g, "");
    item.blockType === "text" && cleanedArticleArray.push(cleanedText);
  });

  console.log("******", formattedArticle);

  return (
    <div className="flex flex-col w-screen p-8">
      <div>
        <div className="flex flex-row gap-2 text-xs roboto uppercase">
          <div className="text-trtBlue">
            {formattedArticle.categories[1]?.title}
          </div>
          <div className="font-normal text-customGray">1 hour ago</div>
        </div>
        <h2 className="text-xl font-bold">{formattedArticle.title}</h2>
        <h3 className="text-sm text-customGray">
          {formattedArticle.description}
        </h3>
      </div>
      <div className="flex flex-row justify-between h-screen ">
        {/* main news content */}
        <div className="w-4/5 bg-red-300 h-full">
          {/* main image container */}
          <div className="bg-blue-300">
            <div className="relative w-[95%] h-0 pb-[50%] overflow-hidden mx-5">
              <Image
                src={formattedArticle.mainImageUrl}
                alt="latest news"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
            <div className="pl-5 text-xs text-middleGray roboto uppercase tracking-wider">
              {formattedArticle.content.fields.sources[0].value}
            </div>
            <div className="pl-5 text-xs text-customGray">
              {formattedArticle.content.fields.country.value +
                ", " +
                formattedArticle.publishedDate}
            </div>
          </div>

          {/* article text container */}
          <div>
            <div className="gap-4 flex flex-col">
              {cleanedArticleArray.slice(0, 3).map((item, i) => {
                return <p key={i}>{item}</p>;
              })}
            </div>
            <div>
              <iframe
                width="560"
                height="315"
                src={embedUrl}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="block screen992:hidden w-1/5 bg-yellow-300">
          yan haber
        </div>
      </div>
    </div>
  );
}

export default SingleArticlePage;
