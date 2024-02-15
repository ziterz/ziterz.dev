"use client";

import Navbar from "@/components/global/Navbar";
import Hero from "@/components/home/Hero";
import { projects } from "@/data/content/projects";
import Link from "next/link";
import { Image } from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="md:px-[2%] relative z-20">
        <main>
          <div className="grid sm:grid-cols-2 gap-2">
            {projects
              .slice(0)
              .reverse()
              .map((item, index) => {
                return (
                  <Link
                    className="relative"
                    href={`projects/${item.path}`}
                    key={index}
                  >
                    <Image
                      isZoomed
                      className="cursor-pointer"
                      src={item.thumbnail}
                      alt={item.title}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      width={0}
                      height={0}
                      radius="none"
                      loading="lazy"
                    />
                  </Link>
                );
              })}
          </div>
        </main>
      </section>
      <section className="px-4 md:px-[2%] text-center py-7">
        <footer>
          <div className="flex flex-col items-center justify-center ">
            <div className="inline-flex items-center uppercase text-xs md:text-sm font-bold tracking-widest">
              Made with{" "}
              <div className="space-x-2 inline-flex items-center -mt-1 ml-3">
                <span>
                  <Image
                    src={"/react.svg"}
                    alt="ReactJS"
                    width={32}
                    height={32}
                    radius="none"
                  />
                  <span className="sr-only">React</span>
                </span>
                <span>
                  <Image
                    src={"/next.svg"}
                    alt="NextJS"
                    width={55}
                    height={32}
                    radius="none"
                  />
                  <span className="sr-only">NextJS</span>
                </span>
                <span>
                  <Image
                    src={"/tailwindcss.svg"}
                    alt="TailwindCSS"
                    width={32}
                    height={32}
                    radius="none"
                  />
                  <span className="sr-only">TailwindCSS</span>
                </span>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}
