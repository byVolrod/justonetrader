import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ShieldCheck, Star, TrendingUp } from 'lucide-react'
import { useWhopStats } from '../hooks/useWhopStats'
import AnimatedNumber from './AnimatedNumber'

const VIDEOS = [
  { src: '/video-discord.mp4', label: 'Membres actifs',         tag: 'Communauté' },
  { src: '/video-fonda.mp4',   label: 'Analyse fondamentale',   tag: 'Fondamentaux' },
  { src: '/video-jot.mp4',     label: 'Mes analyses en direct', tag: 'Analyses' },
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
      setProgress(Math.min((elapsed / INTERVAL) * 100, 100))
      if (elapsed < INTERVAL) progressRef.current = requestAnimationFrame(tick)
      else setCurrent(c => (c + 1) % VIDEOS.length)
    }
    progressRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(progressRef.current)
  }, [current])

  return (
    <section id="accueil" className="relative min-h-[92vh] flex items-center pt-20 pb-16 overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.035) 0%, transparent 65%)' }} />
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.025) 0%, transparent 65%)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-14 items-center">

          {/* ── LEFT ── */}
          <div className="flex flex-col">

            {/* Live indicator pill */}
            <motion.div
              className="flex items-center gap-2 self-start mb-7"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full"
                style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.18)', color: '#10b981' }}>
                <span className="pulse-dot w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#10b981', boxShadow: '0 0 6px #10b981' }} />
                <AnimatedNumber value={memberCount} prefix="+" className="font-bold text-white" duration={1800} />
                &nbsp;membres actifs
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              className="font-black leading-[1.06] mb-6"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
            >
              <span style={{ color: 'rgba(255,255,255,0.92)' }}>Tu trades seul.</span>
              <br />
              <span style={{ color: 'rgba(255,255,255,0.75)' }}>Tu n'avances plus.</span>
              <br />
              <span style={{
                background: 'linear-gradient(90deg, #d4af37 0%, #fef08a 50%, #c9a227 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Rejoins la communauté.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-base sm:text-[1.05rem] leading-relaxed mb-9 max-w-sm"
              style={{ color: 'rgba(255,255,255,0.5)' }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
            >
              Résultats réels, transparence totale et une communauté qui trade vraiment.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.26 }}
            >
              <motion.a
                href="https://whop.com/justonetrader"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2.5 font-bold rounded-xl px-7 py-3.5 text-sm overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #c9a227, #e8c94a, #d4af37)',
                  color: '#0a0a0f',
                  boxShadow: '0 0 28px rgba(212,175,55,0.3), 0 1px 0 rgba(255,255,255,0.25) inset',
                }}
                whileHover={{ scale: 1.03, boxShadow: '0 0 48px rgba(212,175,55,0.5)' }}
                whileTap={{ scale: 0.97 }}
              >
                Commencer gratuitement
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </motion.a>

              <a
                href="#communaute"
                className="inline-flex items-center gap-1.5 text-sm font-medium px-5 py-3.5 rounded-xl transition-all duration-200"
                style={{
                  color: 'rgba(255,255,255,0.45)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  background: 'rgba(255,255,255,0.02)',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = '#d4af37'; e.currentTarget.style.borderColor = 'rgba(212,175,55,0.22)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)' }}
              >
                Voir la communauté
                <ArrowRight size={12} />
              </a>
            </motion.div>

            {/* Trust row */}
            <motion.div
              className="flex flex-wrap items-center gap-5 pt-6"
              style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.42 }}
            >
              <div className="flex items-center gap-1.5 text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
                <Star size={11} fill="#d4af37" style={{ color: '#d4af37' }} />
                <span><span className="text-white font-semibold">5.0</span> sur Whop</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
                <ShieldCheck size={11} style={{ color: '#10b981' }} />
                Sans engagement
              </div>
              <div className="flex items-center gap-1.5 text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
                <TrendingUp size={11} style={{ color: '#d4af37' }} />
                Accès gratuit immédiat
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT — Video ── */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.28 }}
          >
            {/* Outer glow */}
            <div className="absolute -inset-12 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 55% 50%, rgba(212,175,55,0.1) 0%, transparent 60%)' }} />

            {/* Gradient border */}
            <div className="relative rounded-[20px] p-px"
              style={{ background: 'linear-gradient(160deg, rgba(212,175,55,0.5) 0%, rgba(212,175,55,0.08) 35%, rgba(212,175,55,0.0) 60%, rgba(212,175,55,0.2) 100%)' }}>

              <div className="rounded-[19px] overflow-hidden"
                style={{ background: '#0f0f0f', boxShadow: '0 40px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.02)' }}>

                {/* ── Top bar ── */}
                <div className="flex items-center gap-3 px-4 py-3"
                  style={{ background: 'linear-gradient(180deg, #1e1e1e 0%, #181818 100%)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  {/* Dots */}
                  <div className="flex items-center gap-[7px] shrink-0">
                    {[
                      { color: '#ff5f57', shadow: 'rgba(255,95,87,0.6)' },
                      { color: '#febc2e', shadow: 'rgba(254,188,46,0.6)' },
                      { color: '#28c840', shadow: 'rgba(40,200,64,0.6)' },
                    ].map(({ color, shadow }) => (
                      <div key={color}
                        className="w-[11px] h-[11px] rounded-full shrink-0"
                        style={{ background: color, boxShadow: `0 0 0 0.5px rgba(0,0,0,0.4), 0 0 6px ${shadow}` }}
                      />
                    ))}
                  </div>

                  {/* URL bar */}
                  <div className="flex-1 flex items-center justify-center gap-1.5 rounded-lg px-3 py-1.5"
                    style={{ background: 'rgba(255,255,255,0.045)', border: '1px solid rgba(255,255,255,0.07)' }}>
                    {/* Lock icon */}
                    <svg width="9" height="10" viewBox="0 0 9 10" fill="none" style={{ color: 'rgba(255,255,255,0.25)', flexShrink: 0 }}>
                      <rect x="1" y="4.5" width="7" height="5" rx="1" stroke="currentColor" strokeWidth="1"/>
                      <path d="M2.5 4.5V3a2 2 0 0 1 4 0v1.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                    </svg>
                    {/* Discord favicon dot */}
                    <span className="w-[7px] h-[7px] rounded-full shrink-0" style={{ background: '#5865f2', boxShadow: '0 0 4px rgba(88,101,242,0.7)' }} />
                    <span className="text-[11px] font-medium tracking-wide" style={{ color: 'rgba(255,255,255,0.3)' }}>
                      discord.com<span style={{ color: 'rgba(255,255,255,0.15)' }}> — JustOneTrader</span>
                    </span>
                  </div>

                  {/* LIVE */}
                  <div
                    className="flex items-center gap-[5px] shrink-0 cursor-default select-none"
                    style={{
                      padding: '4px 10px 4px 8px',
                      borderRadius: 6,
                      background: 'rgba(16,185,129,0.09)',
                      border: '1px solid rgba(16,185,129,0.22)',
                      transition: 'background 0.25s, border-color 0.25s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(16,185,129,0.16)'
                      e.currentTarget.style.borderColor = 'rgba(16,185,129,0.4)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(16,185,129,0.09)'
                      e.currentTarget.style.borderColor = 'rgba(16,185,129,0.22)'
                    }}
                  >
                    <span className="pulse-dot w-[6px] h-[6px] rounded-full shrink-0"
                      style={{ background: '#10b981' }} />
                    <span style={{
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      color: '#10b981',
                      lineHeight: 1,
                    }}>LIVE</span>
                  </div>
                </div>

                {/* ── Story-style progress bars ── */}
                <div className="flex gap-1 px-3 py-2" style={{ background: '#181818' }}>
                  {VIDEOS.map((_, i) => (
                    <div key={i} className="flex-1 h-[3px] rounded-full overflow-hidden"
                      style={{ background: 'rgba(255,255,255,0.08)' }}>
                      <div className="h-full rounded-full"
                        style={{
                          background: 'linear-gradient(90deg, #d4af37, #fef08a)',
                          width: i < current ? '100%' : i === current ? `${progress}%` : '0%',
                          transition: i === current ? 'none' : 'width 0.3s ease',
                        }} />
                    </div>
                  ))}
                </div>

                {/* ── Video ── */}
                <div className="relative select-none" onContextMenu={e => e.preventDefault()}>
                  <AnimatePresence mode="wait">
                    <motion.video
                      key={current}
                      src={VIDEOS[current].src}
                      autoPlay muted loop={false} playsInline disablePictureInPicture
                      className="w-full block"
                      style={{ pointerEvents: 'none', display: 'block' }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35 }}
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0" onContextMenu={e => e.preventDefault()}
                    style={{ userSelect: 'none' }} />
                </div>

                {/* ── Tab nav ── */}
                <div className="flex items-stretch" style={{ background: '#0f0f0f', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  {VIDEOS.map((v, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className="relative flex-1 flex flex-col items-center justify-center gap-0.5 py-3 transition-colors duration-200"
                      style={{
                        background: i === current ? '#181818' : 'transparent',
                        borderRight: i < VIDEOS.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                        cursor: 'pointer',
                      }}
                    >
                      {i === current && (
                        <span className="absolute top-0 inset-x-0 h-[2px]"
                          style={{ background: 'linear-gradient(90deg, #d4af37, #fef08a)' }} />
                      )}
                      <span className="text-[9px] font-black tracking-[0.12em] uppercase"
                        style={{ color: i === current ? '#d4af37' : 'rgba(255,255,255,0.18)' }}>
                        {v.tag}
                      </span>
                      <span className="text-[10px] font-medium"
                        style={{ color: i === current ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.15)' }}>
                        {v.label}
                      </span>
                    </button>
                  ))}

                  {/* Counter */}
                  <div className="flex items-center justify-center px-4 shrink-0"
                    style={{ borderLeft: '1px solid rgba(255,255,255,0.04)' }}>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={current}
                        className="font-black text-xs tabular-nums"
                        style={{ color: 'rgba(212,175,55,0.65)', letterSpacing: '0.06em' }}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.2 }}
                      >
                        {current + 1} / {VIDEOS.length}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
