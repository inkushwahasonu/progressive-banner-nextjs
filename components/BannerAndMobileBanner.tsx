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

/* SECOND BANNER */
import secondBannerLow from "@public/assets/banners/banner-and-mobile-banner/banner-image-2-low.webp";
import secondBannerHigh from "@public/assets/banners/banner-and-mobile-banner/banner-image-2-high.webp";
import secondBannerMob from "@public/assets/banners/banner-and-mobile-banner/banner-2-mob.webp";

/* THIRD BANNER */
import thirdBannerLow from "@public/assets/banners/banner-and-mobile-banner/banner-image-3-low.webp";
import thirdBannerHigh from "@public/assets/banners/banner-and-mobile-banner/banner-image-3-high.webp";
import thirdBannerMob from "@public/assets/banners/banner-and-mobile-banner/banner-3-mob.webp";

/* FOURTH BANNER */
import fourthBannerLow from "@public/assets/banners/banner-and-mobile-banner/banner-image-4-low.webp";
import fourthBannerHigh from "@public/assets/banners/banner-and-mobile-banner/banner-image-4-high.webp";
import fourthBannerMob from "@public/assets/banners/banner-and-mobile-banner/banner-4-mob.webp";

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

const BannerAndMobileBanner: React.FC = () => {
  const bannerSets: BannerSource[] = [
    {
      sources: [firstBannerLow, firstBannerHigh],
      mobImage: firstBannerMob,

      type: "image",
    },
    {
      sources: [secondBannerLow, secondBannerHigh],
      mobImage: secondBannerMob,

      type: "image",
    },
    {
      sources: [thirdBannerLow, thirdBannerHigh],
      mobImage: thirdBannerMob,

      type: "image",
    },
    {
      sources: [fourthBannerLow, fourthBannerHigh],
      mobImage: fourthBannerMob,

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
          <Swiper
            slidesPerView={1}
            loop
            keyboard
            navigation
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay, Keyboard, Navigation]}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            className="home_banner_swiper h-full relative"
          >
            {bannerSets.map((banner, index) => (
              <SwiperSlide key={index} className="relative">
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
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
    </>
  );
};

export default BannerAndMobileBanner;
