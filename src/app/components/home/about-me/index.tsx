'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from "next/image";
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaGithub } from "react-icons/fa";


function AboutMe() {
const ref = useRef<HTMLDivElement>(null);
const isInView = useInView(ref, { once: true });

  const bottomAnimation = (index: number) => ({
    initial: { y: '20%', opacity: 0 },
    animate: isInView ? { y: 0, opacity: 1 } : { y: '10%', opacity: 0 },
    transition: { duration: 1, delay: 0.8 + index * 0.3 },
  })

  return(
    <section id='aboutme'>
      <div ref={ref} className='2xl:py-20 py-11'>
        <div className='container'>
            <div className='grid md:grid-cols-2 gap-x-6 gap-y-8 justify-center'>
              <div className='flex items-center flex-col gap-6'>
                <motion.div
                  {...bottomAnimation(0)} className="relative">
                   <Image
                    src="/images/profile/atul.jpg"
                    alt="Atul Bharadwaj"
                    className="w-md object-cover rounded-2xl"
                    width={400}
                    height={600}
                    />
                </motion.div>
              </div>
              <motion.div
                  {...bottomAnimation(1)} className='flex flex-col justify-between max-w-xl text-left gap-11 xl:gap-16 border border-dark_black/10 p-6 2xl:p-10 rounded-2xl bg-pale-yellow'>
                <h3 className='text-dark_black'>About <span className='instrument-font italic font-normal dark:text-black/70'>Me!</span></h3>
                <p className='text-lg text-justify text-dark_black leading-relaxed'>
                  Hi, I&apos;m Atul, a software engineer at Panasonic Avionics building distributed, high-availability platforms &mdash; from serverless AWS backends and real-time Go services to full-stack passenger ecommerce experiences used by 10+ airline customers.
                  <br/><br/>
                  I care about system design, observability, and shipping reliable software quickly. Lately I&apos;ve also been building AI-assisted engineering workflows to help teams review code, generate tests, and validate output faster without sacrificing rigor.</p>
                   <div className="flex gap-4">
                    <a href="https://github.com/am11449" className="text-dark_black/60 dark:text-black/60 hover:text-sky-500 dark:hover:text-sky-400 text-2xl transition">
                      <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/atulmbharadwaj/" className="text-dark_black/60 dark:text-black/60 hover:text-blue-700 dark:hover:text-blue-400 text-2xl transition">
                      <FaLinkedinIn />
                    </a>
                    <a href="https://www.facebook.com/AtulMb99/" className="text-dark_black/60 dark:text-black/60 hover:text-blue-600 dark:hover:text-blue-400 text-2xl transition">
                      <FaFacebookF />
                    </a>
                    <a href="https://www.instagram.com/a_b047/" className="text-dark_black/60 dark:text-black/60 hover:text-pink-600 dark:hover:text-pink-400 text-2xl transition">
                      <FaInstagram />
                    </a>
                  </div>
              </motion.div>
            </div>
          </div>
        </div>
    </section>
  )

}

export default AboutMe
