import { useState, useEffect, useRef } from "react";

export default function Hero() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(1);

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
      <section
        className="px-4 md:px-[2%] fixed mt-8 z-20"
        ref={headerRef}
        style={{ opacity: opacity }}
      >
        <div className="text-white text-3xl md:text-7xl max-w-5xl h-[55vh] flex items-center">
          <p className="leading-tight">
            Hello! I&apos;m Ziady Mubaraq — Software Engineer, Passionate
            Educator ↓
          </p>
        </div>
      </section>
      <div className="placeholder h-[55vh] opacity-0"></div>
    </>
  );
}
