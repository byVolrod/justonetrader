import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'
import { useWhopStats } from '../hooks/useWhopStats'
import AnimatedNumber from './AnimatedNumber'

export default function CTA() {
  const { memberCount } = useWhopStats()

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative rounded-3xl overflow-hidden text-center"
          style={{
            background: 'linear-gradient(160deg, rgba(212,175,55,0.07) 0%, #1a1a1a 40%, #1c1c1c 100%)',
            border: '1px solid rgba(212,175,55,0.28)',
            boxShadow: '0 0 80px rgba(212,175,55,0.08), inset 0 1px 0 rgba(212,175,55,0.12)',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Top gold beam */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at top, rgba(212,175,55,0.1), transparent 65%)' }} />

          {/* Top border glow */}
          <div className="absolute top-0 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent 5%, rgba(212,175,55,0.6) 40%, rgba(212,175,55,0.6) 60%, transparent 95%)' }} />

          <div className="relative px-8 sm:px-16 py-16">
            {/* Stars */}
            <motion.div
              className="flex items-center justify-center gap-1 mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="#d4af37" color="#d4af37" />
              ))}
              <span className="ml-2 text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.55)' }}>
                5.0 · <AnimatedNumber value={memberCount} duration={1800} /> membres satisfaits
              </span>
            </motion.div>

            <motion.h2
              className="text-3xl sm:text-5xl font-black mb-5 leading-tight"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              Prêt à trader
              <br />
              <span style={{ background: 'linear-gradient(90deg, #d4af37, #fef08a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                avec méthode ?
              </span>
            </motion.h2>

            <motion.p
              className="text-base mb-10 max-w-sm mx-auto"
              style={{ color: 'rgba(255,255,255,0.55)' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Rejoins +<AnimatedNumber value={memberCount} duration={1800} /> traders qui progressent chaque jour. Commence gratuitement, sans engagement.
            </motion.p>

            <motion.a
              href="https://whop.com/justonetrader"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 font-black w-full sm:w-auto px-10 py-4 rounded-xl text-sm"
              style={{ background: 'linear-gradient(90deg, #d4af37, #e8c94a)', color: '#0a0a0f', boxShadow: '0 0 50px rgba(212,175,55,0.3)' }}
              whileHover={{ scale: 1.04, boxShadow: '0 0 80px rgba(212,175,55,0.5)' }}
              whileTap={{ scale: 0.97 }}
            >
              Accéder à la communauté
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <p className="text-xs mt-6" style={{ color: 'rgba(255,255,255,0.3)' }}>
              Plan gratuit disponible · Annulable à tout moment · Noté 5.0★ sur Whop
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
