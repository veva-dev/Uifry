import React from "react";
import AboutUs from "./components/AboutUs";
import Pricing from "./components/Pricing";
import Features from "./components/Features";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="lg:px-20 md:px-12 sm:px-8 px-4 pt-24 max-w-7xl w-full mx-auto">
      <main>
        <div>
          <Hero />
        </div>
        <div className="pt-10">
          <Features />
        </div>
        <div className="pt-30">
          <AboutUs />
        </div>
        <div className="lg:pt-24 pt-80">
          <Pricing />
        </div>
      </main>
    </div>
  );
}
