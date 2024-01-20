"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { animateScroll } from "react-scroll";

export default function Home() {
  const scrollToTop = () => {
    animateScroll.scrollToTop({ duration: 500 });
  };
  const [opacity, setOpacity] = useState(1);
  const headerRef = useRef<HTMLDivElement>(null);

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
      <div className="px-4 md:px-[2%] pt-7 fixed z-30">
        <header>
          <nav className="text-2xl py-5 hidden md:block">
            <div className="inline-block pe-8 active hover:line-through">
              <a href="">Work</a>
            </div>
            <div className="inline-block hover:line-through">
              <a href="">About Me</a>
            </div>
          </nav>
        </header>
      </div>
      <div
        className="px-4 md:px-[2%] fixed mt-8 z-20"
        ref={headerRef}
        style={{ opacity: opacity }}
      >
        <div className="text-white text-3xl md:text-7xl max-w-6xl h-[55vh] flex items-center">
          <p className="leading-tight">
            Hello! I'm Ziady Mubaraq — Software Engineer, Passionate Educator ↓
          </p>
        </div>
      </div>
      <div className="placeholder h-[55vh] opacity-0"></div>
      <div className="md:px-[2%] relative z-20">
        <main>
          <div className="grid md:grid-cols-2 gap-2">
            <a className="relative cursor-pointer" href="">
              <div className="relative">
                <img src="/riot-boardgame.png" />
              </div>
              <div className="bg-black w-full absolute h-full top-0 bg-opacity-0 hover:bg-opacity-40 py-[8%] opacity-0 hover:opacity-100 transition-all">
                <div className="flex items-center h-full w-full relative">
                  <div className="flex items-center relative px-[8%] w-full">
                    <div className="text-center uppercase w-full text-2xl text-white">
                      Riot Hybrid Boardgame
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a className="relative cursor-pointer" href="">
              <div className="relative">
                <img src="/riot-boardgame.png" />
              </div>
              <div className="bg-black w-full absolute h-full top-0 bg-opacity-0 hover:bg-opacity-40 py-[8%] opacity-0 hover:opacity-100 transition-all">
                <div className="flex items-center h-full w-full relative">
                  <div className="flex items-center relative px-[8%] w-full">
                    <div className="text-center uppercase w-full text-2xl text-white">
                      Riot Hybrid Boardgame
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a className="relative cursor-pointer" href="">
              <div className="relative">
                <img src="/riot-boardgame.png" />
              </div>
              <div className="bg-black w-full absolute h-full top-0 bg-opacity-0 hover:bg-opacity-40 py-[8%] opacity-0 hover:opacity-100 transition-all">
                <div className="flex items-center h-full w-full relative">
                  <div className="flex items-center relative px-[8%] w-full">
                    <div className="text-center uppercase w-full text-2xl text-white">
                      Riot Hybrid Boardgame
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a className="relative cursor-pointer" href="">
              <div className="relative">
                <img src="/riot-boardgame.png" />
              </div>
              <div className="bg-black w-full absolute h-full top-0 bg-opacity-0 hover:bg-opacity-40 py-[8%] opacity-0 hover:opacity-100 transition-all">
                <div className="flex items-center h-full w-full relative">
                  <div className="flex items-center relative px-[8%] w-full">
                    <div className="text-center uppercase w-full text-2xl text-white">
                      Riot Hybrid Boardgame
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a className="relative cursor-pointer" href="">
              <div className="relative">
                <img src="/riot-boardgame.png" />
              </div>
              <div className="bg-black w-full absolute h-full top-0 bg-opacity-0 hover:bg-opacity-40 py-[8%] opacity-0 hover:opacity-100 transition-all">
                <div className="flex items-center h-full w-full relative">
                  <div className="flex items-center relative px-[8%] w-full">
                    <div className="text-center uppercase w-full text-2xl text-white">
                      Riot Hybrid Boardgame
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </main>
      </div>
      <div className="px-4 md:px-[2%] text-center py-7">
        <a
          onClick={scrollToTop}
          className="fixed bottom-[4%] right-[2%] p-3 z-40 cursor-pointer rounded-full bg-white"
        >
          <img src="./arrow.svg" alt="" width={32} />
        </a>
        <footer>
          <div className="flex flex-col items-center justify-center ">
            <div className="inline-flex items-center uppercase text-xs font-bold tracking-widest">
              Made with{" "}
              <div className="space-x-2 inline-flex items-center -mt-1 ml-3">
                <span>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    width="30"
                    title="React"
                  />
                  <span className="sr-only">React</span>
                </span>
                <span>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
                    width="42"
                    className="invert"
                    title="NextJS"
                  />
                  <span className="sr-only">NextJS</span>
                </span>
                <span>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                    width="30"
                    title="TailwindCSS"
                  />
                  <span className="sr-only">TailwindCSS</span>
                </span>
              </div>
            </div>
            <div className="mt-2 text-md ">
              Made by{" "}
              <a
                href="mailto:ziterz@icloud.com"
                className="text-gray font-medium"
              >
                Ziady Mubaraq
              </a>
              . All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
