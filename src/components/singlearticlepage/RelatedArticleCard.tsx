import Image from "next/image";

const RelatedArticles = ({ img, title }: any) => {
  return (
    <div className="flex flex-row w-full">
      <div className="relative  w-[30vw]  aspect-w-1 aspect-h-1 overflow-hidden ">
        <Image
          src={img}
          alt="latest news"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="flex flex-col justify-center">
        {<div className="font-bold text-sm pl-2">{title}</div>}
      </div>
    </div>
  );
};

export default RelatedArticles;
