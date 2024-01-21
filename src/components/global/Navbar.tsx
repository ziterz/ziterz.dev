"use client";

import Link from "next/link";
import { useState, JSX, SVGProps } from "react";
import { animateScroll } from "react-scroll";
import { routes } from "@/data/global";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToTop = () => {
    animateScroll.scrollToTop({ duration: 500 });
  };

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = "";
    } else {
      setIsMenuOpen(true);
      document.body.style.overflow = "hidden";
    }
  }

  return (
    <header
      className={`px-4 md:px-[2%] pt-7 fixed z-30 w-full ${
        isMenuOpen && "bg-black"
      }`}
    >
      <div className="hidden sm:block z-100">
        <nav className="text-2xl py-5">
          {routes.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.path}
                className="inline-block pe-8 active hover:line-through"
              >
                {item.title}
              </Link>
            );
          })}
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
              {routes.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="text-gray-100 text-2xl"
                    style={{ transitionDelay: `${150 + 1 * 25}ms` }}
                  >
                    <Link
                      href={item.path}
                      className="flex justify-center w-full pb-8 hover:line-through"
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </nav>
      </div>
      <a
        onClick={scrollToTop}
        className="fixed bottom-[4%] right-[2%] p-3 z-40 cursor-pointer rounded-full bg-white shadow-md"
      >
        <img src="/arrow.svg" alt="" width={32} />
      </a>
    </header>
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
