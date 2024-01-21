"use client";

import Image from "next/image";
import Navbar from "@/components/global/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="placeholder h-[100px] opacity-0"></div>
      <section className="md:px-[2%] relative z-20">
        <main>
          <div className="container mx-auto" style={{ maxWidth: "1000px" }}>
            <img src="/ziady-portrait.jpg" />
            <div className="text-white px-4 md:px-0">
              <p className="text-xl md:text-3xl py-10">
                Hello! I'm Ziady Mubaraq, a Software Engineer based in{" "}
                <span className="text-yellow-400">Jakarta</span>
                <br />
                <br />
                <span className="text-yellow-400">My work</span> focuses on
                developing <span className="text-yellow-400">web</span> and{" "}
                <span className="text-yellow-400">mobile applications</span>,
                concurrently, I served as a{" "}
                <span className="text-yellow-400">lead instructor</span> at{" "}
                Hacktiv8 before
                <br />
                <br />
                In addition, I am a graduate of the{" "}
                <span className="text-yellow-400">Apple Developer Academy</span>,
                where I deepened my knowledge in various Apple frameworks and
                tech stacks as an{" "}
                <span className="text-yellow-400">iOS Engineer</span>
                <br />
                <br />
                Let's connect at{" "}
                <span className="text-yellow-400">ziterz@icloud.com</span>
              </p>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
