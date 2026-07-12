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
  const particleColor = isDark ? '#ffffff' : '#1b1d1e'
  const lineColor = isDark ? '#ffffff' : '#1b1d1e'

  return {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: particleColor },
      shape: {
        type: 'circle',
        stroke: { width: 0, color: '#000000' },
        polygon: { nb_sides: 5 },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: lineColor,
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
      },
    },
    interactivity: {
      detect_on: 'window',
      events: {
        onhover: { enable: true, mode: 'repulse' },
        onclick: { enable: false, mode: 'push' },
        resize: true,
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
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
        className='fixed inset-0 -z-10'
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
