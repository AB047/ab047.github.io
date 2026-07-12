import Image from 'next/image'
import Link from 'next/link'
import Logo from '../header/Logo'
import { footerData } from '@/app/content/site-data'

const Footer = () => {
  return (
    <footer className='xl:pt-20 pb-6'>
      <div className='container'>
        <div className='flex flex-col xl:flex-row py-16 gap-10 justify-between border-b border-dark_black/10 dark:border-white/10'>
          <div className='flex flex-col gap-6 max-w-md'>
            <Logo />
            <p className='opacity-60'>{footerData.brand.tagline}</p>
           <div className='flex gap-4'>
  {footerData.brand.socialLinks.map((item, index) => (
    <Link
      key={index}
      href={item.link}
      target='_blank'
      className='hover:opacity-60'
    >
      <Image
        src={item.icon}
        className='dark:hidden'
        alt='social-icon'
        height={20}
        width={20}
      />
      <Image
        src={item.dark_icon}
        className='dark:block hidden'
        alt='social-icon'
        height={20}
        width={20}
      />
    </Link>
  ))}
</div>
          </div>
            <div className='flex flex-col gap-4'>
              <p className='font-medium'>{footerData.contactDetails.name}</p>
              <p className='text-dark_black/60 dark:text-white/60'>
                {footerData.contactDetails.address}
              </p>
              <p className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>
                <Link href={`mailto:${footerData.contactDetails.email}`}>
                  {footerData.contactDetails.email}
                </Link>
              </p>
              {footerData.contactDetails.phone && (
                <p className='text-dark_black/60 hover:text-black dark:text-white/60 dark:hover:text-white'>
                  <Link href={`tel:${footerData.contactDetails.phone}`}>
                    {footerData.contactDetails.phone}
                  </Link>
                </p>
              )}
            </div>
        </div>
        <div className='flex justify-center mt-8'>
          <p className='text-dark_black/60 dark:text-white/60'>
            {footerData.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
