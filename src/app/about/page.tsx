// "use client";

import Navbar from '@/components/global/Navbar';
import { Image } from '@nextui-org/react';

export default function About() {
  return (
    <>
      <Navbar />
      <div className="placeholder h-[100px] opacity-0"></div>
      <section className="md:px-[2%] relative z-20">
        <main>
          <div className="container mx-auto" style={{ maxWidth: '1000px' }}>
            <Image
              src={'https://ik.imagekit.io/ziterz/ziady.jpg'}
              alt="Ziady Mubaraq"
              style={{ width: '100%', height: 'auto' }}
              sizes="100vw"
              width={0}
              height={0}
              radius="none"
              loading="lazy"
            />
            <div className="text-neutral-400 px-2 md:px-0">
              <p className="text-xl md:text-3xl py-10">
                Hello! I&apos;m Ziady, a <span className="text-white">Full-Stack Developer</span> based in{' '}
                <span className="text-white">Jakarta</span>.
                <br />
                <br />
                Currently, I work at <span className="text-white"><a
                  href="https://www.lunash.id/"
                  target="_blank"
                  className="text-white hover:line-through"
                >Lunash</a></span>, focusing on developing SaaS applications. At Lunash, we build <span className="text-white">AI-driven debt management solutions</span> and <span className="text-white">AI Chat Agents</span> that automate customer communication for financial institutions across Indonesia, including regional banks, rural banks, P2P lenders, multifinance companies, and debt collection agencies.
                <br />
                <br />
                Previously, I served as a <span className="text-white">Lead Phase Full-Stack JavaScript Instructor</span> at <span className="text-white"><a
                  href="https://www.hacktiv8.com/"
                  target="_blank"
                  className="text-white hover:line-through"
                >Hacktiv8</a></span> for 4+ years. I&apos;m also a graduate of the <span className="text-white"><a
                  href="https://www.developeracademy.infinitelearning.id/"
                  target="_blank"
                  className="text-white hover:line-through"
                >Apple Developer Academy</a></span> Cohort 2023, where I gained deep expertise in various Apple frameworks and the Apple ecosystem, particularly in <span className="text-white">iOS development</span>.
                <br />
                <br />
                Let&apos;s connect at{' '}
                <a
                  href="mailto:ziady.mubaraq@gmail.com"
                  target="_blank"
                  className="text-white hover:line-through"
                >
                  ziady.mubaraq@gmail.com
                </a>
                <br />
                <br />
                Follow me on{' '}
                <span>
                  <a
                    href="https://github.com/ziterz"
                    target="_blank"
                    className="text-white hover:line-through"
                  >
                    GitHub
                  </a>
                  ,{' '}
                  <a
                    href="https://leetcode.com/ziterz"
                    target="_blank"
                    className="text-white hover:line-through"
                  >
                    LeetCode
                  </a>
                  ,{' '}
                  <a
                    href="https://www.youtube.com/@ziterz"
                    target="_blank"
                    className="text-white hover:line-through"
                  >
                    YouTube
                  </a>
                  , and{' '}
                  <a
                    href="https://www.linkedin.com/in/ziterz"
                    target="_blank"
                    className="text-white hover:line-through"
                  >
                    LinkedIn
                  </a>
                </span>
              </p>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
