import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Hash, TrendingUp, BarChart2, Radio, Globe, Trophy, X } from 'lucide-react'
import { useWhopStats } from '../hooks/useWhopStats'
import AnimatedNumber from './AnimatedNumber'

const screenshots = [
  {
    src: '/jot-trades.png',
    channel: 'jot-trades',
    label: 'Trades en temps réel',
    desc: 'Positions partagées en live avec entrée, résultat et analyse.',
    objectPosition: '50% 30%',
    icon: TrendingUp,
    accentColor: '#10b981',
    dot: '#10b981',
  },
  {
    src: '/analyse-technique.png',
    channel: 'analyse-technique',
    label: 'Analyses graphiques',
    desc: 'Chaque setup expliqué : structure, entrée, SL, TP.',
    objectPosition: '50% 40%',
    icon: BarChart2,
    accentColor: '#d4af37',
    dot: '#d4af37',
  },
  {
    src: '/analyse-live.jpg',
    channel: 'analyse-live',
    label: 'Sessions live',
    desc: 'Analyses en direct avec partage d\'écran.',
    objectPosition: '50% 20%',
    icon: Radio,
    accentColor: '#ef4444',
    dot: '#ef4444',
  },
  {
    src: '/analyse-fondamentales.png',
    channel: 'analyse-fondamentale',
    label: 'Weekly & Daily FX Recap',
    desc: 'Brief macro quotidien + récap fondamental hebdomadaire.',
    objectPosition: '50% 30%',
    icon: Globe,
    accentColor: '#a5b4fc',
    dot: '#a5b4fc',
  },
  {
    src: '/profits.png',
    channel: 'forex-profits',
    label: 'Résultats membres',
    desc: 'Les membres partagent leurs gains.',
    objectPosition: '20% 40%',
    icon: Trophy,
    accentColor: '#d4af37',
    dot: '#10b981',
  },
]

function Lightbox({ item, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(12px)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative max-w-4xl w-full rounded-2xl overflow-hidden"
          style={{ border: `1px solid ${item.accentColor}30` }}
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.92, opacity: 0 }}
          transition={{ duration: 0.22 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3"
            style={{ background: 'rgba(17,17,17,0.95)', borderBottom: `1px solid ${item.accentColor}20` }}>
            <div className="flex items-center gap-2">
              <Hash size={14} style={{ color: 'rgba(255,255,255,0.35)' }} />
              <span className="text-sm font-semibold text-white">{item.channel}</span>
              <span className="w-2 h-2 rounded-full" style={{ background: item.dot, boxShadow: `0 0 5px ${item.dot}` }} />
            </div>
            <button onClick={onClose} className="text-white/50 hover:text-white transition-colors">
              <X size={18} />
            </button>
          </div>
          <img src={item.src} alt={item.label} className="w-full object-contain"
            style={{ maxHeight: '75vh', background: '#0a0a0a' }} draggable="false" />
          <div className="px-4 py-3 text-sm font-medium text-white/70"
            style={{ background: 'rgba(17,17,17,0.95)' }}>
            {item.label} — {item.desc}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function Community() {
  const { memberCount } = useWhopStats()
  const [selected, setSelected] = useState(null)

  return (
    <section id="communaute" className="py-16 sm:py-24">
      {/* Lightbox */}
      {selected && <Lightbox item={selected} onClose={() => setSelected(null)} />}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest uppercase"
            style={{ border: '1px solid rgba(212,175,55,0.3)', background: 'rgba(212,175,55,0.05)', color: '#d4af37' }}>
            <span className="pulse-dot w-1.5 h-1.5 rounded-full" style={{ background: '#10b981', boxShadow: '0 0 6px #10b981' }} />
            La preuve par l'image
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-4">
            Pas de promesses.
            <br />
            <span style={{ background: 'linear-gradient(90deg, #d4af37, #fef08a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Des preuves.
            </span>
          </h2>
          {/* Stats row */}
          <div className="flex items-center justify-center gap-6 flex-wrap mb-8">
            {[
              { count: 5, prefix: '', label: 'salons dédiés' },
              { count: memberCount, prefix: '+', label: 'membres actifs' },
              { value: '7j/7', label: 'analyses & updates' },
            ].map((s, i) => (
              <div key={s.label} className="flex items-center gap-2">
                {s.count !== undefined
                  ? <AnimatedNumber value={s.count} prefix={s.prefix} duration={1800} delay={i * 100} className="text-base font-black" style={{ color: '#d4af37' }} />
                  : <span className="text-base font-black" style={{ color: '#d4af37' }}>{s.value}</span>
                }
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.58)' }}>{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {screenshots.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.channel}
                className="rounded-2xl overflow-hidden group relative cursor-zoom-in"
                style={{ border: '1px solid rgba(255,255,255,0.07)', background: '#111111' }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{
                  borderColor: `${item.accentColor}30`,
                  boxShadow: `0 8px 32px ${item.accentColor}10`,
                  translateY: -4,
                  transition: { duration: 0.25 },
                }}
                whileTap={{
                  borderColor: `${item.accentColor}30`,
                  boxShadow: `0 8px 32px ${item.accentColor}10`,
                  translateY: -4,
                  transition: { duration: 0.15 },
                }}
                onClick={() => setSelected(item)}
              >
                {/* Accent top bar */}
                <div className="h-[2px] w-full" style={{ background: `linear-gradient(90deg, ${item.accentColor}80, transparent)` }} />

                {/* Channel header */}
                <div className="flex items-center gap-2 px-3 py-2.5"
                  style={{ background: 'rgba(0,0,0,0.3)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <Hash size={13} style={{ color: 'rgba(255,255,255,0.25)' }} />
                  <span className="text-xs font-semibold text-white truncate flex-1">{item.channel}</span>
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ background: item.dot, boxShadow: `0 0 5px ${item.dot}` }} />
                </div>

                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: 220 }}>
                  <img src={item.src} alt={item.label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    style={{ objectPosition: item.objectPosition }}
                    loading="lazy" draggable="false" />
                  <div className="absolute inset-0 pointer-events-none"
                    style={{ background: 'linear-gradient(to top, #111111 0%, rgba(14,14,24,0.2) 60%, transparent 100%)' }} />
                  {/* Zoom hint */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-semibold px-2 py-1 rounded-full"
                    style={{ background: 'rgba(0,0,0,0.7)', color: 'rgba(255,255,255,0.7)' }}>
                    ⊕ Agrandir
                  </div>
                </div>

                {/* Footer */}
                <div className="px-3.5 py-3 flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: `${item.accentColor}15`, border: `1px solid ${item.accentColor}25` }}>
                    <Icon size={13} style={{ color: item.accentColor }} />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm leading-tight">{item.label}</div>
                    <p className="text-xs leading-relaxed mt-0.5" style={{ color: 'rgba(255,255,255,0.62)' }}>{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
