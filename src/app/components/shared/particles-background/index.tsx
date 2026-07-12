'use client'
import Script from 'next/script'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

declare global {
  interface Window {
    particlesJS?: (tagId: string, params: Record<string, unknown>) => void
    pJSDom?: unknown[]
  }
}

function buildConfig(isDark: boolean) {
  const dotColor = isDark ? '#ffffff' : '#1b1d1e'
  const lineColor = isDark ? '#70b5ff' : '#4928fd'

  return {
    particles: {
      number: { value: 70, density: { enable: true, value_area: 900 } },
      color: { value: dotColor },
      shape: { type: 'circle' },
      opacity: {
        value: 0.4,
        random: true,
        anim: { enable: true, speed: 0.6, opacity_min: 0.1, sync: false },
      },
      size: { value: 2.5, random: true },
      line_linked: {
        enable: true,
        distance: 140,
        color: lineColor,
        opacity: 0.25,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1.2,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
      },
    },
    interactivity: {
      detect_on: 'window',
      events: {
        onhover: { enable: true, mode: 'grab' },
        onclick: { enable: true, mode: 'push' },
        resize: true,
      },
      modes: {
        grab: { distance: 160, line_linked: { opacity: 0.5 } },
        push: { particles_nb: 3 },
      },
    },
    retina_detect: true,
  }
}

function ParticlesBackground() {
  const { resolvedTheme } = useTheme()
  const [scriptLoaded, setScriptLoaded] = useState(false)

  useEffect(() => {
    if (!scriptLoaded || !window.particlesJS) return
    window.particlesJS('particles-js', buildConfig(resolvedTheme === 'dark'))
  }, [scriptLoaded, resolvedTheme])

  return (
    <>
      <div
        id='particles-js'
        className='fixed inset-0 -z-10 pointer-events-none'
        aria-hidden='true'
      />
      <Script
        src='/particles.js'
        strategy='afterInteractive'
        onReady={() => setScriptLoaded(true)}
      />
    </>
  )
}

export default ParticlesBackground
