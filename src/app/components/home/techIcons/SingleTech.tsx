import { Icon } from '@iconify/react'
import Slider from 'react-infinite-logo-slider'
import type { TechIconItem } from '@/app/content/site-data'

const SingleTech = ({ techIcons }: { techIcons: TechIconItem }) => {
  const { icon, title } = techIcons

  return (
    <Slider.Slide>
      <div className='flex items-center gap-2'>
        <Icon icon={icon} width={40} height={40} />
        <span className='text-sm text-dark_black/70 dark:text-white/70'>{title}</span>
      </div>
    </Slider.Slide>
  )
}

export default SingleTech
