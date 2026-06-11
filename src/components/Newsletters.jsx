import { useState } from 'react'
import { motion } from 'framer-motion'
import Card3D from './ui/Card3D'

// Sample newsletter data
const NEWSLETTER_DATA = [
  {
    id: 1,
    month: 'December 2024',
    title: 'Q4 EdTech Trends Report',
    description: 'Year-end insights on the evolution of education technology.',
    subscribers: '12.5K',
    icon: '📊',
  },
  {
    id: 2,
    month: 'November 2024',
    title: 'AI in Healthcare Special',
    description: 'Exploring the intersection of AI and medical innovation.',
    subscribers: '11.2K',
    icon: '🤖',
  },
  {
    id: 3,
    month: 'October 2024',
    title: 'Digital Transformation Deep Dive',
    description: 'How organizations are digitally transforming their operations.',
    subscribers: '10.8K',
    icon: '🔄',
  },
  {
    id: 4,
    month: 'September 2024',
    title: 'Future of Learning',
    description: 'Innovative approaches to education in the modern era.',
    subscribers: '9.5K',
    icon: '🎯',
  },
  {
    id: 5,
    month: 'August 2024',
    title: 'Tech Innovation Summit',
    description: 'Highlights from industry leaders and innovators.',
    subscribers: '9.1K',
    icon: '⚡',
  },
  {
    id: 6,
    month: 'July 2024',
    title: 'Healthcare Innovation',
    description: 'Latest breakthroughs in medical technology.',
    subscribers: '8.7K',
    icon: '💡',
  },
]

export default function Newsletters() {
  const [hoveredId, setHoveredId] = useState(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section
      id="newsletters"
      className="section-padding section-light relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-br from-green-300/20 to-brand-300/10 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-br from-brand-300/15 to-green-300/10 blur-3xl" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold leading-tight text-balance md:text-5xl">
            Newsletter <span className="text-gradient">Archive</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-foreground-muted">
            Stay updated with our monthly newsletters covering the latest in education, technology, and innovation.
          </p>
        </motion.div>

        {/* Newsletter grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {NEWSLETTER_DATA.map((newsletter) => (
            <motion.div
              key={newsletter.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredId(newsletter.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Card3D>
                <motion.div
                  className="relative h-full p-6 flex flex-col"
                  animate={{
                    y: hoveredId === newsletter.id ? -4 : 0,
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                >
                  {/* Icon */}
                  <motion.div
                    className="mb-4 text-5xl"
                    animate={{
                      scale: hoveredId === newsletter.id ? 1.1 : 1,
                      rotateZ: hoveredId === newsletter.id ? 8 : 0,
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  >
                    {newsletter.icon}
                  </motion.div>

                  {/* Date badge */}
                  <div className="mb-3 inline-flex w-fit rounded-full bg-green-100 px-3 py-1">
                    <span className="text-xs font-semibold text-green-700">
                      {newsletter.month}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="mb-2 text-xl font-bold text-foreground flex-1">
                    {newsletter.title}
                  </h3>

                  <p className="mb-4 text-sm text-foreground-muted flex-1">
                    {newsletter.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between border-t border-brand-100 pt-4">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-400" />
                      <span className="text-xs text-foreground-muted">
                        {newsletter.subscribers} subscribers
                      </span>
                    </div>
                    <motion.button
                      whileHover={{ x: 4, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-brand-500 transition hover:bg-brand-200"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </motion.button>
                  </div>
                </motion.div>
              </Card3D>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 rounded-2xl border border-brand-200/60 bg-gradient-to-r from-brand-50 to-green-50 p-8 text-center md:p-12"
        >
          <h3 className="mb-2 text-2xl font-bold text-foreground">
            Never miss an update
          </h3>
          <p className="mb-6 text-foreground-muted">
            Subscribe to receive our latest newsletters directly in your inbox.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-xl bg-gradient-to-r from-brand-300 to-green-300 px-8 py-3 font-semibold text-foreground shadow-lg shadow-brand-300/40 transition hover:shadow-lg hover:shadow-brand-400/50"
          >
            Subscribe Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
