'use client';
import parse from "html-react-parser";
import ArticlePageReadMore from "./ArticlePageReadMore";
import Tags from "./Tags";

const ArticleDesignByLength = ({ articleArr, embedUrl }: any) => {
  const isArticleLong: boolean =
    articleArr.content.body.length > 8 ? true : false;

  const isYoutubeLinkExist = articleArr.content.body.some(
    (item: any) => item.blockType == "youtube"
  );
  const findSubArticles = articleArr.content.body.filter(
    (item: any) => item.type == "article"
  );

  if (isArticleLong) {
    return (
      <>
        <div className="gap-4 flex flex-col px-28 screen768:px-10 pt-10">
          {articleArr.content.body.slice(0, 2).map((item: any) => {
            return item.blockType === "text" && parse(item.value);
          })}
        </div>
        {isYoutubeLinkExist && (
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
        )}
        <div className="gap-4 flex flex-col px-28 screen768:px-10 pt-10">
          {articleArr.content.body.slice(2, 4).map((item: any) => {
            return item.blockType === "text" && parse(item.value);
          })}
        </div>
        
        {(findSubArticles.length >= 1) && (
          <div className="gap-4 flex flex-col px-28 screen768:px-10 pt-10">
            <ArticlePageReadMore
              isReadMore={true}
              img={findSubArticles[0].mainImageUrl}
              title={findSubArticles[0].title}
            />
          </div>
        )}

        <div className="gap-4 flex flex-col px-28 screen768:px-10 pt-10">
          {articleArr.content.body.slice(4, 6).map((item: any) => {
            return item.blockType === "text" && parse(item.value);
          })}
        </div>
       {(findSubArticles.length >= 2) && <div className="gap-4 flex flex-col px-28 screen768:px-10 pt-10">
          <ArticlePageReadMore
            isReadMore={true}
            img={findSubArticles[1].mainImageUrl}
            title={findSubArticles[1].title}
          />
        </div>}
        <div className="gap-4 flex flex-col px-28 screen768:px-10 pt-10">
          {articleArr.content.body.slice(6).map((item: any) => {
            return item.blockType === "text" && parse(item.value);
          })}
        </div>
        {embedUrl && (
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
        )}
        <div className="roboto text-xs uppercase tracking-wider px-28 screen768:px-10 pt-2">
          <span className="text-customGray">SOURCE :</span>
          {articleArr.content.fields.sources[0].value}
        </div>
        <div className=" border-b-2 border-lightGray h-auto mx-2 mr-4 mt-6"></div>
        <div className="pt-8 flex flex-col gap-2 px-28 screen768:px-10">
          <h5 className="text-xs roboto tracking-wider">TAGS</h5>
          <Tags tagArray={articleArr.content.fields.tags} />
        </div>
        <div className="gap-4 flex flex-col px-28 screen768:px-10 pt-10">
          <ArticlePageReadMore
            isReadMore={false}
            img={articleArr.mainImageUrl}
            title={articleArr.title}
          />
        </div>
      </>
    );
  } else if (isArticleLong && articleArr.content.body.length > 5) {
    <>
      <div className="gap-4 flex flex-col px-28 screen768:px-10 pt-10">
        {articleArr.content.body.slice(0, 2).map((item: any) => {
          return item.blockType === "text" && parse(item.value);
        })}
      </div>
      {isYoutubeLinkExist && (
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
      )}
      <div className="gap-4 flex flex-col px-28 screen768:px-10 pt-10">
        {articleArr.content.body.slice(2, 4).map((item: any) => {
          return item.blockType === "text" && parse(item.value);
        })}
      </div>

      {(findSubArticles.length >= 1) && (
          <div className="gap-4 flex flex-col px-28 screen768:px-10 pt-10">
            <ArticlePageReadMore
              isReadMore={true}
              img={findSubArticles[0].mainImageUrl}
              title={findSubArticles[0].title}
            />
          </div>
        )}
      <div className="gap-4 flex flex-col px-28 screen768:px-10 pt-10">
        {articleArr.content.body.slice(4).map((item: any) => {
          return item.blockType === "text" && parse(item.value);
        })}
      </div>
      {embedUrl && (
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
      )}
      <div className="roboto text-xs uppercase tracking-wider px-28 screen768:px-10 pt-2">
        <span className="text-customGray">SOURCE :</span>
        {articleArr.content.fields.sources[0].value}
      </div>
      <div className=" border-b-2 border-lightGray h-auto mx-2 mr-4 mt-6"></div>
      <div className="pt-8 flex flex-col gap-2 px-28 screen768:px-10">
        <h5 className="text-xs roboto tracking-wider">TAGS</h5>
        <Tags tagArray={articleArr.content.fields.tags} />
      </div>
      <div className="gap-4 flex flex-col px-28 screen768:px-10 pt-10">
        <ArticlePageReadMore
          isReadMore={false}
          img={articleArr.mainImageUrl}
          title={articleArr.title}
        />
      </div>
    </>;
  } else {
    <>
      <div className="gap-4 flex flex-col px-28 screen768:px-10 pt-10">
        {articleArr.content.body.slice(0, 2).map((item: any) => {
          return item.blockType === "text" && parse(item.value);
        })}
      </div>
      {isYoutubeLinkExist && (
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
      )}
      <div className="gap-4 flex flex-col px-28 screen768:px-10 pt-10">
        {articleArr.content.body.slice(2).map((item: any) => {
          return item.blockType === "text" && parse(item.value);
        })}
      </div>

      {(findSubArticles.length >= 1) && (
          <div className="gap-4 flex flex-col px-28 screen768:px-10 pt-10">
            <ArticlePageReadMore
              isReadMore={true}
              img={findSubArticles[0].mainImageUrl}
              title={findSubArticles[0].title}
            />
          </div>
        )}
      {embedUrl && (
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
      )}
      <div className="roboto text-xs uppercase tracking-wider px-28 screen768:px-10 pt-2">
        <span className="text-customGray">SOURCE :</span>
        {articleArr.content.fields.sources[0].value}
      </div>
      <div className=" border-b-2 border-lightGray h-auto mx-2 mr-4 mt-6"></div>
      <div className="pt-8 flex flex-col gap-2 px-28 screen768:px-10">
        <h5 className="text-xs roboto tracking-wider">TAGS</h5>
        <Tags tagArray={articleArr.content.fields.tags} />
      </div>
      <div className="gap-4 flex flex-col px-28 screen768:px-10 pt-10">
        <ArticlePageReadMore
          isReadMore={false}
          img={articleArr.mainImageUrl}
          title={articleArr.title}
        />
      </div>
    </>;
  }
};

export default ArticleDesignByLength;
