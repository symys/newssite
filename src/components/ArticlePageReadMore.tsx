import Image from "next/image";

const ArticlePageReadMore = ({ img, title, isReadMore }: any) => {
  if (isReadMore) {
    return (
      <div className="flex flex-row w-full justify-between gap-4">
        <div className="relative w-[60%] h-0 pb-[20%] overflow-hidden ml-5">
          <Image
            src={img}
            alt="latest news"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="uppercase roboto tracking-wider text-xs text-customGray">
            Read More
          </div>
          <div className="font-bold text lg">{title}</div>
        </div>
      </div>
    );
  } else {
    return (
        <div className="flex flex-row w-full justify-between gap-4">
          <div className="relative w-[60%] h-0 pb-[20%] overflow-hidden ml-5">
            <Image
              src={img}
              alt="latest news"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="uppercase roboto tracking-wider text-xs text-customGray">
              Read More
            </div>
            <div className="font-bold text lg">{title}</div>
          </div>
        </div>
      );
  }
};

export default ArticlePageReadMore;
