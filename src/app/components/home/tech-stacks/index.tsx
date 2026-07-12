"use client";
import { Icon } from '@iconify/react'
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { techStackList } from '@/app/content/site-data'

function TechStack() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false }); // animate on enter/exit

  const languageIcons = techStackList.filter(item =>
    ['TypeScript', 'JavaScript', 'Go', 'Python', 'Java', 'React', 'Node.js', 'GraphQL'].includes(item.title)
  );
  const toolsIcons = techStackList.filter(item =>
    ['AWS', 'PostgreSQL', 'Redis', 'Kafka', 'Docker', 'Datadog'].includes(item.title)
  );

const iconVariants: Variants = {
  hidden: (custom: number) => ({ opacity: 0, y: 40, scale: 0.8 }),
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.1 + custom * 0.08,
      type: "spring"
    }
  }),
  exit: (custom: number) => ({ opacity: 0, y: -40, scale: 0.8, transition: { duration: 0.3 } })
};

  return (
    <section id="techStack">
      <div className="container 2xl:py-20 py-5">
        <div className='flex flex-col justify-center items-center gap-10 md:gap-20 py-15'>
          <h2>
            My
            <span className='instrument-font italic font-normal dark:text-white/70'>
              {' '}
              Skills
            </span>
          </h2>
        </div>
        <div ref={ref} className="grid md:grid-cols-2 gap-x-6 gap-y-8">
          <div className="bg-pale-yellow dark:bg-white/5 rounded-2xl p-8 min-h-[350px] flex flex-col items-center shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-dark_black dark:text-white">Languages & Frameworks</h3>
            <div className="grid grid-cols-3 gap-8 w-full justify-items-center">
              {languageIcons.map((item, idx) => (
                <motion.div
                  key={idx}
                  custom={idx}
                  variants={iconVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  exit="exit"
                  className="flex flex-col items-center gap-2"
                >
                  <Icon icon={item.icon} width={48} height={48} />
                  <span className="text-xs text-dark_black/70 dark:text-white/70">{item.title}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="bg-blue-100 dark:bg-white/5 rounded-2xl p-8 min-h-[350px] flex flex-col items-center shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-dark_black dark:text-white">Infrastructure & Observability</h3>
            <div className="grid grid-cols-3 gap-8 w-full justify-items-center">
              {toolsIcons.map((item, idx) => (
                <motion.div
                  key={idx}
                  custom={idx}
                  variants={iconVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  exit="exit"
                  className="flex flex-col items-center gap-2"
                >
                  <Icon icon={item.icon} width={48} height={48} />
                  <span className="text-xs text-dark_black/70 dark:text-white/70">{item.title}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack
