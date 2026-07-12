'use client'
import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'
import { useState } from 'react'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    purpose: '',
    message: '',
    honeypot: '', 
  })
  const [submitted, setSubmitted] = useState(false)
  const [loader, setLoader] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const validate = () => {
    const newErrors: { [key: string]: string } = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) newErrors.email = 'Invalid email'
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
    else if (!/^\d{10,15}$/.test(formData.phone.replace(/\D/g, ''))) newErrors.phone = 'Invalid phone number'
    if (!formData.purpose) newErrors.purpose = 'Purpose is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    if (formData.honeypot) newErrors.honeypot = 'Bot detected'
    return newErrors
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const reset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      purpose: '',
      message: '',
      honeypot: '',
    })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setErrors({})
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setLoader(true)

    fetch('https://formsubmit.co/ajax/5bb07cd95ae94caca3e577757ceb8f75', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        purpose: formData.purpose,
        message: formData.message,
        _honey: formData.honeypot, // honeypot field for bots
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setSubmitted(data.success)
        reset()
      })
      .catch((error) => {
        setErrors({ submit: 'Something went wrong. Please try again.' })
      })
      .finally(() => setLoader(false))
  }

  return (
    <section>
      <div className='relative w-full pt-44 2xl:pb-20 pb-10'>
        <div className='container relative z-10'>
          <div className='flex flex-col gap-10 md:gap-20'>
            <div className='relative flex flex-col text-center items-center'>
              <h2 className='font-medium w-full max-w-32'>
                Love to hear from you, Get in
                <span className='instrument-font italic font-normal dark:text-white/70'>
                  {' '}
                  touch
                </span>
              </h2>
            </div>
            {submitted ? (
              // ...success message (unchanged)
              <div className='flex flex-col items-center gap-5 text-center max-w-xl mx-auto p-6 rounded-lg bg-green/20 dark:bg-white/5'>
                {/* ... */}
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className='flex flex-col bg-white dark:bg-dark_black rounded-2xl p-8 gap-8'
                autoComplete="off"
              >
                {/* Honeypot field (hidden from users) */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />
                <div className='flex flex-col md:flex md:flex-row gap-6'>
                  <div className='w-full'>
                    <label htmlFor='name'>Your Name</label>
                    <input
                      className='w-full mt-2 rounded-full border px-5 py-3'
                      id='name'
                      type='text'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      placeholder='Enter your name'
                      required autoComplete='name' aria-live="polite"
                    />
                    {errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
                  </div>
                  <div className='w-full'>
                    <label htmlFor='email'>Your Email</label>
                    <input
                      className='w-full mt-2 rounded-full border px-5 py-3'
                      id='email'
                      type='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      placeholder='Enter your email'
                      required autoComplete='email' aria-live="polite"
                    /> 
                    {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
                  </div>
                </div>
                <div className='flex flex-col md:flex md:flex-row gap-6'>
                  <div className='w-full'>
                    <label htmlFor='phone'>Your Phone</label>
                    <input
                      className='w-full mt-2 rounded-full border px-5 py-3'
                      id='phone'
                      type='tel'
                      name='phone'
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder='Enter your contact number'
                      required autoComplete='tel' aria-live="polite"
                    />
                    {errors.phone && <span className="text-red-500 text-xs">{errors.phone}</span>}
                  </div>
                  <div className='w-full'>
                    <label htmlFor='purpose'>Purpose?</label>
                    <select
                        className='w-full mt-2 text-base px-4 rounded-full py-2.5 border bg-white dark:bg-black text-dark_black dark:text-white'
                        name='purpose'
                        id='purpose'
                        value={formData.purpose}
                        onChange={handleChange}
                          required aria-live="polite"
                      >
                        <option value='' disabled hidden>Select your purpose</option>
                        <option value='Hire'>Hire for fulltime/contact</option>
                        <option value='Collaborate'>Collaborate on a project</option>
                      </select>
                    {errors.purpose && <span className="text-red-500 text-xs">{errors.purpose}</span>}
                  </div>
                </div>
                <div className='w-full'>
                  <label htmlFor='message'>Message</label>
                  <textarea
                    className='w-full mt-2 rounded-3xl border px-5 py-3 ...'
                    name='message'
                    id='message'
                    value={formData.message}
                    onChange={handleChange}
                    placeholder='Share more details about it..'
                    rows={4}
                    autoComplete='message'
                    aria-live="polite"
                  />
                  {errors.message && <span className="text-red-500 text-xs">{errors.message}</span>}
                </div>
                {errors.submit && <span className="text-red-500 text-xs">{errors.submit}</span>}
                <div>
                  {!loader ? (
                     <button
                      type='submit'
                      className='group w-fit text-white dark:text-dark_black font-medium bg-dark_black dark:bg-white rounded-full flex items-center gap-4 py-2 pl-5 pr-2 transition-all duration-200 ease-in-out  hover:bg-transparent border hover:text-dark_black border-dark_black cursor-pointer'>
                      <span className='transform transition-transform duration-200 ease-in-out group-hover:translate-x-10'>
                        Submit
                      </span>
                      <svg
                        width='32'
                        height='32'
                        viewBox='0 0 32 32'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='transform transition-transform duration-200 ease-in-out group-hover:-translate-x-36 group-hover:rotate-45'>
                        <rect
                          width='32'
                          height='32'
                          rx='16'
                          fill='white'
                          className='fill-white dark:fill-black transition-colors duration-200 ease-in-out group-hover:fill-black '
                        />
                        <path
                          d='M11.832 11.3334H20.1654M20.1654 11.3334V19.6668M20.1654 11.3334L11.832 19.6668'
                          stroke='#1B1D1E'
                          strokeWidth='1.42857'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          className='stroke-dark_black dark:stroke-white transition-colors duration-200 ease-in-out group-hover:stroke-white'
                        />
                      </svg>
                    </button>
                  ) : (
                    <button className='bg-grey item-center flex gap-2 py-3 px-7 rounded-sm'>
                      <div
                        className='animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500'
                        role='status'
                        aria-label='loading'>
                        <span className='sr-only'>Loading...</span>
                      </div>{' '}
                      Submitting
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm