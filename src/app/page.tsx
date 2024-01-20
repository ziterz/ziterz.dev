"use client";

import Image from "next/image";
import { useState, useEffect, createRef } from "react";
import { animateScroll } from "react-scroll";

export default function Home() {
  const scrollToTop = () => {
    animateScroll.scrollToTop({ duration: 500});
  };
  const [opacity, setOpacity] = useState(1);
  const headerRef = createRef();

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
      <div className="px-4 md:px-6 pt-7 fixed z-30">
        <header>
          <nav className="text-2xl py-5 hidden md:block">
            <div className="inline-block pe-8 active hover:line-through">
              <a href="">Work</a>
            </div>
            <div className="inline-block hover:line-through">
              <a href="">About</a>
            </div>
          </nav>
        </header>
      </div>
      <div
        className="px-4 md:px-6 fixed mt-8 z-20"
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
      <div className="md:px-6 relative z-20">
        <main>
          <div className="grid md:grid-cols-2 gap-2">
            <div>
              <img src="/riot-boardgame.png" />
            </div>
            <div>
              <img src="/riot-boardgame.png" />
            </div>
            <div>
              <img src="/riot-boardgame.png" />
            </div>
            <div>
              <img src="/riot-boardgame.png" />
            </div>
            <div>
              <img src="/riot-boardgame.png" />
            </div>
          </div>
        </main>
      </div>
      <div className="px-4 md:px-6 text-center py-7">
        <a onClick={scrollToTop} className="fixed bottom-0 right-0 p-5 z-40 cursor-pointer">
          <div className="">To the top!</div>
        </a>
        <footer>Copyright &copy; 2024</footer>
      </div>
    </>
  );
}
