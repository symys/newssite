import Image from 'next/image';
import React from 'react';

function SecondLevelMainInLatestNews({data} : any) {
  return <div className="flex screen768:flex-col flex-row w-full justify-between gap-8">
  <div className="flex flex-col between768and576:flex-row gap-3 ">
    <div className="max-w-sm">
      <a href="#">
        <div className="relative w-full h-0 pb-[56.25%]">
          <Image
            src={data.homepageapi.latest[1].mainImageUrl}
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
      </a>
      <div className="pt-5">
        <a href="#">
          <h5 class="mb-2 text-lg font-bold tracking-tight">
            {data.homepageapi.latest[1].title}
          </h5>
        </a>
        <p className="mb-2 text-sm">
          {data.homepageapi.latest[1].description}
        </p>
      </div>
    </div>

    <div className="border-l-2 ml-2 border-lightGray w-1 h-100  between768and576:block hidden"></div>
    <div className="border-b-2 mb-2 border-lightGray w-full h-1  between768and576:hidden block"></div>

    <div className="max-w-sm ">
      <a href="#">
        <div className="relative w-full h-0 pb-[56.25%]">
          <Image
            src={data.homepageapi.latest[2].mainImageUrl}
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
      </a>
      <div className="pt-5">
        <a href="#">
          <h5 class="mb-2 text-lg font-bold tracking-tight">
            {data.homepageapi.latest[2].title}
          </h5>
        </a>
        <p className="mb-2 text-sm">
          {data.homepageapi.latest[2].description}
        </p>
      </div>
    </div>
  </div>

  {/* <div className="border-b-2 mb-2 border-lightGray w-full h-1  screen576:block hidden"></div> */}
  <div className="block screen768:hidden border-l-2 border-lightGray h-auto mx-2 mr-4"></div>
  <div className="hidden screen768:block border-t-2 border-lightGray w-full my-2"></div>

  {/* section with writers */}
  {/* I put authors and images randomly because I could not fetch author photo form API */}
  <div className="flex flex-col gap-8 ">
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
    {/* section without writer photos */}
    <div className="flex flex-col gap-8">
      <div>
        <div className="roboto text-xs tracking-widest text-trtBlue uppercase">
          {data.homepageapi.latest[0].categories[1].title}
        </div>
        <div className="font-bold text-sm mt-2">
          {data.homepageapi.latest[0].title}
        </div>
      </div>
      <div className="border-b-2 border-lightGray w-full"></div>
      <div>
        <div className="roboto text-xs tracking-widest text-trtBlue uppercase">
          {data.homepageapi.latest[2].categories[1].title}
        </div>
        <div className="font-bold text-sm mt-2">
          {data.homepageapi.latest[2].title}
        </div>
      </div>
      <div className="border-b-2 border-lightGray w-full"></div>
      <div>
        <div className="roboto text-xs tracking-widest text-trtBlue uppercase">
          {data.homepageapi.latest[3].categories[1].title}
        </div>
        <div className="font-bold text-sm mt-2">
          {data.homepageapi.latest[3].title}
        </div>
      </div>
    </div>
  </div>
</div>;
}

export default SecondLevelMainInLatestNews;
