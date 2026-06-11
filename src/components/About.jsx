import { motion } from 'framer-motion'
import SectionHeader from './ui/SectionHeader'
import Reveal from './ui/Reveal'

const PILLARS = [
  {
    num: '01',
    title: 'Healthcare Excellence',
    description:
      'Delivering educational and care solutions that raise clinical standards and patient outcomes across the healthcare continuum.',
    icon: '🏥',
  },
  {
    num: '02',
    title: 'Digital Transformation',
    description:
      'Blending AI, digital strategy, and wellness services to make modern healthcare accessible, actionable, and meaningful.',
    icon: '🚀',
  },
  {
    num: '03',
    title: 'People First',
    description:
      'Every program is designed around patient comfort, clinician capability, and compassionate care delivery.',
    icon: '❤️',
  },
]

const TEAM_MEMBERS = [
  {
    name: 'Dr. Jyoti Rao',
    title: 'Co-Founder & CEO',
    href: 'https://www.linkedin.com/in/dr-jyoti-dongre-rao-11520726/',
  },
  {
    name: 'Ms. Marilyn Olivera',
    title: 'Director Clinical Education',
    href: 'https://www.linkedin.com/in/marilynolivera/',
  },
  {
    name: 'Mr. Dinesh Kamble',
    title: 'Board of Directors',
    href: 'https://www.linkedin.com/in/dinesh-k-a409a06b/',
  },
  {
    name: 'Ms. Vinita Deopurkar',
    title: 'Associate - Clinical Ed',
    href: 'https://www.linkedin.com/in/vinita-suresh-deopurkar-526a7424/',
  },
]

const HIGHLIGHTS = [
  { value: 'AI-First', label: 'Innovation' },
  { value: 'Mumbai', label: 'Headquarters' },
  { value: 'Global', label: 'Reach' },
]

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
    <section id="about" className="section-padding relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-blue-100/40 to-cyan-100/20 blur-3xl" />
        <div className="absolute top-1/2 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-cyan-100/30 to-green-100/20 blur-3xl" />
        <div className="absolute -bottom-40 right-1/3 h-96 w-96 rounded-full bg-gradient-to-br from-blue-50/30 to-cyan-50/20 blur-3xl" />
      </div>

      <div className="section-container relative">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start lg:gap-20">
          {/* Left Column - Company Info */}
          <Reveal>
            <div>
              <SectionHeader
                label="About Us"
                title="Empowering Healthcare Through Innovation"
                description="JVEDTECH Medovation is a Mumbai-based healthcare innovation firm dedicated to transforming healthcare education, wellness, and digital solutions."
              />

              <div className="mt-10 space-y-6 text-foreground-muted">
                <p className="text-base leading-relaxed">
                  At JVEDTECH, we advance healthcare standards through tailored educational services and cutting-edge solutions. Our commitment to learning drives our mission to adapt and excel in the dynamic healthcare landscape.
                </p>
                <p className="text-base leading-relaxed">
                  We bring high-quality medical services directly to individuals within the comfort of their homes, reflecting our core value of accessibility and patient-centric care delivery.
                </p>
                <p className="text-base leading-relaxed">
                  With deep expertise across healthcare institutions, professionals, and individuals, we've built lasting relationships through innovation and meaningful impact.
                </p>
              </div>

              {/* Vision, Mission, Values */}
              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {['Vision', 'Mission', 'Values'].map((label, i) => {
                  const texts = [
                    'Empowering healthcare professionals and students through technology and top-notch services.',
                    'Revolutionizing healthcare through AI-driven insights, telehealth, and real-time patient monitoring.',
                    'Quality, innovation, empathy, and collaboration in every solution we build.',
                  ]
                  return (
                    <motion.div
                      key={label}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.3 }}
                      className="group relative"
                    >
                      <div className="card-premium rounded-xl p-6">
                        <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                          Our {label}
                        </span>
                        <p className="mt-4 text-sm leading-relaxed text-foreground-muted">
                          {texts[i]}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-12 flex flex-wrap gap-12 border-t border-slate-200 pt-8"
              >
                {HIGHLIGHTS.map((item) => (
                  <div key={item.label}>
                    <p className="font-display text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                      {item.value}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-widest text-slate-500">
                      {item.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
          </Reveal>

          {/* Right Column - Pillars */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-4"
          >
            {PILLARS.map((pillar) => (
              <motion.div
                key={pillar.title}
                variants={itemVariants}
              >
                <Reveal>
                  <motion.div
                    whileHover={{ x: 6, y: -2 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="group relative"
                  >
                    <div className="card-premium rounded-xl p-8">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="inline-flex items-center gap-3 mb-3">
                            <span className="text-2xl">{pillar.icon}</span>
                            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                              {pillar.num}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-foreground">
                            {pillar.title}
                          </h3>
                          <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
                            {pillar.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Reveal>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-28"
        >
          <SectionHeader
            label="Meet Our Team"
            title="Healthcare Leaders Shaping Our Vision"
            description="A talented team with deep expertise in healthcare, education, digital innovation, and patient care."
            align="center"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
          >
            {TEAM_MEMBERS.map((member) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
              >
                <Reveal>
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="group"
                  >
                    <div className="card-premium rounded-xl p-7">
                      {/* Avatar */}
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-blue-400 to-cyan-400 font-bold text-white">
                        {member.name.split(' ').map((n) => n[0]).join('')}
                      </div>

                      {/* Name & Title */}
                      <h3 className="text-lg font-bold text-foreground">
                        {member.name}
                      </h3>
                      <p className="mt-2 text-sm text-foreground-muted">
                        {member.title}
                      </p>

                      {/* LinkedIn Link */}
                      <a
                        href={member.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-all duration-300 hover:text-cyan-600 group-hover:gap-3"
                      >
                        View Profile
                        <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </motion.div>
                </Reveal>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
