'use client'
import { useRef } from 'react'

// Very slight 3D tilt toward the cursor on hover.
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const bounds = card.getBoundingClientRect()
    const center = {
      x: e.clientX - bounds.x - bounds.width / 2,
      y: e.clientY - bounds.y - bounds.height / 2,
    }

    card.style.transform = `rotate3d(${center.y / 500}, ${-center.x / 500}, 0, 1.5deg)`
  }

  const handleMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = ''
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-150 ease-out ${className ?? ''}`}>
      {children}
    </div>
  )
}

export default TiltCard
