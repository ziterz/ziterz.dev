"use client";

import Navbar from "@/components/global/Navbar";
import Riot from "./riot/page";

export default function About() {

  return (
    <>
      <Navbar />
      <div className="placeholder h-[100px] opacity-0"></div>
      <section className="md:px-[2%] relative z-20">
        <main>
          <Riot />
        </main>
      </section>
    </>
  );
}