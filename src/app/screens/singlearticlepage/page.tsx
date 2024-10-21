"use client";
import Image from "next/image";
import { useArticle } from "../../context/ArticleContext";
import React from "react";
import parse from "html-react-parser";
import ArticlePageReadMore from "@/components/ArticlePageReadMore";
import Tags from "@/components/Tags";
import ArticleDesignByLength from "@/components/ArticleDesignByLength";

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
      
      <div className="flex flex-row justify-between min-h-screen ">
        {/* main news content */}
        <div className="w-4/5 h-full ">
        <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-2 text-xs roboto uppercase">
          <div className="text-trtBlue">
            {formattedArticle.categories[1]?.title}
          </div>
          <div className="font-normal text-customGray">1 hour ago</div>
        </div>
        <h2 className="text-size42 screen992:text-4xl screen320:text-size28 font-bold">{formattedArticle.title}</h2>
        <h3 className="text-2xl screen992:text-xl screen320:text-base  text-customGray pb-4">
          {formattedArticle.description}
        </h3>
      </div>
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
            <ArticleDesignByLength embedUrl={embedUrl} articleArr={formattedArticle}/>
          </div>
        </div>
        <div className="block screen992:hidden w-1/5">yan haber</div>
      </div>
    </div>
  );
}

export default SingleArticlePage;
