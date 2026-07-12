'use client'
import { useRef } from 'react'
import { motion } from 'framer-motion'

function HeroSection() {
  const ref = useRef(null)

  const bottomAnimation = {
    initial: { y: '20%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1, delay: 0.8 },
  }

  return (
    <section id="hero">
      <div className='relative w-full pt-44 2xl:pb-20 pb-10 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-blue_gradient before:via-white before:to-yellow_gradient before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-dark_blue_gradient dark:before:via-black dark:before:to-dark_yellow_gradient dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10'>
        <div className='container relative z-10'>
          <div ref={ref} className='flex flex-col gap-8'>
            <motion.div
              {...bottomAnimation}
              className='relative flex flex-col text-center items-center gap-4'>
              <h1 className='font-medium w-full'>
                I&apos;m Atul Bharadwaj, <br />
                <span className='instrument-font italic font-normal dark:text-white/70'>
                  {' '}
                  a Software Engineer at Panasonic Avionics
                </span>
              </h1>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
