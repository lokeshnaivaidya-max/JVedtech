import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { TESTIMONIALS } from '../data/content'
import SectionHeader from './ui/SectionHeader'

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
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className="group"
    >
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-full"
      >
        {/* Card Background */}
        <div className="card-premium rounded-2xl p-8 h-full flex flex-col">
          {/* Shine Effect */}
          <div className="card-shine pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl" />

          <div className="relative z-10 flex flex-1 flex-col">
            {/* Quote Icon */}
            <motion.div
              className="text-4xl mb-4 text-blue-400/60"
              animate={{ scale: inView ? 1 : 0.8 }}
              transition={{ delay: delay + 0.1 }}
            >
              ✦
            </motion.div>

            {/* Quote */}
            <p className="text-base leading-relaxed text-foreground-muted flex-grow italic font-light">
              "{testimonial.quote}"
            </p>

            {/* Divider */}
            <div className="border-t border-blue-200/40 my-6" />

            {/* Author Info */}
            <div>
              <p className="font-semibold text-foreground text-sm">
                {testimonial.name}
              </p>
              <p className="text-xs text-blue-600 font-medium uppercase tracking-wider mt-1">
                {testimonial.title}
              </p>
              <p className="text-xs text-foreground-muted mt-2">
                {testimonial.position}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function Testimonials() {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-b from-white to-slate-50">
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-1/3 h-96 w-96 rounded-full bg-gradient-to-br from-blue-100/40 to-cyan-100/20 blur-3xl" />
        <div className="absolute top-1/2 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-cyan-100/30 to-green-100/20 blur-3xl" />
      </div>

      <div className="section-container relative">
        {/* Section Header */}
        <div className="mb-16">
          <SectionHeader
            label="Success Stories"
            title="What Our Clients & Partners Say"
            description="Real feedback from healthcare professionals, institutions, and individuals we've worked with."
            align="center"
          />
        </div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Background Card */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 via-cyan-50 to-green-50 p-12 sm:p-16 border border-blue-200/40">
            {/* Decorative Elements */}
            <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-blue-200/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-cyan-200/20 blur-3xl" />

            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Ready to Transform Your Healthcare Organization?
              </h3>
              <p className="text-base text-foreground-muted mb-8">
                Join hundreds of healthcare professionals and institutions already benefiting from our innovative solutions.
              </p>
              <motion.a
                href="#community"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/40"
              >
                Start Your Journey Today
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
