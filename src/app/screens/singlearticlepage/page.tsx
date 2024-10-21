"use client";
import Image from "next/image";
import { useArticle } from "../../context/ArticleContext";
import React from "react";
import parse from "html-react-parser";
import ArticlePageReadMore from "@/components/ArticlePageReadMore";
import Tags from "@/components/Tags";

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
  const embedUrl = YOUTUBE_URL.replace(
    /(?:https:\/\/youtu\.be\/|https:\/\/www\.youtube\.com\/watch\?v=)([^&]+)/,
    "https://www.youtube.com/embed/$1"
  );
  const mainURL = parse(YOUTUBE_OBJ.value);

  let cleanedArticleArray: any[] = [];
  formattedArticle.content.body.map((item: any) => {
    const cleanedText =
      item.blockType === "text" && item.value.replace(/^<p>|<\/p>$/g, "");
    item.blockType === "text" && cleanedArticleArray.push(cleanedText);
  });

  // if the length longer than 8 it returns true
  const articleLength = cleanedArticleArray.length;
  const shouldAddSecondReadMore = articleLength > 8;

  console.log("******1", formattedArticle);

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
      <div className="flex flex-row justify-between min-h-screen ">
        {/* main news content */}
        <div className="w-4/5 h-full">
          {/* main image container */}
          <div>
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
          <div className="min-h-screen">
            <div className="gap-4 flex flex-col px-28 screen768:px-10 pt-10">
              {formattedArticle.content.body.slice(0, 3).map((item:any) => {
                return item.blockType === "text" && parse(item.value);
              })}
            </div>
            <div className="pt-6 flex justify-center w-full h-[40vh] px-28 screen768:px-10">
              <div className="w-full justify-center flex">
                <iframe
                  src={embedUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="gap-4 flex flex-col px-28 screen768:px-10 pt-10">
              {formattedArticle.content.body.slice(4, 8).map((item:any) => {
                return item.blockType === "text" && parse(item.value);
              })}
            </div>
        
                <div className="gap-4 flex flex-col px-28 screen768:px-10 pt-10">
                  <ArticlePageReadMore
                    isReadMore={true}
                    img={formattedArticle.mainImageUrl}
                    title={formattedArticle.title}
                  />
                </div>
                <div className="gap-4 flex flex-col px-28 screen768:px-10 pt-10">
                  {formattedArticle.content.body.slice(9, 11).map((item:any) => {
                    return item.blockType === "text" && parse(item.value);
                  })}
                </div>
            <div className="gap-4 flex flex-col px-28 screen768:px-10 pt-10">
              <ArticlePageReadMore
                isReadMore={true}
                img={formattedArticle.mainImageUrl}
                title={formattedArticle.title}
              />
            </div>
            <div className="gap-4 flex flex-col px-28 screen768:px-10 pt-10">
              {cleanedArticleArray.slice(11)?.map((item, i) => {
                // there is a tag <strong>
                return !item.startsWith("<") && <p key={i}>{item}</p>;
              })}
            </div>
            <div className="pt-6 flex justify-center w-full h-[40vh] px-28 screen768:px-10">
              <div className="w-full justify-center flex">
                <iframe
                  src={embedUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="roboto text-xs uppercase tracking-wider px-28 screen768:px-10 pt-2">
              <span className="text-customGray">SOURCE :</span>
              {formattedArticle.content.fields.sources[0].value}
            </div>
            <div className=" border-b-2 border-lightGray h-auto mx-2 mr-4 mt-6"></div>
            <div className="pt-8 flex flex-col gap-2 px-28 screen768:px-10">
              <h5 className="text-xs roboto tracking-wider">TAGS</h5>
              <Tags tagArray={formattedArticle.content.fields.tags} />
            </div>
            <div className="gap-4 flex flex-col px-28 screen768:px-10 pt-10">
              <ArticlePageReadMore
                isReadMore={false}
                img={formattedArticle.mainImageUrl}
                title={formattedArticle.title}
              />
            </div>
          </div>
        </div>
        <div className="block screen992:hidden w-1/5">yan haber</div>
      </div>
    </div>
  );
}

export default SingleArticlePage;
