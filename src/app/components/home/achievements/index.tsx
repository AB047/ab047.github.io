'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { certifications, honors } from '@/app/content/site-data'

function Achievements() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  const bottomAnimation = (index: number) => ({
    initial: { y: '25%', opacity: 0 },
    animate: isInView ? { y: 0, opacity: 1 } : { y: '25%', opacity: 0 },
    transition: { duration: 0.3, delay: 0.3 + index * 0.2 },
  })

  return (
    <section id='certifications'>
      <div ref={ref} className='2xl:py-20 py-11'>
        <div className='container'>
          <div className='flex flex-col justify-center items-center gap-10 md:gap-16 mb-12'>
            <h2>
              Certifications{' '}
              <span className='instrument-font italic font-normal dark:text-white/70'>
                & Honors
              </span>
            </h2>
          </div>
          <div className='grid auto-rows-max grid-cols-1 md:grid-cols-2 gap-6 w-full'>
            {certifications.map((item, index) => (
              <motion.div
                key={index}
                {...bottomAnimation(index)}
                className='bg-purple/20 flex flex-col p-6 rounded-2xl gap-2'>
                <h5 className='text-purple'>{item.title}</h5>
                <p className='text-sm text-dark_black/70 dark:text-white/70'>{item.subtitle}</p>
              </motion.div>
            ))}
            {honors.map((item, index) => (
              <motion.div
                key={index}
                {...bottomAnimation(certifications.length + index)}
                className='bg-blue/20 flex flex-col p-6 rounded-2xl gap-2'>
                <h5 className='text-blue'>{item.title}</h5>
                <p className='text-sm text-dark_black/70 dark:text-white/70'>{item.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements
