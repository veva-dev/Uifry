import Image from "next/image";
import React from "react";

export default function Features() {
  return (
    <section id="features">
      {/* общий блок без фона и звезд */}
      <div className="flex justify-between flex-col lg:flex-row">
        <div className="relative h-124 w-124 hidden lg:flex">
          <Image
            alt="phone1"
            src="/images/phone1.svg"
            width={240}
            height={240}
            className="absolute inset-0 z-3 w-100 h-100 xl:w-full xl:h-full rotate-15"
          />

          <Image
            src="/images/oval.svg"
            alt="oval 1"
            height={240}
            width={240}
            className="absolute z-1 w-70 h-70 xl:w-100 xl:h-100 left-20"
          />

          <Image
            src="/images/oval.svg"
            alt="oval 1"
            height={240}
            width={240}
            className="absolute z-1 w-70 h-70 xl:w-100 xl:h-100 left-15 top-10"
          />

          <Image
            src="/images/oval.svg"
            alt="oval 1"
            height={240}
            width={240}
            className="absolute z-1 w-70 h-70 xl:w-100 xl:h-100 left-10 top-20"
          />
        </div>

        <div className="flex flex-col items-center lg:items-start">
          <div>
            <h2 className="text-[16px] text-[#FF5555] font-bold">FEATURES</h2>
            <p className="text-4xl font-bold">Uifry Premium</p>
          </div>

          <div className="space-y-3 pt-5">
            <p className="flex items-center font-bold gap-2">
              <Image
                src="/images/star1.svg"
                alt="star1"
                height={22}
                width={22}
              />
              Budgeting Intervals
            </p>
            <p className="max-w-xl text-black/50">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>

          <div className="space-y-3 pt-5">
            <p className="flex items-center font-bold gap-2">
              <Image
                src="/images/cube1.svg"
                alt="star1"
                height={22}
                width={22}
              />
              Budgeting Intervals
            </p>
            <p className="max-w-xl text-black/50">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>

          <div className="space-y-3 pt-5">
            <p className="flex items-center font-bold gap-2">
              <Image
                src="/images/cube2.svg"
                alt="star1"
                height={22}
                width={22}
              />
              Budgeting Intervals
            </p>
            <p className="max-w-xl text-black/50">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </p>
          </div>
        </div>
      </div>

      {/* второй блок */}
      <div className="flex justify-between flex-col lg:flex-row pt-12 items-center lg:items-start xl:items-center">
        <div className="flex flex-col items-center lg:items-start lg:pl-16">
          <div>
            <h2 className="text-[16px] text-[#FF5555] font-bold">ADVATNAGES</h2>
            <p className="text-4xl font-bold">Why Choose Uifry?</p>
          </div>

          <div className="space-y-3 pt-5">
            <p className="flex text-xl items-center font-bold gap-2">
              <Image
                src="/images/ball.svg"
                alt="star1"
                height={32}
                width={32}
              />
              Clever Notifications
            </p>
            <p className="max-w-xl text-black/50">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
          </div>
        </div>

        <div className="relative h-124 w-124 hidden lg:flex">
          <Image
            alt="phone1"
            src="/images/phone2.svg"
            width={240}
            height={240}
            className="absolute inset-0 z-3 w-100 h-100 xl:w-full xl:h-full rotate-15"
          />

          <Image
            src="/images/oval.svg"
            alt="oval 1"
            height={240}
            width={240}
            className="absolute z-1 w-70 h-70 xl:w-100 xl:h-100 left-20"
          />

          <Image
            src="/images/oval.svg"
            alt="oval 1"
            height={240}
            width={240}
            className="absolute z-1 w-70 h-70 xl:w-100 xl:h-100 left-15 top-10"
          />

          <Image
            src="/images/oval.svg"
            alt="oval 1"
            height={240}
            width={240}
            className="absolute z-1 w-70 h-70 xl:w-100 xl:h-100 left-10 top-20"
          />
        </div>
      </div>

      {/* третий блок */}
      <div className="flex justify-between flex-col lg:flex-row pt-12 items-center lg:items-start xl:items-center">
        <div className="relative h-124 w-124 hidden lg:flex">
          <Image
            alt="phone1"
            src="/images/phone12.svg"
            width={240}
            height={240}
            className="absolute inset-0 z-3 w-100 h-100 xl:w-150 xl:h-150 pl-16"
          />

          <Image
            src="/images/oval.svg"
            alt="oval 1"
            height={240}
            width={240}
            className="absolute z-1 w-70 h-70 xl:w-100 xl:h-100 left-20"
          />

          <Image
            src="/images/oval.svg"
            alt="oval 1"
            height={240}
            width={240}
            className="absolute z-1 w-70 h-70 xl:w-100 xl:h-100 left-15 top-10"
          />

          <Image
            src="/images/oval.svg"
            alt="oval 1"
            height={240}
            width={240}
            className="absolute z-1 w-70 h-70 xl:w-100 xl:h-100 left-10 top-20"
          />
        </div>
        <div className="flex flex-col items-center lg:items-start">
          <div className="space-y-3 pt-5">
            <p className="flex text-xl items-center font-bold gap-2">
              <Image
                src="/images/starOval.svg"
                alt="star1"
                height={32}
                width={32}
              />
              Fully Customizable
            </p>
            <p className="max-w-xl text-black/50">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
              ultricies. In ultrices malesuada elit mauris etiam odio. Duis
              tristique lacus, et blandit viverra nisl velit. Sed mattis
              rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
              ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
