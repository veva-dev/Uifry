import Image from "next/image";
import React from "react";

export default function AboutUs() {
  return (
    <section id="about">
      <div className="flex justify-center items-center flex-col">
        <h2 className="text-black/70">TESTIMONIAL</h2>
        <p className="text-5xl font-bold text-center">
          What Our Users
          <br />
          Say About Us?
        </p>
      </div>

      <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:pt-34 pt-16 lg:gap-12">
        <div className="relative h-auto lg:h-screen w-full flex items-center justify-center order-2 lg:order-1 top-58">
          <div className="relative sm:w-[146px] sm:h-[146px] w-24 h-24 -top-24 lg:-top-44">
            <Image
              src="/images/aboutus/human1.svg"
              alt="human images"
              fill
              className="object-contain"
            />

            <div className="absolute z-10 left-24">
              <Image
                src="/images/aboutus/marks.svg"
                height={90}
                width={90}
                alt="marks"
                className="object-contain"
              />
            </div>

            <div className="absolute -top-20 -left-16">
              <Image
                src="/images/aboutus/human2.svg"
                height={56}
                width={56}
                alt="human images"
                className="object-contain"
              />
            </div>

            <div className="absolute -top-20 -right-16">
              <Image
                src="/images/aboutus/human3.svg"
                height={66}
                width={66}
                alt="human images"
                className="object-contain"
              />
            </div>

            <div className="absolute top-36 -left-12">
              <Image
                src="/images/aboutus/human4.svg"
                height={62}
                width={62}
                alt="human images"
                className="object-contain"
              />
            </div>

            <div className="absolute top-32 -right-18">
              <Image
                src="/images/aboutus/human5.svg"
                height={72}
                width={72}
                alt="human images"
                className="object-contain"
              />
            </div>

            <div className="absolute sm:-inset-14 -inset-20 -z-10 sm:w-66 sm:h-66">
              <Image
                src="/images/oval.svg"
                alt="oval"
                fill
                className="object-contain opacity-30 scale-110"
              />
              <Image
                src="/images/oval.svg"
                alt="oval"
                fill
                className="object-contain opacity-50 scale-90"
              />

              <Image
                src="/images/oval.svg"
                alt="oval"
                fill
                className="object-contain opacity-70 scale-70"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-6 max-w-lg order-1 lg:order-2 items-center text-center lg:text-start lg:items-start">
          <p className="text-2xl font-bold">
            The Best Financial Accounting
            <br />
            AppEver!
          </p>
          <p className="text-black/70">
            "Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris etiam odio. Duis
            tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus,
            diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor
            neque lorem sapien, suspendisse aliquam."
          </p>

          <div className="flex items-center gap-2">
            <Image
              src="/images/aboutus/human6.svg"
              height={34}
              width={34}
              alt="human images"
            />
            <Image
              src="/images/aboutus/human7.svg"
              height={26}
              width={26}
              alt="human images"
              className="filter brightness-75"
            />
            <Image
              src="/images/aboutus/human8.svg"
              height={26}
              width={26}
              alt="human images"
              className="filter brightness-75"
            />
            <Image
              src="/images/aboutus/human9.svg"
              height={26}
              width={26}
              alt="human images"
              className="filter brightness-75"
            />
            <Image
              src="/images/aboutus/human10.svg"
              height={26}
              width={26}
              alt="human images"
              className="filter brightness-75"
            />
            <Image
              src="/images/aboutus/human11.svg"
              height={26}
              width={26}
              alt="human images"
              className="filter brightness-75"
            />
          </div>
          <p className="font-extrabold text-[16px]">Nick Jonas</p>
        </div>
      </div>
    </section>
  );
}
