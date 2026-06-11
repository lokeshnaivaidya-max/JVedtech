import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

// Hook for parallax scrolling effect
export const useParallax = (offset = 50) => {
  const ref = useRef(null)
  const [y, setY] = motion.useMotionValue(0)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const scrollY = window.scrollY
        const elementY = rect.top + scrollY
        setY((scrollY - elementY) * 0.5)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [setY])

  return { ref, y }
}

// Hook for mouse-following 3D effects
export const useMouse3D = () => {
  const ref = useRef(null)
  const [mouseX, setMouseX] = motion.useMotionValue(0)
  const [mouseY, setMouseY] = motion.useMotionValue(0)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      setMouseX(x * 0.1)
      setMouseY(y * 0.1)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [setMouseX, setMouseY])

  return { ref, mouseX, mouseY }
}

// Tilt effect configuration
export const tiltConfig = {
  scale: 1.05,
  max: 15,
  speed: 400,
}
