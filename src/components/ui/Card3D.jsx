import React from 'react'
import { motion } from 'framer-motion'
import Tilt from 'react-tilt'

export default function Card3D({ 
  children, 
  className = '', 
  glowColor = 'brand',
  enableTilt = true,
  onHover = null,
}) {
  return (
    <Tilt
      options={{ 
        max: 15, 
        scale: 1.05, 
        speed: 400,
        transition: true,
      }}
      style={{ transformStyle: 'preserve-3d' }}
      className={`h-full ${enableTilt ? '' : 'pointer-events-none'}`}
    >
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={`card-premium group h-full ${className}`}
        onHoverStart={onHover?.start}
        onHoverEnd={onHover?.end}
      >
        {children}
      </motion.div>
    </Tilt>
  )
}
