import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { useWhopStats } from '../hooks/useWhopStats'
import AnimatedNumber from './AnimatedNumber'

function StarRow() {
  return (
    <div style={{ display: 'flex', gap: 2, marginBottom: 12 }}>
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={12} fill="#d4af37" color="#d4af37" />
      ))}
    </div>
  )
}

function Card({ t }) {
  const initial = (t.username ?? '?').charAt(0).toUpperCase()

  return (
    <div style={{
      width: 'min(340px, 85vw)',
      height: 240,
      marginRight: 14,
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column',
      background: '#111111',
      border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: 16,
      padding: '20px',
      boxSizing: 'border-box',
      position: 'relative',
    }}>
      {/* Decorative quote */}
      <div style={{
        position: 'absolute', top: 12, right: 14,
        fontSize: 48, fontWeight: 900, lineHeight: 1,
        color: 'rgba(212,175,55,0.06)', fontFamily: 'Georgia, serif',
        pointerEvents: 'none', userSelect: 'none',
      }}>"</div>

      <StarRow />

      {/* Text — scrollable, hidden scrollbar */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        marginBottom: 16,
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}>
        <p style={{
          fontSize: 13,
          lineHeight: 1.65,
          color: 'rgba(255,255,255,0.75)',
          margin: 0,
        }}>
          "{t.description}"
        </p>
      </div>

      {/* Author always at bottom */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        paddingTop: 14,
        borderTop: '1px solid rgba(255,255,255,0.06)',
        marginTop: 'auto',
        flexShrink: 0,
      }}>
        <div style={{
          width: 34, height: 34, borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 13, fontWeight: 900, flexShrink: 0,
          background: 'linear-gradient(135deg, #d4af37, #e8c94a)', color: '#111111',
        }}>{initial}</div>
        <div>
          <div style={{ color: '#fff', fontWeight: 600, fontSize: 13 }}>
            {t.username ?? 'Membre Whop'}
          </div>
          <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 11 }}>
            Whop · Vérifié
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const { reviews, reviewCount } = useWhopStats()
  const allCards = [...reviews, ...reviews]

  return (
    <section id="temoignages" className="py-16 sm:py-24 relative overflow-hidden">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest uppercase"
              style={{ border: '1px solid rgba(212,175,55,0.3)', background: 'rgba(212,175,55,0.05)', color: '#d4af37' }}>
              Avis Whop vérifiés
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
              Ce qu'ils en disent.
            </h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ display: 'flex', gap: 2 }}>
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#d4af37" color="#d4af37" />)}
            </div>
            <span style={{ color: '#fff', fontWeight: 900, fontSize: 20 }}>5.0</span>
            <span style={{ color: 'rgba(255,255,255,0.58)', fontSize: 14 }}>
              · <AnimatedNumber value={reviewCount} duration={1600} style={{ color: 'rgba(255,255,255,0.58)', fontSize: 14 }} /> avis vérifiés sur Whop
            </span>
          </div>
        </motion.div>
      </div>

      {/* Marquee */}
      <div style={{
        overflow: 'hidden',
        maskImage: 'linear-gradient(90deg, transparent, black 5%, black 95%, transparent)',
        WebkitMaskImage: 'linear-gradient(90deg, transparent, black 5%, black 95%, transparent)',
      }}>
        <div
          className="marquee-left"
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            width: 'max-content',
          }}
        >
          {allCards.map((t, i) => <Card key={i} t={t} />)}
        </div>
      </div>

      <motion.div
        className="text-center mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <a
          href="https://whop.com/justonetrader/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium transition-colors duration-200 inline-flex items-center gap-1"
          style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}
          onMouseEnter={e => e.currentTarget.style.color = '#d4af37'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
        >
          Voir tous les avis sur Whop →
        </a>
      </motion.div>
    </section>
  )
}
