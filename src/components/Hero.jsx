import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useWhopStats } from '../hooks/useWhopStats'
import AnimatedNumber from './AnimatedNumber'

const VIDEOS = [
  { src: '/video-discord.mp4',  label: 'Membres actifs',         tag: 'Communauté' },
  { src: '/video-fonda.mp4',    label: 'Analyse fondamentale',   tag: 'Fondamentaux' },
  { src: '/video-jot.mp4',      label: 'Mes analyses en direct',  tag: 'Analyses' },
]

const INTERVAL = 6000

export default function Hero() {
  const { memberCount } = useWhopStats()
  const [current, setCurrent] = useState(0)
  const [progress, setProgress] = useState(0)
  const progressRef = useRef(null)
  const startRef = useRef(Date.now())

  useEffect(() => {
    startRef.current = Date.now()
    setProgress(0)

    const tick = () => {
      const elapsed = Date.now() - startRef.current
      const pct = Math.min((elapsed / INTERVAL) * 100, 100)
      setProgress(pct)
      if (elapsed < INTERVAL) {
        progressRef.current = requestAnimationFrame(tick)
      } else {
        setCurrent(c => (c + 1) % VIDEOS.length)
      }
    }

    progressRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(progressRef.current)
  }, [current])

  return (
    <section id="accueil" className="relative min-h-[92vh] flex items-center pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-10 items-center">

          {/* ── Text side ── */}
          <div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black leading-[1.04] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Tu trades seul.
              <br />Tu n'avances plus.
              <br />
              <span style={{ background: 'linear-gradient(90deg, #d4af37, #fef08a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Rejoins la communauté.
              </span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg leading-relaxed mb-10 max-w-lg"
              style={{ color: 'rgba(255,255,255,0.62)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Résultats réels, transparence totale et une communauté qui trade vraiment.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-start gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <motion.a
                href="https://whop.com/justonetrader"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 font-bold rounded-xl px-8 py-4 text-sm transition-all"
                style={{ background: 'linear-gradient(135deg, #d4af37, #e8c94a)', color: '#0a0a0f', boxShadow: '0 0 40px rgba(212,175,55,0.22)' }}
                whileHover={{ scale: 1.04, boxShadow: '0 0 60px rgba(212,175,55,0.4)' }}
                whileTap={{ scale: 0.97 }}
              >
                Commencer gratuitement
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <a href="#communaute"
                className="inline-flex items-center gap-1 text-sm font-medium transition-colors pt-3"
                style={{ color: 'rgba(255,255,255,0.55)' }}
                onMouseEnter={e => e.currentTarget.style.color = '#d4af37'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
              >
                Voir la communauté ↓
              </a>
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center gap-4 text-xs"
              style={{ color: 'rgba(255,255,255,0.5)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <span className="flex items-center gap-1.5">
                <span className="pulse-dot w-1.5 h-1.5 rounded-full" style={{ background: '#10b981', boxShadow: '0 0 6px #10b981' }} />
                <AnimatedNumber value={memberCount} prefix="+" className="font-semibold text-white" duration={2000} /> membres actifs
              </span>
              <span style={{ color: 'rgba(255,255,255,0.15)' }}>|</span>
              <span>Noté <span className="font-semibold text-white">5.0</span><span style={{ color: '#d4af37' }}>★</span> sur Whop</span>
              <span style={{ color: 'rgba(255,255,255,0.15)' }}>|</span>
              <span>Sans engagement</span>
            </motion.div>
          </div>

          {/* ── Video carousel ── */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            {/* Multi-layer glow */}
            <div className="absolute -inset-8 rounded-3xl blur-3xl pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 60% 50%, rgba(212,175,55,0.14) 0%, transparent 65%)' }} />
            <div className="absolute -inset-4 rounded-3xl blur-xl pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(212,175,55,0.07) 0%, transparent 70%)' }} />

            {/* Outer ring décoratif */}
            <div className="absolute -inset-px rounded-2xl pointer-events-none"
              style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.3) 0%, transparent 50%, rgba(212,175,55,0.1) 100%)', zIndex: 1 }} />

            {/* Card */}
            <div className="relative rounded-2xl overflow-hidden"
              style={{
                border: '1px solid rgba(212,175,55,0.25)',
                boxShadow: '0 0 0 1px rgba(255,255,255,0.03), 0 40px 80px rgba(0,0,0,0.7), 0 0 60px rgba(212,175,55,0.06)',
              }}>

              {/* Top bar */}
              <div className="flex items-center justify-between gap-2 px-4 py-3"
                style={{ background: '#141414', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full" style={{ background: '#ef4444' }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: '#f59e0b' }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: '#22c55e' }} />
                </div>
                <div className="flex-1 mx-4 rounded-md px-3 py-1 text-[11px] text-center truncate"
                  style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.3)' }}>
                  discord.com — JustOneTrader
                </div>
                {/* Compteur vidéo */}
                <span className="text-[11px] font-bold tabular-nums shrink-0" style={{ color: 'rgba(212,175,55,0.7)' }}>
                  {current + 1}/{VIDEOS.length}
                </span>
              </div>

              {/* Progress bar dorée */}
              <div className="h-[3px] w-full" style={{ background: 'rgba(255,255,255,0.05)' }}>
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: 'linear-gradient(90deg, #d4af37, #fef08a)', width: `${progress}%` }}
                />
              </div>

              {/* Video */}
              <div
                className="relative select-none"
                onContextMenu={e => e.preventDefault()}
              >
                <AnimatePresence mode="wait">
                  <motion.video
                    key={current}
                    src={VIDEOS[current].src}
                    autoPlay
                    muted
                    loop={false}
                    playsInline
                    disablePictureInPicture
                    className="w-full block"
                    style={{ pointerEvents: 'none' }}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>

                {/* Security overlay */}
                <div className="absolute inset-0" onContextMenu={e => e.preventDefault()}
                  style={{ background: 'transparent', userSelect: 'none' }} />

              </div>

              {/* Bottom nav avec tabs */}
              <div className="flex items-stretch justify-between gap-px"
                style={{ background: '#0e0e0e', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                {VIDEOS.map((v, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className="flex-1 flex flex-col items-center justify-center gap-1 px-2 py-3 transition-all duration-300 relative"
                    style={{
                      background: i === current ? 'rgba(212,175,55,0.07)' : 'transparent',
                      borderRight: i < VIDEOS.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                    }}
                  >
                    {/* Barre active en haut */}
                    {i === current && (
                      <span className="absolute top-0 left-0 right-0 h-[2px] rounded-b-full"
                        style={{ background: 'linear-gradient(90deg, #d4af37, #fef08a)' }} />
                    )}
                    <span className="text-[10px] font-bold tracking-wide uppercase"
                      style={{ color: i === current ? '#d4af37' : 'rgba(255,255,255,0.25)' }}>
                      {v.tag}
                    </span>
                    <span className="text-[10px] leading-tight text-center"
                      style={{ color: i === current ? 'rgba(255,255,255,0.65)' : 'rgba(255,255,255,0.2)' }}>
                      {v.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Live badge */}
            <div className="absolute -top-3.5 -right-3.5 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold z-10"
              style={{ background: '#0a0a0a', border: '1px solid rgba(16,185,129,0.4)', color: '#10b981', boxShadow: '0 0 20px rgba(16,185,129,0.2)' }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#10b981' }} />
              Live
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}
