import React from "react";
import AboutUs from "./components/AboutUs";
import Pricing from "./components/Pricing";
import Features from "./components/Features";

export default function Home() {
  return (
    <div className="lg:px-20 md:px-18 sm:px-14 pt-50 max-w-7xl w-full mx-auto">
      <main className="">
        <div id="home">home</div>
        <div className="pt-400">
          <AboutUs />
        </div>
        <div className="pt-400">
          <Pricing />
        </div>
        <div className="pt-400">
          <Features />
        </div>
      </main>
    </div>
  );
}
