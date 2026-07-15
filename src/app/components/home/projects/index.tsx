'use client'
import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
import Link from 'next/link'
import { projectsList } from '@/app/content/site-data'
import TiltCard from './TiltCard'

function Projects() {
  return (
    <section id='projects'>
      <div className='2xl:py-20 py-11'>
        <div className='container'>
          <div className='flex flex-col justify-center items-center gap-10 md:gap-20'>
            <div className='max-w-xl text-center'>
              <h2>
                My
                <span className='instrument-font italic font-normal dark:text-white/70'>
                  {' '}
                  Projects
                </span>
              </h2>
            </div>
            <div className='grid md:grid-cols-2 gap-x-6 gap-y-8' style={{ perspective: '1200px' }}>
              {projectsList.map((items, index) => {
                return (
                  <TiltCard key={index} className='project-card group cursor-pointer'>
                    <div className='glass-card flex flex-col gap-6 p-4 rounded-[1.1rem] h-full'>
                      <div className='relative w-full aspect-[625/410] rounded-xl overflow-hidden'>
                        {items.image ? (
                          <Image
                            src={items.image}
                            alt={items.title}
                            fill
                            className='object-cover'
                            unoptimized={true}
                          />
                        ) : (
                          <div className='absolute inset-0 flex items-center justify-center bg-dark_black/5 dark:bg-white/5'>
                            <Icon icon='mdi:github' width='64' height='64' className='text-dark_black/40 dark:text-white/40' />
                          </div>
                        )}

                        {/* Link icon, shown on hover without darkening the image */}
                        <Link
                          href={items.link}
                          target='blank'
                          className='absolute top-0 left-0 w-full h-full rounded-xl hidden group-hover:flex'>
                          <span className='flex justify-end p-5 w-full'>
                            <Icon
                              icon='icon-park-solid:circle-right-up'
                              width='50'
                              height='50'
                              style={{ color: '#fbfbfb' }}
                            />
                          </span>
                        </Link>
                      </div>

                      <div className='flex flex-col items-start gap-4'>
                        <h5 className='group-hover:text-purple_blue'>
                          {items.title}
                        </h5>
                        {items.description && (
                          <p className='text-sm text-dark_black/70 dark:text-white/70'>
                            {items.description}
                          </p>
                        )}
                        <div className='flex gap-3 flex-wrap'>
                          {items.tag.map((tag, index) => (
                            <p
                              key={index}
                              className='text-sm border border-dark_black/10 dark:border-white/50 w-fit py-1.5 px-4 rounded-full hover:bg-dark_black hover:text-white'>
                              {tag}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
