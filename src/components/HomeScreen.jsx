import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import Button from './ui/Button'

const USE_VIDEO_BACKGROUND = true
const HERO_VIDEO_SRC = '/bg-video.mp4'

const headingWords = [
  { text: 'Redefining Global', className: 'text-white' },
  {
    text: 'Healthcare Learning.',
    className: 'text-gradient',
  },
]

export default function HomeScreen() {
  const sectionRef = useRef(null)
  const videoRef = useRef(null)
  const floatingShapesRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video || !USE_VIDEO_BACKGROUND) return

    video.muted = true
    const playVideo = () => {
      video.play().catch(() => {})
    }

    playVideo()
    video.addEventListener('loadeddata', playVideo)

    return () => video.removeEventListener('loadeddata', playVideo)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: [0.22, 1, 0.36, 1] } })

      // Hero content animations
      tl.from('.hero-content', { opacity: 0, duration: 1 })
        .from('.hero-badge', { opacity: 0, y: 20, duration: 0.7 }, 0.2)
        .from('.hero-word', {
          opacity: 0,
          y: 40,
          duration: 1.2,
          stagger: 0.15,
          ease: 'expo.out'
        }, 0.6)
        .from('.hero-subtitle', {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: 'expo.out'
        }, 1.2)
        .from('.hero-cta > *', {
          opacity: 0,
          y: 20,
          duration: 0.8,
          stagger: 0.15,
          ease: 'back.out(1.3)'
        }, 1.8)

      // Floating shapes
      gsap.to('.floating-orb-1', {
        y: -30,
        x: 20,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })
      gsap.to('.floating-orb-2', {
        y: 40,
        x: -30,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })
      gsap.to('.floating-orb-3', {
        y: -20,
        x: 15,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-24"
    >
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        {/* Video Background */}
        {USE_VIDEO_BACKGROUND && (
          <div className="absolute inset-0">
            <video
              ref={videoRef}
              className="h-full w-full object-cover opacity-30"
              src={HERO_VIDEO_SRC}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              aria-hidden="true"
            />
          </div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-900/40 to-slate-950/70" />

        {/* Floating Orbs */}
        <div ref={floatingShapesRef} className="absolute inset-0 overflow-hidden">
          <div className="floating-orb-1 absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-400/30 to-cyan-400/20 blur-3xl" />
          <div className="floating-orb-2 absolute top-1/3 -left-40 h-96 w-96 rounded-full bg-gradient-to-br from-green-400/20 to-emerald-400/10 blur-3xl" />
          <div className="floating-orb-3 absolute -bottom-40 right-1/4 h-72 w-72 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-400/15 blur-3xl" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(0deg,transparent_24%,rgba(125,211,252,.05)_25%,rgba(125,211,252,.05)_26%,transparent_27%,transparent_74%,rgba(125,211,252,.05)_75%,rgba(125,211,252,.05)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(125,211,252,.05)_25%,rgba(125,211,252,.05)_26%,transparent_27%,transparent_74%,rgba(125,211,252,.05)_75%,rgba(125,211,252,.05)_76%,transparent_77%,transparent)] bg-[length:50px_50px]" />
      </div>

      {/* Content */}
      <div className="hero-content relative z-20 flex min-h-[calc(100vh-6rem)] items-center justify-center">
        <div className="section-container w-full">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="hero-badge inline-flex items-center gap-2.5 rounded-full border border-blue-400/30 bg-gradient-to-r from-blue-500/10 via-cyan-500/5 to-green-500/10 px-5 py-3 backdrop-blur-sm">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-pulse rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-green-400" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-200">
                  Healthcare Innovation Platform
                </span>
              </div>
            </motion.div>

            {/* Heading */}
            <h1 className="font-display mb-6 text-balance text-5xl font-extrabold leading-tight text-white sm:text-6xl lg:text-7xl">
              <span className="hero-word inline-block text-white">Redefining Global</span>
              <br />
              <span className="hero-word inline-block bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
                Healthcare Learning.
              </span>
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hero-subtitle mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-300"
            >
              JV EdTech Medovation bridges compassion and technology — empowering healthcare professionals through AI-driven education, clinical informatics, and digital health innovation.
            </motion.p>

            {/* CTAs */}
            <div className="hero-cta flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Button href="#services" variant="primary" className="px-8 py-4 text-base">
                  Explore Solutions
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Button href="#about" variant="outline" className="px-8 py-4 text-base">
                  Learn More
                </Button>
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-16 grid grid-cols-3 gap-4 sm:gap-8"
            >
              {[
                { value: '50K+', label: 'Healthcare Professionals' },
                { value: '100+', label: 'Institutions' },
                { value: '24/7', label: 'AI Support' }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 mt-2 sm:text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 sm:block"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] font-medium uppercase tracking-widest text-slate-500">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg className="h-5 w-3 stroke-blue-400" fill="none" viewBox="0 0 12 20">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 2v12m0 0L1 9m5 5l5-5" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
