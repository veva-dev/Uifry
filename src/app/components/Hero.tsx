"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section id="home">
      <div className="flex justify-between items">
        {/* левый бок */}
        <div className="space-y-6">
          {/* текст главного экрана */}
          <div className="space-y-6">
            <h1 className="text-6xl font-bold">
              Make The Best
              <br />
              Financial Decisions
            </h1>
            <p className="font-medium text-black/50">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              <br />
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>

          {/* кнопки */}
          <div className="flex items-center gap-8">
            <button className="bg-black text-white flex justify-center items-center py-3 px-4 gap-2 rounded-sm cursor-pointer">
              Get Started
              <Image
                alt="arrow"
                src="/images/arrow.svg"
                width={25}
                height={25}
              />
            </button>
            <button className="flex justify-center items-center gap-3 cursor-pointer">
              <Image
                alt="player"
                src="/images/player.svg"
                width={25}
                height={25}
              />
              Watch Video
            </button>
          </div>

          {/* линия */}
          <div>
            <Image src="/images/line.svg" alt="line" width={480} height={480} />
          </div>
        </div>

        {/* правый бок */}
        <div>
          <div className="relative w-118 h-118">
            <Image
              alt="phone1"
              src="/images/phone1.svg"
              width={280}
              height={280}
              className="absolute inset-0 z-3 w-full h-full"
            />
            <Image
              alt="phone2"
              src="/images/phone2.svg"
              width={280}
              height={280}
              className="absolute right-24 bottom-24 z-10 w-full h-full"
            />
            <Image
              alt="phone2"
              src="/images/phone2.svg"
              width={280}
              height={280}
              className="absolute top-24 left-24 z-2 w-full h-full"
            />
            <Image
              src="/images/oval.svg"
              alt="oval 1"
              height={280}
              width={280}
              className="absolute z-1 w-full h-full left-24"
            />
            <Image
              src="/images/oval.svg"
              alt="oval 1"
              height={280}
              width={280}
              className="absolute top-6 z-1 w-full h-full left-16"
            />
            <Image
              src="/images/oval.svg"
              alt="oval 1"
              height={280}
              width={280}
              className="absolute top-12 z-1 w-full h-full left-8"
            />
          </div>
        </div>
      </div>

      {/* звездочки */}
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

      {/* градиент */}
      <div className="absolute pointer-events-none inset-0 -z-10">
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
    </section>
  );
}
