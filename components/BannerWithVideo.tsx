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
import firstBannerLow from "@public/assets/banners/banner-with-video/banner-1-low.webp";

/* SECOND BANNER */
import secondBannerLow from "@public/assets/banners/banner-with-video/banner-2-low.webp";
import secondBannerHigh from "@public/assets/banners/banner-with-video/banner-2-high.webp";

/* THIRD BANNER */
import thirdBannerLow from "@public/assets/banners/banner-with-video/banner-3-low.webp";
import thirdBannerHigh from "@public/assets/banners/banner-with-video/banner-3-high.webp";

/* =======================
   TYPES
======================= */

type ImageBanner = {
  type: "image";
  sources: StaticImageData[];
};

type VideoBanner = {
  type: "video";
  src: string;
  poster?: StaticImageData;
};

type BannerSource = ImageBanner | VideoBanner;

/* =======================
   PROGRESSIVE IMAGE
======================= */

type ProgressiveBannerProps = {
  banners: StaticImageData[];
};

const ProgressiveBanner = ({ banners }: ProgressiveBannerProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let index = 0;
    let cancelled = false;

    const preloadNext = () => {
      if (index >= banners.length - 1 || cancelled) return;

      const img = new window.Image();
      img.src = banners[index + 1].src;

      img.onload = () => {
        if (cancelled) return;
        index++;
        setActiveIndex(index);
        preloadNext();
      };
    };

    preloadNext();

    return () => {
      cancelled = true;
    };
  }, [banners]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {banners.map((img, i) => (
        <Image
          key={i}
          src={img}
          alt={`Banner ${i + 1}`}
          priority={i === 0}
          unoptimized
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            i <= activeIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

/* =======================
   VIDEO BANNER
======================= */

type VideoBannerProps = {
  src: string;
  poster?: StaticImageData;
};

const VideoBanner = ({ src, poster }: VideoBannerProps) => {
  return (
    <video
      className="w-full h-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      poster={poster?.src}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

/* =======================
   MAIN SLIDER
======================= */

const BannerWithVideo: React.FC = () => {
  const bannerSets: BannerSource[] = [
    {
      type: "video",
      src: "/assets/banners/banner-with-video/banner-1-video.mp4",
      poster: firstBannerLow,
    },
    {
      type: "image",
      sources: [secondBannerLow, secondBannerHigh],
    },
    {
      type: "image",
      sources: [thirdBannerLow, thirdBannerHigh],
    },
  ];

  return (
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
              {banner.type === "image" ? (
                <ProgressiveBanner banners={banner.sources} />
              ) : (
                <VideoBanner src={banner.src} poster={banner.poster} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default BannerWithVideo;
