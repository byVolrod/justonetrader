import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useWhopStats } from '../hooks/useWhopStats'
import AnimatedNumber from './AnimatedNumber'


export default function Hero() {
  const { memberCount } = useWhopStats()

  return (
    <section id="accueil" className="relative min-h-[92vh] flex items-center pt-20 pb-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full text-center">


          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.04] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Tu trades seul.
            <br />Tu n'avances plus.
            <br />
            <span className="whitespace-nowrap" style={{ background: 'linear-gradient(90deg, #d4af37, #fef08a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Rejoins la communauté.
            </span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto"
            style={{ color: 'rgba(255,255,255,0.62)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Résultats réels, transparence totale et une communauté qui trade vraiment.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
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
              className="inline-flex items-center gap-1 text-sm font-medium transition-colors"
              style={{ color: 'rgba(255,255,255,0.55)' }}
              onMouseEnter={e => e.currentTarget.style.color = '#d4af37'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
            >
              Voir la communauté ↓
            </a>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 text-xs"
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

    </section>
  )
}
