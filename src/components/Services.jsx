import { motion } from 'framer-motion'
import SectionHeader from './ui/SectionHeader'
import AnimatedIconBox from './ui/AnimatedIconBox'
import Reveal from './ui/Reveal'
import {
  IconEducation,
  IconAI,
  IconChart,
  IconMegaphone,
  IconGlobe,
  IconBulb,
} from './icons/ServiceIcons'

const SERVICES = [
  {
    icon: IconEducation,
    animation: 'education',
    title: 'EduGlobe',
    description:
      'Customized educational programs designed to empower healthcare professionals with cutting-edge knowledge and essential skills for excellence in an evolving industry.',
    highlights: [
      'Customized Training Programs',
      'Interactive Online Learning',
      'Expert-Led Workshops',
      'Professional Certification',
    ],
  },
  {
    icon: IconMegaphone,
    animation: 'megaphone',
    title: 'Digital Expertise',
    description:
      'Revolutionary healthcare marketing through innovative digital strategies that reach the right audience with personalized, impactful messaging.',
    highlights: [
      'Targeted Ad Campaigns',
      'Social Media Management',
      'Content Strategy',
      'Analytics & Insights',
    ],
  },
  {
    icon: IconAI,
    animation: 'ai',
    title: 'Medi AI Informatics',
    description:
      'Artificial intelligence solutions that transform healthcare workflows, enabling faster diagnostics and data-driven clinical decision-making.',
    highlights: [
      'AI-Powered Diagnostics',
      'Natural Language Processing',
      'Patient Monitoring Systems',
      'Decision Support Tools',
    ],
  },
  {
    icon: IconGlobe,
    animation: 'globe',
    title: 'In-Home Wellness',
    description:
      'Bringing top-notch medical services into homes through comprehensive health monitoring and skilled professional support for patient comfort.',
    highlights: [
      'Home Health Monitoring',
      'Professional Caregivers',
      'Therapy Services',
      'Medication Management',
    ],
  },
  {
    icon: IconBulb,
    animation: 'bulb',
    title: 'Holistic Wellbeing',
    description:
      'Comprehensive wellness programs enhancing mental, physical, and emotional health through integrated approaches for optimal life quality.',
    highlights: [
      'Mental Health Support',
      'Fitness Programs',
      'Wellness Coaching',
      'Mindfulness Training',
    ],
  },
  {
    icon: IconChart,
    animation: 'chart',
    title: 'Leadership Programs',
    description:
      'Cultivating healthcare innovators and visionary leaders through strategic training in entrepreneurship, innovation, and organizational transformation.',
    highlights: [
      'Strategic Leadership',
      'Innovation Management',
      'Business Development',
      'Change Management',
    ],
  },
]

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
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-br from-blue-100/40 to-cyan-100/20 blur-3xl" />
        <div className="absolute top-1/3 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-green-100/30 to-emerald-100/20 blur-3xl" />
        <div className="absolute -bottom-40 right-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-blue-50/30 to-cyan-50/20 blur-3xl" />
      </div>

      <div className="section-container relative">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <SectionHeader
            label="Our Services"
            title="Transforming Healthcare Through Innovation"
            description="We deliver exceptional services in education, patient care, digital innovation, and medical excellence to empower growth and transformation."
          />
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
              >
                <Reveal delay={(i % 3) * 0.05}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="group relative h-full"
                  >
                    {/* Card Background */}
                    <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-100/20 via-cyan-100/10 to-green-100/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Card Content */}
                    <div className="card-premium relative flex flex-col overflow-hidden rounded-2xl p-8 h-full">
                      {/* Shine Effect */}
                      <div className="card-shine pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      <div className="relative z-10 flex flex-1 flex-col">
                        {/* Icon */}
                        <motion.div
                          whileHover={{ scale: 1.15, rotate: 5 }}
                          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                          className="inline-flex w-fit"
                        >
                          <AnimatedIconBox animation={service.animation}>
                            <Icon />
                          </AnimatedIconBox>
                        </motion.div>

                        {/* Title */}
                        <h3 className="mt-6 text-2xl font-bold text-foreground">
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                          {service.description}
                        </p>

                        {/* Highlights */}
                        <ul className="mt-6 flex-1 space-y-3">
                          {service.highlights.map((item) => (
                            <li key={item} className="flex items-center gap-3 text-sm text-foreground-muted">
                              <span className="inline-flex h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Arrow */}
                      <motion.div
                        initial={{ x: 0, opacity: 0 }}
                        whileHover={{ x: 4, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="mt-8 pt-6 border-t border-blue-200/40 flex items-center gap-2 text-sm font-semibold text-blue-600 group-hover:text-blue-700"
                      >
                        Learn More
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.div>
                    </div>
                  </motion.div>
                </Reveal>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
