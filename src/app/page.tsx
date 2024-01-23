"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/global/Navbar";
import { projects } from "@/data/content/projects";
import Link from "next/link";
import { Image } from "@nextui-org/react";

export default function Home() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const headerHeight = (headerRef.current as HTMLElement)?.clientHeight;
    const range = 200;
    const offset = headerHeight / 2;

    const didScrollPage = () => {
      let calc = 1 - (window.scrollY - offset + range) / range;

      if (calc > 1) {
        calc = 1;
      } else if (calc < 0) {
        calc = 0;
      }

      setOpacity(calc);
    };

    window.addEventListener("scroll", didScrollPage);

    return () => {
      window.removeEventListener("keydown", didScrollPage);
    };
  }, []);

  return (
    <>
      <Navbar />
      <section
        className="px-4 md:px-[2%] fixed mt-8 z-20"
        ref={headerRef}
        style={{ opacity: opacity }}
      >
        <div className="text-white text-3xl md:text-7xl max-w-6xl h-[55vh] flex items-center">
          <p className="leading-tight">
            Hello! I&apos;m Ziady Mubaraq — Software Engineer, Passionate
            Educator ↓
          </p>
        </div>
      </section>
      <div className="placeholder h-[55vh] opacity-0"></div>
      <section className="md:px-[2%] relative z-20">
        <main>
          <div className="grid sm:grid-cols-2 gap-2">
              {projects.map((item, index) => {
                return (
                  <Link
                    className="relative"
                    href={`projects/${item.path}`}
                    key={index}
                  >
                    <Image
                      className="cursor-pointer"
                      isZoomed
                      src={item.thumbnail}
                      alt={item.title}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
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
                    src={
                      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    }
                    alt="ReactJS"
                    width={32}
                    height={32}
                  />
                  <span className="sr-only">React</span>
                </span>
                <span>
                  <Image
                    src={
                      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
                    }
                    alt="NextJS"
                    width={55}
                    height={32}
                    className="invert"
                  />
                  <span className="sr-only">NextJS</span>
                </span>
                <span>
                  <Image
                    src={
                      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                    }
                    alt="TailwindCSS"
                    width={32}
                    height={32}
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
