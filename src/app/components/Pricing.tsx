import Image from "next/image";
import React from "react";

export default function Pricing() {
  return (
    <section id="pricing" className="space-y-12">
      {/* заголовок */}
      <div className="text-center lg:text-start">
        <p className="text-xl font-bold text-[#FF5555]">FAQ</p>
        <p className="lg:text-5xl font-extrabold text-3xl">
          Frequently Asked
          <br />
          Questions
        </p>
      </div>

      {/* faq */}
      <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-0 pb-24">
        {/* левый */}
        <div className="space-y-8 order-2 lg:order-1">
          <div className="h-auto lg:h-[181px] w-full lg:w-[535px] bg-[#FF5555] text-white items-center p-6 justify-center space-y-4 rounded-lg">
            <p className="text-xl lg:text-2xl font-bold">
              The Best Financial Accounting
              <br />
              AppEver!
            </p>
            <p className="text-white/85 max-w-full lg:max-w-lg">
              "Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>
          <div className="h-auto lg:h-[181px] w-full lg:w-[535px] text-black items-center p-6 justify-center space-y-4 rounded-lg">
            <p className="text-xl lg:text-2xl font-bold">
              The Best Financial Accounting
              <br />
              AppEver!
            </p>
            <p className="text-black/85 max-w-full lg:max-w-lg">
              "Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>
          <div className="h-auto lg:h-[181px] w-full lg:w-[535px] bg-[#FF5555] text-white items-center p-6 justify-center space-y-4 rounded-lg">
            <p className="text-xl lg:text-2xl font-bold">
              The Best Financial Accounting
              <br />
              AppEver!
            </p>
            <p className="text-white/85 max-w-full lg:max-w-lg">
              "Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>
        </div>

        {/* правый */}
        <div className="space-y-8 order-1 lg:order-2">
          <div className="h-auto lg:h-[181px] w-full lg:w-[535px] text-black items-center p-6 justify-center space-y-4 rounded-lg">
            <p className="text-xl lg:text-2xl font-bold">
              The Best Financial Accounting
              <br />
              AppEver!
            </p>
            <p className="text-black/85 max-w-full lg:max-w-lg">
              "Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>
          <div className="h-auto lg:h-[181px] w-full lg:w-[535px] bg-[#FF5555] text-white items-center p-6 justify-center space-y-4 rounded-lg">
            <p className="text-xl lg:text-2xl font-bold">
              The Best Financial Accounting
              <br />
              AppEver!
            </p>
            <p className="text-white/85 max-w-full lg:max-w-lg">
              "Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>
          <div className="h-auto lg:h-[181px] w-full lg:w-[535px] text-black items-center p-6 justify-center space-y-4 rounded-lg">
            <p className="text-xl lg:text-2xl font-bold">
              The Best Financial Accounting
              <br />
              AppEver!
            </p>
            <p className="text-black/85 max-w-full lg:max-w-lg">
              "Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris.
            </p>
          </div>
        </div>
      </div>

      {/* pricing */}
<div className="w-full max-w-7xl mx-auto bg-black rounded-lg relative overflow-hidden">
  <div className="relative aspect-[1090/508] w-full">
    <Image
      src="/images/pricing/getStarted.svg"
      fill
      alt="get started"
      className="object-cover rounded-lg"
      priority
    />
  </div>
  
  <div className="absolute space-y-3 inset-0 flex flex-col justify-center text-white px-4 sm:px-8 md:px-12 lg:pl-16">
    <p className="sm:text-2xl md:text-3xl lg:text-4xl text-xs font-bold">
      Ready To Get Started?
    </p>
    
    <p className="md:max-w-md text-white/70 text-sm sm:text-base sm:max-w-xs text-[12px] max-w-[160px]">
      Risus habitant leo egestas mauris diam eget morbi tempus vulputate.
    </p>
    
    <button className="text-black scale-40 sm:scale-80 md:scale-100 bg-white text-base sm:text-[18px] rounded-lg flex px-4 py-2 justify-center gap-3 cursor-pointer transition-transform hover:scale-105 ease-in-out duration-300 max-w-[280px]">
      Download App
      <Image
        src="/images/pricing/iphone.svg"
        width={25.77}
        height={31.64}
        alt="iphone"
        className=""
      />
    </button>
  </div>
</div>
    </section>
  );
}
