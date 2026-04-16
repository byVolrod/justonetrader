import { motion } from 'framer-motion'
import { TrendingUp, Target, BarChart2, Award } from 'lucide-react'

const globalStats = [
  { icon: Award,      label: 'Winrate global', value: '93%',    sub: 'Sur 3 mois de trading',  color: '#d4af37' },
  { icon: TrendingUp, label: 'PNL total',       value: '+10k $', sub: 'Progression constante',  color: '#10b981' },
  { icon: Target,     label: 'R moyen',          value: '21.05',  sub: 'Ratio risque/rendement', color: '#d4af37' },
  { icon: BarChart2,  label: 'Capital final',    value: '110k €', sub: 'Mars 2025',              color: '#10b981' },
]

export default function Performances() {
  return (
    <section id="performances" className="py-14 sm:py-20 relative overflow-hidden">

      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 50% at 0% 70%, rgba(16,185,129,0.05), transparent)'
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest uppercase"
            style={{ border: '1px solid rgba(16,185,129,0.3)', background: 'rgba(16,185,129,0.06)', color: '#10b981' }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#10b981', animation: 'pulse 2s infinite' }} />
            Transparence totale
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-4">
            Mes performances
            <br />
            <span style={{ background: 'linear-gradient(90deg, #10b981, #6ee7b7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              en temps réel.
            </span>
          </h2>
          <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Chaque trade est enregistré dans mon journal. Aucun résultat caché, aucune sélection. Ce que vous voyez ici est ma réalité de trader.
          </p>
        </motion.div>

        {/* KPI cards row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {globalStats.map((s, i) => (
            <motion.div
              key={s.label}
              className="rounded-2xl p-5 relative overflow-hidden"
              style={{ background: '#1c1c1c', border: '1px solid rgba(255,255,255,0.07)' }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ borderColor: `${s.color}28`, transition: { duration: 0.2 } }}
            >
              <div className="absolute top-0 right-0 w-16 h-16 rounded-full blur-2xl pointer-events-none opacity-20"
                style={{ background: s.color, transform: 'translate(30%, -30%)' }} />
              <div className="w-8 h-8 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${s.color}15` }}>
                <s.icon size={14} style={{ color: s.color }} />
              </div>
              <div className="text-2xl sm:text-3xl font-black leading-none mb-1.5" style={{ color: s.color }}>
                {s.value}
              </div>
              <div className="text-white font-semibold text-sm leading-tight">{s.label}</div>
              <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}>{s.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Dashboard showcase */}
        <motion.div
          className="rounded-2xl overflow-hidden relative group"
          style={{
            background: '#1c1c1c',
            border: '1px solid rgba(16,185,129,0.15)',
            boxShadow: '0 0 40px rgba(16,185,129,0.04)',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 py-3.5"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.25)' }}>
            <div className="flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full shrink-0"
                style={{ background: '#10b981', boxShadow: '0 0 6px #10b981', animation: 'pulse 2s infinite' }} />
              <span className="text-sm font-semibold text-white">Pilot — Yearly Journal</span>
              <span className="text-xs" style={{ color: 'rgba(255,255,255,0.48)' }}>2025</span>
            </div>
            <span className="text-xs px-3 py-1 rounded-full font-medium"
              style={{ background: 'rgba(16,185,129,0.1)', color: '#10b981', border: '1px solid rgba(16,185,129,0.2)' }}>
              Mis à jour en temps réel
            </span>
          </div>

          {/* Dashboard image */}
          <div className="relative overflow-hidden">
            <img
              src="/dashboard.jpg"
              alt="Pilot Dashboard — Journal de trading JustOneTrader"
              className="w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
              style={{ maxHeight: 480 }}
            />
            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
              style={{ background: 'linear-gradient(to top, #1c1c1c, transparent)' }} />
          </div>

          {/* Bottom caption */}
          <div className="px-5 py-4 flex flex-wrap items-center justify-between gap-2">
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Journal complet accessible aux membres — chaque trade documenté, aucune sélection.
            </p>
            <span className="text-xs font-semibold shrink-0" style={{ color: '#d4af37' }}>
              Accès membre
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
