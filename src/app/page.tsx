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
      <footer className="p-4">
        <p className="text-center text-sm text-neutral-400">
          &copy; {new Date().getFullYear()}. All rights reserved.
        </p>
      </footer>
    </>
  );
}
