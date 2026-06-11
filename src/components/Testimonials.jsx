import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { TESTIMONIALS } from '../data/content'
import Card3D from './ui/Card3D'

function useInView(threshold = 0.2) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setInView(true)
    }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

function TestimonialCard({ testimonial, delay }) {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      className="group"
      style={{
        animation: inView ? `fadeUp 0.6s ease-out ${delay}s both` : 'none',
      }}
    >
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <Card3D>
        <motion.div
          className="glass rounded-xl p-8 h-full flex flex-col transition-all duration-300 group-hover:shadow-lg group-hover:shadow-brand-400/20"
          whileHover={{ y: -4 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        >
          {/* Quote Icon */}
          <motion.div
            className="text-4xl mb-4 opacity-60"
            animate={{ scale: inView ? 1 : 0.8 }}
            transition={{ delay: delay + 0.2 }}
          >
            ✦
          </motion.div>

          {/* Quote */}
          <p className="text-base text-foreground-muted leading-relaxed mb-8 flex-grow italic">
            "{testimonial.quote}"
          </p>

          {/* Divider */}
          <div className="border-t border-brand-600/10 my-6" />

          {/* Author Info */}
          <div>
            <p className="font-semibold text-brand-900 text-sm">
              {testimonial.name}
            </p>
            <p className="text-xs text-brand-500 font-medium uppercase tracking-widest mt-1">
              {testimonial.title}
            </p>
            <p className="text-xs text-foreground-muted mt-2">
              {testimonial.position}
            </p>
          </div>
        </motion.div>
      </Card3D>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="section-muted py-28 sm:py-32 border-t border-brand-600/10">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">

          <span className="text-xs font-semibold uppercase tracking-widest text-white/60 block mb-3">
            Services
          </span>

          <h2 className="text-4xl sm:text-5xl font-light font-display text-white mb-4 leading-tight">
            What We Offer
          </h2>

          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Innovative learning solutions designed to empower students and institutions.
          </p>
      </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              delay={index * 0.15}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 pt-16 border-t border-brand-600/10 text-center">
          <p className="text-foreground-muted mb-6 max-w-lg mx-auto">
            Ready to collaborate with us? Let's create impactful solutions for healthcare together.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 bg-gradient-to-r from-brand-300 to-green-300 text-foreground rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-brand-400/30"
          >
            Start Your Journey
          </motion.button>
        </div>
      </div>
    </section>
  )
}
