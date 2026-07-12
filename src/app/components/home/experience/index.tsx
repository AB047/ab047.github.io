'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { workExperience, education } from '@/app/content/site-data'

function TimelineColumn({ heading, entries }: { heading: string; entries: typeof workExperience }) {
  return (
    <div className='flex flex-col gap-6 max-w-xl border border-dark_black/10 dark:border-white/10 p-6 2xl:p-10 rounded-2xl bg-pale-yellow dark:bg-white/5'>
      <h4 className='text-dark_black dark:text-white'>{heading}</h4>
      <div className='flex flex-col gap-8'>
        {entries.map((entry, index) => (
          <div key={index} className='flex flex-col gap-2 border-l-2 border-dark_black/20 dark:border-white/20 pl-4'>
            <p className='text-sm text-dark_black/60 dark:text-white/60'>{entry.timeframe}</p>
            <h5 className='text-dark_black dark:text-white'>{entry.title}</h5>
            <p className='text-sm font-medium text-dark_black/80 dark:text-white/80'>{entry.subtitle}</p>
            <ul className='list-disc pl-5 flex flex-col gap-1'>
              {entry.bullets.map((bullet, i) => (
                <li key={i} className='text-sm text-dark_black/70 dark:text-white/70'>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  const bottomAnimation = (index: number) => ({
    initial: { y: '20%', opacity: 0 },
    animate: isInView ? { y: 0, opacity: 1 } : { y: '10%', opacity: 0 },
    transition: { duration: 1, delay: 0.5 + index * 0.3 },
  })

  return (
    <section id='experience'>
      <div ref={ref} className='2xl:py-20 py-11'>
        <div className='container'>
          <div className='flex flex-col justify-center items-center gap-10 md:gap-16 mb-12'>
            <h2>
              Experience{' '}
              <span className='instrument-font italic font-normal dark:text-white/70'>
                & Education
              </span>
            </h2>
          </div>
          <div className='grid md:grid-cols-2 gap-x-6 gap-y-8 justify-center'>
            <motion.div {...bottomAnimation(0)}>
              <TimelineColumn heading='Work' entries={workExperience} />
            </motion.div>
            <motion.div {...bottomAnimation(1)}>
              <TimelineColumn heading='Education' entries={education} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
