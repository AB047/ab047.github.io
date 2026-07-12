'use client'
import Image from 'next/image'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { insightTagList, insightCounters } from '@/app/content/site-data'

function Insight() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  return (
    <section id='insight'>
      <div className='2xl:py-20 py-11'>
        <div className='container'>
          <div className='flex flex-col  lg:gap-16 gap-5'>
            <div className='flex flex-col items-center justify-center text-center gap-3'>
              <h2 className='max-w-6xl'>
                For me, engineering is more than writing code, it&rsquo;s about building reliable, observable systems that hold up under real production load.
              </h2>
              <div>
                <h2>
                  {insightTagList.map((items, index) => (
                    <span
                      key={index}
                      className={`inline-flex m-2 py-1 px-5 gap-3 rounded-full ${items.bg_color} ${items.txt_color} items-center`}>
                      <Image
                        src={items.icon}
                        alt={items.name}
                        width={40}
                        height={40}
                        style={{ width: 'auto', height: 'auto' }}
                      />
                      <span className='instrument-font italic font-normal'>
                        {items.name}
                      </span>
                    </span>
                  ))}
                </h2>
              </div>
            </div>
            <div ref={ref} className='flex-col md:flex md:flex-row justify-center items-center text-center'>
              {insightCounters.map((stat, index) => (
                <div key={index} className='relative 2xl:px-24 px-16 md:py-8 py-4'>
                  <h2 className='2xl:text-9xl md:text-7xl text-5xl'>
                    {inView ? (
                      <CountUp
                        start={0}
                        end={stat.end}
                        decimals={stat.decimals ?? 0}
                        suffix={stat.suffix}
                        duration={3}
                      />
                    ) : (
                      '0'
                    )}
                  </h2>
                  <p className='mt-2 text-dark_black/60 dark:text-white/60'>{stat.label}</p>
                  {index < insightCounters.length - 1 && (
                    <div className='hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-28 w-px bg-dark_black/10 dark:bg-white/10' />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Insight
