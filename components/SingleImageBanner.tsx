"use client";
import React from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Keyboard, Navigation } from "swiper/modules";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

/* =======================
   IMAGE IMPORTS
======================= */

/* FIRST BANNER */
import firstBannerLow from "@public/assets/banners/banner-and-mobile-banner/banner-image-1-low.webp";
import firstBannerHigh from "@public/assets/banners/banner-and-mobile-banner/banner-image-1-high.webp";
import firstBannerMob from "@public/assets/banners/banner-and-mobile-banner/banner-1-mob.webp";

/* =======================
   TYPES
======================= */

type ImageBanner = {
  type: "image";
  sources: StaticImageData[];
  mobImage: StaticImageData;
};

type BannerSource = ImageBanner;

/* =======================
   MAIN SLIDER
======================= */

const SingleImageBanner: React.FC = () => {
  const bannerSets: BannerSource[] = [
    {
      sources: [firstBannerLow, firstBannerHigh],
      mobImage: firstBannerMob,

      type: "image",
    },
  ];

  return (
    <>
      <style>
        {`
      .slide_image_large{
      display:block;}
      .slide_image_mob{
      display:none;}

      @media (max-width:760px){
        .slide_image_large{
          display:none; 
        }
        .slide_image_mob{
          display:block;
        }
      }
      
      `}
      </style>

      <div className="w-full">
        <section className="overflow-hidden 2xl:h-[700px] xl:h-[520px] lg:h-[500px] md:h-[500px] sm:h-[300px] h-[250px]">
          {bannerSets.map((banner, index) => (
            <div key={index} className="relative">
              <div
                className="slider_image_wrapper"
                style={{ aspectRatio: "unset" }}
              >
                <Image
                  src={banner.sources[1]}
                  alt={banner.sources[1].src}
                  placeholder="blur"
                  priority={index === 0}
                  blurDataURL={banner.sources[0].src}
                  className="slide_image slide_image_large"
                  unoptimized
                  style={{ width: "100%", height: "auto" }}
                />
                <Image
                  src={banner.mobImage}
                  alt={banner.mobImage.src}
                  placeholder="blur"
                  priority={index === 0}
                  blurDataURL={banner.sources[0].src}
                  className="slide_image slide_image_mob"
                  unoptimized
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default SingleImageBanner;
