import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen  flex-col items-center justify-between py-32 px-2 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Types of progressive banners
          </h1>
        </div>
        <div className="flex  gap-4 flex-wrap text-[14px] font-medium  ">
          <a
            className="flex items-center justify-center   px-2 py-2   bg-white text-black rounded-[20px]"
            href="/single-image-banner"
            target="_blank"
            rel="noopener noreferrer"
          >
            Single Image Banner
          </a>
          <a
            className="flex items-center justify-center   px-2 py-2 bg-white   text-black rounded-[20px]"
            href="/banner-and-mobile-banner"
            target="_blank"
            rel="noopener noreferrer"
          >
            Large Screen Banner and mobile Banner
          </a>
          <a
            className="flex items-center justify-center   px-2 py-2 whitespace-nowrap  bg-white text-black rounded-[20px]"
            href="/banner-with-video"
            target="_blank"
            rel="noopener noreferrer"
          >
            Banner With Video
          </a>
        </div>
      </main>
    </div>
  );
}
