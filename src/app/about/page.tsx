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
                Hello! I'm Ziady Mubaraq, a Software Engineer based in Jakarta
                <br />
                <br />
                My work focuses on developing web and mobile applications,
                concurrently, I served as a lead instructor at Hacktiv8 before
                <br />
                <br />
                In addition, I am a graduate of the Apple Developer Academy,
                where I deepened my knowledge in various Apple frameworks and
                tech stacks as an iOS Engineer
                <br />
                <br />
                Let's connect at ziterz@icloud.com
              </p>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      className="h-10 w-10 absolute text-gray-100"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M2.5 5.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 10.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 15.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      className="h-10 w-10 absolute text-gray-100"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}
