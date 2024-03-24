// "use client";

import Navbar from '@/components/global/Navbar';
import { Image } from '@nextui-org/react';

export default function About() {
  return (
    <>
      <Navbar />
      <div className='placeholder h-[100px] opacity-0'></div>
      <section className='md:px-[2%] relative z-20'>
        <main>
          <div className='container mx-auto' style={{ maxWidth: '1000px' }}>
            <Image
              src={'https://ik.imagekit.io/ziterz/ziady.jpg'}
              alt='Ziady Mubaraq'
              style={{ width: '100%', height: 'auto' }}
              sizes='100vw'
              width={0}
              height={0}
              radius='none'
              loading='lazy'
            />
            <div className='text-white px-2 md:px-0'>
              <p className='text-xl md:text-3xl py-10'>
                Hello! I&apos;m Ziady Mubaraq, a Front End Engineer based in{' '}
                <span className='text-yellow-400'>Jakarta</span>
                <br />
                <br />
                <span className='text-yellow-400'>My work</span> focuses on
                developing <span className='text-yellow-400'>websites</span> and{' '}
                <span className='text-yellow-400'>mobile applications</span>.
                Concurrently, I served as a{' '}
                <span className='text-yellow-400'>
                  Lead Phase Full-Stack JavaScript Instructor
                </span>{' '}
                at Hacktiv8
                <br />
                <br />
                I&apos;m a graduate of the{' '}
                <span className='text-yellow-400'>Apple Developer Academy</span>
                , where I deepened my knowledge in various Apple frameworks and
                tech stacks in{' '}
                <span className='text-yellow-400'>iOS Development</span>
                <br />
                <br />
                Let&apos;s connect at{' '}
                <a
                  href='mailto:ziady.mubaraq@gmail.com'
                  target='_blank'
                  className='text-yellow-400 hover:line-through'
                >
                  ziady.mubaraq@gmail.com
                </a>
                <br />
                <br />
                Follow me on{' '}
                <span>
                  <a
                    href='https://github.com/ziterz'
                    target='_blank'
                    className='text-yellow-400 hover:line-through'
                  >
                    GitHub
                  </a>
                  ,{' '}
                  <a
                    href='https://leetcode.com/ziterz'
                    target='_blank'
                    className='text-yellow-400 hover:line-through'
                  >
                    LeetCode
                  </a>
                  , and{' '}
                  <a
                    href='https://www.linkedin.com/in/ziterz'
                    target='_blank'
                    className='text-yellow-400 hover:line-through'
                  >
                    LinkedIn
                  </a>
                </span>
                {/* <span className="hidden text-blue-500"></span> */}
                {/* <span className="hidden text-orange-500"></span> */}
                {/* <span className="hidden text-red-500"></span> */}
                {/* <span className="hidden text-emerald-500"></span> */}
                {/* <span className="hidden text-neutral-400"></span> */}
                {/* <span className="hidden text-orange-400"></span> */}
                {/* <span className="hidden text-cyan-400"></span> */}
                {/* <span className="hidden text-green-400"></span> */}
                {/* <span className="hidden text-pink-500 list-inside list-disc"></span> */}
              </p>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
