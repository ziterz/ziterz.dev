"use client";

import Image from "next/image";
import Navbar from "@/components/global/Navbar";
import { Suspense } from "react";
import { CardSkeleton, ContentSkeleton } from "@/components/global/Loading";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="placeholder h-[100px] opacity-0"></div>
      <section className="md:px-[2%] relative z-20">
        <main>
          <div className="container mx-auto" style={{ maxWidth: "1000px" }}>
            <div className="w-full aspect-video">
              <Suspense fallback={<CardSkeleton />}>
                <Image
                  src={"https://raw.githubusercontent.com/ziterz/ziterz.dev/master/public/static/ziady.jpg"}
                  alt={"Ziady Mubaraq"}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  width={0}
                  height={0}
                />
              </Suspense>
            </div>

            <div className="text-white px-4 md:px-0">
              <Suspense fallback={<ContentSkeleton />}>
                <p className="text-xl md:text-3xl py-10">
                  Hello! I&apos;m Ziady Mubaraq, a Software Engineer based in{" "}
                  <span className="text-yellow-400">Jakarta</span>
                  <br />
                  <br />
                  <span className="text-yellow-400">My work</span> focuses on
                  developing <span className="text-yellow-400">websites</span>{" "}
                  and{" "}
                  <span className="text-yellow-400">mobile applications</span>.
                  Concurrently, I served as a{" "}
                  <span className="text-yellow-400">Lead Instructor</span> at{" "}
                  Hacktiv8
                  <br />
                  <br />
                  Additionally, I&apos;m a graduate of the{" "}
                  <span className="text-yellow-400">
                    Apple Developer Academy
                  </span>
                  , where I deepened my knowledge in various Apple frameworks
                  and tech stacks as an{" "}
                  <span className="text-yellow-400">iOS Engineer</span>
                  <br />
                  <br />
                  Let&apos;s connect at{" "}
                  <span className="text-yellow-400">ziterz@icloud.com</span>
                  {/* <span className="hidden text-blue-500"></span> */}
                  {/* <span className="hidden text-orange-500"></span> */}
                  {/* <span className="hidden text-red-500"></span> */}
                </p>
              </Suspense>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
