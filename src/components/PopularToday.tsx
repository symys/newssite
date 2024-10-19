// components/MyComponent.js

import React from "react";
type PopularNewsCardProps = {
  number: number;
  region: any;
  title: any;
};

const PopularNewsCard: React.FC<PopularNewsCardProps> = ({
  number,
  region,
  title,
}) => {
  return (
    <div className="flex flex-row gap-4 items-center justify-center">
      <div className="roboto text-popularGray text-[48px]">{number}</div>
      <div className="flex flex-col">
        <div className="text-trtBlue roboto tracking-widest text-[12px] uppercase">{region}</div>
        <div>{title}</div>
      </div>
    </div>
  );
};

const PopularToday = ({ data }: any) => {
  const newsArray = [
    {
      region: data.homepageapi.latest[0].categories[1].title,
      title: data.homepageapi.latest[0].title,
    },
    {
      region: data.homepageapi.latest[1].categories[1].title,
      title: data.homepageapi.latest[1].title,
    },
    {
      region: data.homepageapi.latest[2].categories[1].title,
      title: data.homepageapi.latest[2].title,
    },
    {
      region: data.homepageapi.latest[3].categories[1].title,
      title: data.homepageapi.latest[3].title,
    },
  ];

  return (
    <div className="flex screen768:flex-col flex-row gap-4 ">
      <div className="flex screen320:flex-col flex-row gap-4">
        <div>
          <PopularNewsCard
            number={1}
            region={newsArray[0].region}
            title={newsArray[0].title}
          />
        </div>
        <div className="border-l-2 border-lightGray "></div>
        <div>
          <PopularNewsCard
            number={2}
            region={newsArray[1].region}
            title={newsArray[1].title}
          />
        </div>
      </div>
      <div className="screen768:border-b-2 border-l-2 border-lightGray"></div>
      <div className="flex screen320:flex-col flex-row gap-4">
        <div>
          <PopularNewsCard
            number={3}
            region={newsArray[2].region}
            title={newsArray[2].title}
          />
        </div>
        <div className="border-l-2 border-lightGray"></div>
        <div>
          <PopularNewsCard
            number={4}
            region={newsArray[3].region}
            title={newsArray[3].title}
          />
        </div>
      </div>
    </div>
  );
};

export default PopularToday;
