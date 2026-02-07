"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="mx-auto">
      <div className=" flex flex-col md:flex-row justify-center items-center text-center lg:text-start lg:items-end lg:justify-between">
        {/* левый бок */}
        <div className="space-y-6">
          {/* текст главного экрана */}
          <div className="space-y-6">
            <h1 className="lg:text-6xl text-4xl sm:text-5xl font-bold">
              Make The Best
              <br />
              Financial Decisions
            </h1>
            <p className="font-medium text-black/50 text-[14px] sm:text-[16px]">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              <br />
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-8">
            <button className="bg-black text-white flex justify-center items-center py-3 px-4 gap-2 rounded-sm cursor-pointer text-[12px]">
              Get Started
              <Image
                alt="arrow"
                src="/images/arrow.svg"
                width={25}
                height={25}
              />
            </button>
            <button className="flex justify-center items-center gap-3 cursor-pointer text-[12px]">
              <Image
                alt="player"
                src="/images/player.svg"
                width={25}
                height={25}
              />
              Watch Video
            </button>
          </div>

          <div>
            <Image src="/images/line.svg" alt="line" width={480} height={480} />
          </div>
        </div>

        {/* правый бок */}

        <div className="">
          <div className="relative lg:w-118 lg:h-118 right-18 -top-26 lg:top-0">
            <Image
              alt="phone1"
              src="/images/phone1.svg"
              width={240}
              height={240}
              className="absolute lg:-top-48 inset-0 z-3 w-full h-full"
            />
            <Image
              alt="phone2"
              src="/images/phone2.svg"
              width={240}
              height={240}
              className="absolute left-18 bottom-24 z-10 w-full h-full"
            />

            <Image
              alt="phone2"
              src="/images/phone2.svg"
              width={280}
              height={280}
              className="absolute -top-6 left-34 z-11 w-full h-full"
            />

            <Image
              src="/images/oval.svg"
              alt="oval 1"
              height={240}
              width={240}
              className="absolute -top-38 z-1 w-full h-full left-24"
            />

            <Image
              src="/images/oval.svg"
              alt="oval 1"
              height={280}
              width={280}
              className="absolute -top-34 z-1 w-full h-full left-16"
            />

            <Image
              src="/images/oval.svg"
              alt="oval 1"
              height={280}
              width={280}
              className="absolute -top-28 z-1 w-full h-full left-8"
            />
          </div>
        </div>

        <div className="absolute h-16 w-16 pointer-events-none inset-0 -z-10">
          <div
            className="absolute left-20 top-30 w-72 h-72 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, rgba(255,70,70,0.95) 0%, rgba(255,70,70,0.45) 30%, rgba(255,70,70,0.12) 60%, transparent 100%)",
              filter: "blur(50px)",
              transform: "translateZ(0)",
              mixBlendMode: "screen",
            }}
          />

          <div
            className="absolute right-12 bottom-12 w-96 h-96 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 60% 40%, rgba(255,120,110,0.75) 0%, rgba(255,120,110,0.3) 35%, rgba(255,120,110,0.06) 70%, transparent 100%)",
              filter: "blur(48px)",
              mixBlendMode: "screen",
            }}
          />

          <div
            className="absolute right-90 top-90 w-96 h-96 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 60% 40%, rgba(255,85,85,0.75) 100%, rgba(255,120,110,0.3) 35%, rgba(255,120,110,0.06) 70%, transparent 100%)",
              filter: "blur(48px)",
              mixBlendMode: "screen",
            }}
          />
        </div>
      </div>

      <div className="relative">
        <Image
          src="/images/star.svg"
          alt="star"
          width={50}
          height={50}
          className="absolute bottom-66 left-30"
        />
        <Image
          src="/images/star.svg"
          alt="star"
          width={50}
          height={50}
          className="absolute bottom-166 -left-24 rotate-14 size-20"
        />
        <Image
          src="/images/star.svg"
          alt="star"
          width={50}
          height={50}
          className="absolute bottom-170 right-10 size-14"
        />
        <Image
          src="/images/star.svg"
          alt="star"
          width={50}
          height={50}
          className="absolute rotate-13 bottom-20 right-90 size-12"
        />
      </div>
    </section>
  );
}
