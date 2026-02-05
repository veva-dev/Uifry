"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-4 sm:px-8 md:px-12 lg:px-20 mx-auto max-w-7xl pt-20 md:pt-40 lg:pt-60 pb-10 md:pb-20 lg:pb-30 w-full">
      <div className="flex flex-col lg:flex-row lg:gap-4 xl:gap-6">
        <div className="lg:w-1/3 mb-10 lg:mb-0 space-y-4">
          <Image
            src="/images/uifry.svg"
            width={120}
            height={24}
            alt="uifry financial bank"
            priority
            className="transition-all duration-500"
          />
          <div className="flex items-center gap-3">
            <Image
              src="/images/email.svg"
              width={20}
              height={20}
              alt="email"
              priority
            />
            <p className="text-gray-600 text-sm md:text-base">
              Help@VevaDev.Com
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/phone.svg"
              width={20}
              height={20}
              alt="phone"
              priority
            />
            <p className="text-gray-600 text-sm md:text-base">
              +72348923489824
            </p>
          </div>
        </div>

        <div className="lg:w-2/3">
          <div className="flex flex-col md:flex-row flex-wrap gap-8 md:gap-12 lg:gap-16">
            <div className="md:w-auto">
              <h3 className="text-lg font-semibold mb-4 md:mb-6">Links</h3>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <Link
                    href="#home"
                    className="text-gray-600 hover:text-black transition-colors text-sm md:text-base"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="text-gray-600 hover:text-black transition-colors text-sm md:text-base"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#bookings"
                    className="text-gray-600 hover:text-black transition-colors text-sm md:text-base"
                  >
                    Bookings
                  </Link>
                </li>
                <li>
                  <Link
                    href="#blog"
                    className="text-gray-600 hover:text-black transition-colors text-sm md:text-base"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div className="md:w-auto">
              <h3 className="text-lg font-semibold mb-4 md:mb-6">Legal</h3>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-black transition-colors text-sm md:text-base"
                  >
                    Terms Of Use
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-black transition-colors text-sm md:text-base"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-black transition-colors text-sm md:text-base"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div className="md:w-auto">
              <h3 className="text-lg font-semibold mb-4 md:mb-6">Product</h3>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-black transition-colors text-sm md:text-base"
                  >
                    Take Tour
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-black transition-colors text-sm md:text-base"
                  >
                    Live Chat
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-black transition-colors text-sm md:text-base"
                  >
                    Reviews
                  </Link>
                </li>
              </ul>
            </div>

            <div className="md:w-full lg:w-auto lg:flex-1 mt-4 md:mt-0">
              <h3 className="text-lg font-semibold mb-4 md:mb-6">Newsletter</h3>
              <p className="text-gray-600 mb-4 text-sm md:text-base">
                Stay Up To Date
              </p>
              <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md lg:max-w-none">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full sm:flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 text-sm md:text-base"
                />
                <button className="w-full sm:w-auto px-6 py-3 bg-gray-900 text-white hover:bg-black rounded-lg transition-colors text-sm md:text-base whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
