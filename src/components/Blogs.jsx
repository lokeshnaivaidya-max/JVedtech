import { useState } from 'react'
import { motion } from 'framer-motion'
import Card3D from './ui/Card3D'

// Sample blog data - would be fetched from API
const BLOG_DATA = [
  {
    id: 1,
    title: 'The Future of AI in Healthcare',
    excerpt: 'Exploring how artificial intelligence is transforming patient care and medical diagnostics.',
    category: 'Healthcare',
    date: 'Dec 15, 2024',
    author: 'Dr. Sarah Johnson',
    icon: '🏥',
  },
  {
    id: 2,
    title: 'EdTech Innovations 2025',
    excerpt: 'Key trends and breakthroughs shaping the education technology landscape this year.',
    category: 'Education',
    date: 'Dec 10, 2024',
    author: 'Prof. Michael Chen',
    icon: '🎓',
  },
  {
    id: 3,
    title: 'Digital Transformation in Healthcare',
    excerpt: 'How digital tools are revolutionizing healthcare delivery and patient experience.',
    category: 'Healthcare',
    date: 'Dec 5, 2024',
    author: 'Jane Williams',
    icon: '💻',
  },
]

const CATEGORIES = ['All', 'Healthcare', 'Education', 'Technology']

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredBlogs =
    selectedCategory === 'All'
      ? BLOG_DATA
      : BLOG_DATA.filter((blog) => blog.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section
      id="blogs"
      className="section-padding section-light relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gradient-to-br from-brand-300/20 to-green-300/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gradient-to-br from-green-300/15 to-brand-300/10 blur-3xl" />

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
            Latest <span className="text-gradient">Blog Posts</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-foreground-muted">
            Insights, trends, and deep dives into education, technology, and innovation.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          {CATEGORIES.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-brand-300 to-green-300 text-foreground shadow-lg shadow-brand-300/40'
                  : 'border border-brand-200/60 bg-white/60 text-foreground-muted hover:border-brand-300 hover:bg-white'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Blog grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredBlogs.map((blog) => (
            <motion.div key={blog.id} variants={itemVariants}>
              <Card3D>
                <div className="p-6 h-full flex flex-col">
                  <div className="mb-4 flex items-start justify-between">
                    <span className="text-4xl">{blog.icon}</span>
                    <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">
                      {blog.category}
                    </span>
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-foreground line-clamp-2 flex-1">
                    {blog.title}
                  </h3>

                  <p className="mb-4 text-sm text-foreground-muted flex-1">
                    {blog.excerpt}
                  </p>

                  <div className="flex items-center justify-between border-t border-brand-100 pt-4">
                    <div className="text-xs text-foreground-muted">
                      <p className="font-semibold">{blog.author}</p>
                      <p>{blog.date}</p>
                    </div>
                    <motion.button
                      whileHover={{ x: 4 }}
                      className="text-brand-400 hover:text-brand-500 transition-colors"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </motion.div>

        {filteredBlogs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-16 text-center"
          >
            <p className="text-lg text-foreground-muted">
              No blogs found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
