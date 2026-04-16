import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ShieldCheck, Star, Users } from 'lucide-react'
import { useWhopStats } from '../hooks/useWhopStats'
import AnimatedNumber from './AnimatedNumber'

const VIDEOS = [
  { src: '/video-discord.mp4', label: 'Membres actifs',        tag: 'Communauté' },
  { src: '/video-fonda.mp4',   label: 'Analyse fondamentale',  tag: 'Fondamentaux' },
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

      {/* Subtle bg glow — left behind text */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.04) 0%, transparent 70%)', filter: 'blur(40px)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-12 items-center">

          {/* ── LEFT — Text ── */}
          <div className="flex flex-col">

            {/* H1 */}
            <motion.h1
              className="text-[2.6rem] md:text-5xl lg:text-[2.75rem] xl:text-5xl 2xl:text-6xl font-black leading-[1.06] mb-5"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
            >
              Tu trades seul.
              <br />Tu n'avances plus.
              <br />
              <span style={{
                background: 'linear-gradient(90deg, #d4af37 0%, #fef08a 60%, #d4af37 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Rejoins la communauté.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-base sm:text-lg leading-relaxed mb-8 max-w-md"
              style={{ color: 'rgba(255,255,255,0.58)' }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
            >
              Résultats réels, transparence totale et une communauté qui trade vraiment.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
            >
              <motion.a
                href="https://whop.com/justonetrader"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 font-bold rounded-xl px-7 py-3.5 text-sm"
                style={{
                  background: 'linear-gradient(135deg, #d4af37, #e8c94a)',
                  color: '#0a0a0f',
                  boxShadow: '0 0 32px rgba(212,175,55,0.25), 0 1px 0 rgba(255,255,255,0.2) inset',
                }}
                whileHover={{ scale: 1.03, boxShadow: '0 0 50px rgba(212,175,55,0.45)' }}
                whileTap={{ scale: 0.97 }}
              >
                Commencer gratuitement
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </motion.a>

              <a
                href="#communaute"
                className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-3.5 rounded-xl transition-all duration-200"
                style={{
                  color: 'rgba(255,255,255,0.5)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.03)',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = '#d4af37'; e.currentTarget.style.borderColor = 'rgba(212,175,55,0.25)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)' }}
              >
                Voir la communauté
                <ArrowRight size={13} />
              </a>
            </motion.div>

            {/* Trust bar */}
            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[
                { icon: Star, text: '5.0★ sur Whop', color: '#d4af37' },
                { icon: ShieldCheck, text: 'Sans engagement', color: '#10b981' },
                { icon: Users, text: 'Accès gratuit', color: 'rgba(255,255,255,0.45)' },
              ].map(({ icon: Icon, text, color }, i) => (
                <div key={text} className="flex items-center gap-1.5 text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  <Icon size={12} style={{ color }} />
                  {text}
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT — Video carousel ── */}
          <motion.div
            className="relative hidden lg:flex flex-col"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Glow behind card */}
            <div className="absolute -inset-10 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(212,175,55,0.09) 0%, transparent 65%)', filter: 'blur(20px)' }} />

            {/* Gradient border wrapper */}
            <div className="relative rounded-[18px] p-px"
              style={{ background: 'linear-gradient(145deg, rgba(212,175,55,0.4) 0%, rgba(212,175,55,0.05) 40%, rgba(212,175,55,0.15) 100%)' }}>

              {/* Card inner */}
              <div className="rounded-[17px] overflow-hidden"
                style={{ background: '#111', boxShadow: '0 32px 80px rgba(0,0,0,0.6)' }}>

                {/* Top bar */}
                <div className="flex items-center justify-between px-4 py-3"
                  style={{ background: '#161616', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#ef4444', opacity: 0.85 }} />
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#f59e0b', opacity: 0.85 }} />
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#22c55e', opacity: 0.85 }} />
                  </div>
                  <div className="flex-1 mx-4 rounded-md px-3 py-1 text-[11px] text-center"
                    style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.22)', letterSpacing: '0.01em' }}>
                    discord.com — JustOneTrader
                  </div>
                  {/* Live pill */}
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full shrink-0"
                    style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)' }}>
                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#10b981' }} />
                    <span className="text-[10px] font-bold" style={{ color: '#10b981' }}>LIVE</span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="h-[2px] w-full" style={{ background: 'rgba(255,255,255,0.04)' }}>
                  <div className="h-full" style={{ width: `${progress}%`, background: 'linear-gradient(90deg, #d4af37, #fef08a)', transition: 'none' }} />
                </div>

                {/* Video */}
                <div className="relative select-none" onContextMenu={e => e.preventDefault()}>
                  <AnimatePresence mode="wait">
                    <motion.video
                      key={current}
                      src={VIDEOS[current].src}
                      autoPlay muted loop={false} playsInline disablePictureInPicture
                      className="w-full block"
                      style={{ pointerEvents: 'none', aspectRatio: '16/9', objectFit: 'cover' }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    />
                  </AnimatePresence>
                  {/* Security overlay */}
                  <div className="absolute inset-0" onContextMenu={e => e.preventDefault()}
                    style={{ userSelect: 'none' }} />
                </div>

                {/* Tab nav */}
                <div className="flex items-stretch" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: '#111' }}>
                  <div className="flex-1 grid gap-px" style={{ gridTemplateColumns: `repeat(${VIDEOS.length}, 1fr)`, background: 'rgba(255,255,255,0.05)' }}>
                    {VIDEOS.map((v, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className="relative flex flex-col items-center justify-center gap-0.5 py-3 transition-all duration-250"
                        style={{
                          background: i === current ? '#161616' : '#111',
                          cursor: 'pointer',
                        }}
                      >
                        {i === current && (
                          <span className="absolute top-0 inset-x-0 h-[2px]"
                            style={{ background: 'linear-gradient(90deg, #d4af37, #fef08a)' }} />
                        )}
                        <span className="text-[9px] font-black tracking-widest uppercase"
                          style={{ color: i === current ? '#d4af37' : 'rgba(255,255,255,0.2)' }}>
                          {v.tag}
                        </span>
                        <span className="text-[10px] font-medium"
                          style={{ color: i === current ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.18)' }}>
                          {v.label}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Counter — intégré dans la barre */}
                  <div className="flex items-center justify-center px-4"
                    style={{ borderLeft: '1px solid rgba(255,255,255,0.05)', background: '#111', minWidth: 52 }}>
                    <motion.span
                      key={current}
                      className="font-black text-xs tabular-nums"
                      style={{ color: '#d4af37', letterSpacing: '0.05em' }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {current + 1} / {VIDEOS.length}
                    </motion.span>
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
