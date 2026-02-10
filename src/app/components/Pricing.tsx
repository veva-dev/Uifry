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
      <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-0">
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
      <div></div>
    </section>
  );
}
