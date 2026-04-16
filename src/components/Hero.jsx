import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useWhopStats } from '../hooks/useWhopStats'
import AnimatedNumber from './AnimatedNumber'


export default function Hero() {
  const { memberCount } = useWhopStats()

  return (
    <section id="accueil" className="relative min-h-[92vh] flex items-center pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text side */}
          <div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black leading-[1.04] mb-6"
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

          {/* Video side */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            {/* Outer glow */}
            <div className="absolute -inset-6 rounded-3xl blur-3xl pointer-events-none"
              style={{ background: 'radial-gradient(ellipse, rgba(212,175,55,0.12) 0%, transparent 70%)' }} />

            {/* Card */}
            <div className="relative rounded-2xl overflow-hidden"
              style={{
                border: '1px solid rgba(212,175,55,0.2)',
                boxShadow: '0 0 0 1px rgba(255,255,255,0.04), 0 30px 60px rgba(0,0,0,0.6)',
              }}>

              {/* Fake browser/Discord top bar */}
              <div className="flex items-center gap-2 px-4 py-2.5"
                style={{ background: '#1a1a1a', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#ef4444' }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#f59e0b' }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#22c55e' }} />
                </div>
                <div className="flex-1 mx-3 rounded px-3 py-0.5 text-[11px] text-center truncate"
                  style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.25)' }}>
                  discord.com — JustOneTrader
                </div>
              </div>

              {/* Video */}
              <div
                className="relative select-none"
                onContextMenu={e => e.preventDefault()}
              >
                <video
                  src="/video-discord.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  disablePictureInPicture
                  className="w-full block"
                  style={{ pointerEvents: 'none' }}
                />
                {/* Transparent security overlay */}
                <div
                  className="absolute inset-0"
                  onContextMenu={e => e.preventDefault()}
                  style={{ background: 'transparent', userSelect: 'none' }}
                />
                {/* Bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(17,17,17,0.7) 0%, transparent 100%)' }} />
              </div>
            </div>

            {/* Live badge */}
            <div className="absolute -top-3 -right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold z-10"
              style={{ background: '#0f0f0f', border: '1px solid rgba(16,185,129,0.35)', color: '#10b981', boxShadow: '0 0 16px rgba(16,185,129,0.15)' }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#10b981', animation: 'pulse 1.5s ease-in-out infinite' }} />
              Live
            </div>

            {/* Members badge */}
            <div className="absolute -bottom-3 -left-3 flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold z-10"
              style={{ background: '#0f0f0f', border: '1px solid rgba(212,175,55,0.25)', color: 'rgba(255,255,255,0.85)', boxShadow: '0 0 16px rgba(212,175,55,0.08)' }}>
              <span style={{ color: '#d4af37' }}>★</span> 5.0 · +{memberCount} membres
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
