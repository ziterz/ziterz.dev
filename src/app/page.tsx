"use client";

import Image from "next/image";
import { useState, useEffect, useRef, JSX, SVGProps } from "react";
import { animateScroll } from "react-scroll";
import Link from "next/link";

export default function Home() {
  const scrollToTop = () => {
    animateScroll.scrollToTop({ duration: 500 });
  };
  const [opacity, setOpacity] = useState(1);
  const headerRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = "";
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = "hidden";
    }
  }

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
      <header className="px-4 md:px-[2%] pt-7 fixed z-30 w-full">
        <div className="hidden sm:block z-100">
          <nav className="text-2xl py-5">
            <div className="inline-block pe-8 active hover:line-through">
              <a href="">Portfolio</a>
            </div>
            <div className="inline-block hover:line-through">
              <a href="">About Me</a>
            </div>
          </nav>
        </div>
        <div className="block sm:hidden z-100">
          <nav className="text-2xl">
            <div
              className={`w-full justify-between flex items-center ${
                isMenuOpen && "bg-bg"
              } p-5`}
              style={{ zIndex: 101 }}
            >
              <div></div>
              <button
                className="burger visible md:hidden"
                aria-label="Toggle menu"
                type="button"
                onClick={toggleMenu}
              >
                <MenuIcon data-hide={isMenuOpen} />
                <CrossIcon data-hide={!isMenuOpen} />
              </button>
            </div>
            {isMenuOpen && (
              <ul
                className={`menu flex flex-col absolute bg-black
            ${isMenuOpen && "menuRendered"}`}
              >
                <li
                  className="text-gray-100 text-2xl"
                  style={{ transitionDelay: `${150 + 1 * 25}ms` }}
                >
                  <Link
                    href=""
                    className="flex justify-center w-full pb-8 hover:line-through"
                  >
                    Portfolio
                  </Link>
                </li>
                <li
                  className="text-gray-100 text-2xl"
                  style={{ transitionDelay: `${150 + 1 * 25}ms` }}
                >
                  <Link
                    href=""
                    className="flex justify-center w-full hover:line-through"
                  >
                    About Me
                  </Link>
                </li>
              </ul>
            )}
          </nav>
        </div>
      </header>
      <section
        className="px-4 md:px-[2%] fixed mt-8 z-20"
        ref={headerRef}
        style={{ opacity: opacity }}
      >
        <div className="text-white text-3xl md:text-7xl max-w-6xl h-[55vh] flex items-center">
          <p className="leading-tight">
            Hello! I'm Ziady Mubaraq — Software Engineer, Passionate Educator ↓
          </p>
        </div>
      </section>
      <div className="placeholder h-[55vh] opacity-0"></div>
      <section className="md:px-[2%] relative z-20">
        <main>
          <div className="grid sm:grid-cols-2 gap-2">
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
      </section>
      <section className="px-4 md:px-[2%] text-center py-7">
        <a
          onClick={scrollToTop}
          className="fixed bottom-[4%] right-[2%] p-3 z-40 cursor-pointer rounded-full bg-white hidden md:block"
        >
          <img src="./arrow.svg" alt="" width={32} />
        </a>
        <footer>
          <div className="flex flex-col items-center justify-center ">
            <div className="inline-flex items-center uppercase text-xs font-bold tracking-widest">
              Made with{" "}
              <div className="space-x-2 inline-flex items-center -mt-1 ml-3">
                <span>
                  <Image
                    src={
                      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    }
                    alt="ReactJS"
                    width={30}
                    height={30}
                  />
                  <span className="sr-only">React</span>
                </span>
                <span>
                  <Image
                    src={
                      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
                    }
                    alt="NextJS"
                    width={50}
                    height={30}
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
                    width={30}
                    height={30}
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
