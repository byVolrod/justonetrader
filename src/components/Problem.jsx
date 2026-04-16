import { motion } from 'framer-motion'
import { XCircle, CheckCircle } from 'lucide-react'

const problems = [
  {
    title: 'Trader sans biais ni structure',
    desc: 'Entrée au feeling, sans confluence ni direction HTF. Sans logique définie, tu joues contre toi-même à chaque position.',
    color: '#ef4444',
    num: '01',
  },
  {
    title: 'Exécution et gestion du risque',
    desc: 'Stop mal placé, sizing émotionnel, entrée précipitée. Une seule erreur efface plusieurs semaines de travail.',
    color: '#ef4444',
    num: '02',
  },
  {
    title: 'Le mental qui sabote tout',
    desc: 'FOMO, revenge trading, fermeture prématurée. Les meilleures analyses ne servent à rien quand les émotions décident.',
    color: '#ef4444',
    num: '03',
  },
]

export default function Problem() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest uppercase"
            style={{ border: '1px solid rgba(239,68,68,0.25)', background: 'rgba(239,68,68,0.05)', color: '#ef4444' }}>
            Ces erreurs te coûtent des trades chaque semaine
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-4">
            95% des traders perdent.
            <br />
            <span style={{ background: 'linear-gradient(90deg, #f87171, #fca5a5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Pas par manque d'effort.
            </span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.62)' }}>
            Chaque erreur ci-dessous est prévisible. Et surtout — entièrement évitable.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              className="relative rounded-2xl p-6 cursor-default overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${p.color}08, #111111 60%)`,
                border: `1px solid ${p.color}22`,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{
                borderColor: `${p.color}55`,
                boxShadow: `0 0 40px ${p.color}14`,
                y: -4,
                transition: { duration: 0.2 },
              }}
              whileTap={{
                borderColor: `${p.color}55`,
                boxShadow: `0 0 40px ${p.color}14`,
                y: -4,
                transition: { duration: 0.15 },
              }}
            >
              {/* Large background number */}
              <div className="absolute -bottom-3 -right-2 text-[5.5rem] font-black pointer-events-none select-none leading-none"
                style={{ color: `${p.color}10` }}>
                {p.num}
              </div>

              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${p.color}12` }}>
                <XCircle size={18} style={{ color: p.color }} />
              </div>
              <h3 className="text-white font-bold text-base mb-2">{p.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Solution banner */}
        <motion.div
          className="rounded-2xl p-5 flex items-center justify-between gap-4 flex-wrap"
          style={{
            background: 'linear-gradient(135deg, rgba(16,185,129,0.08), rgba(212,175,55,0.06))',
            border: '1px solid rgba(16,185,129,0.2)',
          }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-3">
            <CheckCircle size={20} style={{ color: '#10b981' }} className="shrink-0" />
            <p className="text-sm sm:text-base font-semibold text-white">
              Ces 3 problèmes ont une solution : méthode, structure, et une communauté qui trade comme toi.
            </p>
          </div>
          <a
            href="https://whop.com/justonetrader"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-sm font-bold px-5 py-2.5 rounded-xl transition-all"
            style={{ background: 'linear-gradient(135deg, #d4af37, #e8c94a)', color: '#0a0a0f' }}
          >
            Rejoindre →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
