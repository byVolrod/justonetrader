import { motion } from 'framer-motion'
import { Flame, Bitcoin, TrendingUp, Users } from 'lucide-react'
import { useWhopStats } from '../hooks/useWhopStats'
import AnimatedNumber from './AnimatedNumber'

const getMilestones = (memberCount) => [
  { icon: Flame, year: '2021', label: 'Premiers pas dans la finance', desc: 'Copytrading, DCA, ETF — 3 ans à tester, perdre, et comprendre les marchés sans raccourci.', color: '#d4af37' },
  { icon: Bitcoin, year: '2024', label: 'Investissement Crypto & premiers membres', desc: 'Formation auprès d\'un mentor crypto, puis accompagnement de mes premiers membres — investissement moyen/long-terme en suivant mes propres positions. 5.0★ dès le lancement sur Whop.', color: '#10b981' },
  { icon: TrendingUp, year: '2025', label: 'Deux mentors, une méthode', desc: 'Un mentor en analyse technique pure, un second en analyse technique et fondamentale — double formation pour construire une approche complète des marchés, du graphique au macro.', color: '#d4af37' },
  { icon: Users, year: '2026', label: 'Lancement de la communauté JustOneTrader', desc: `Création et lancement de la communauté — +${memberCount} membres actifs, 0 résultat caché. Chaque trade partagé avant et après en transparence totale.`, color: '#10b981' },
]

export default function About() {
  const { memberCount } = useWhopStats()

  return (
    <section id="parcours" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Photo side - clean, no overlay */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute -inset-4 rounded-3xl blur-3xl pointer-events-none"
              style={{ background: 'rgba(212,175,55,0.06)' }} />
            <div className="relative rounded-2xl overflow-hidden"
              style={{ border: '1px solid rgba(255,255,255,0.08)', aspectRatio: '4/5', maxHeight: 560 }}>
              <img
                src="/founder.jpg"
                alt="Fondateur de JustOneTrader"
                className="w-full h-full object-cover"
                style={{ objectPosition: '60% 30%' }}
                loading="lazy"
                draggable="false"
              />
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(to top, rgba(17,17,17,0.6) 0%, transparent 40%)' }} />
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase"
              style={{ border: '1px solid rgba(212,175,55,0.3)', background: 'rgba(212,175,55,0.05)', color: '#d4af37' }}>
              Qui suis-je
            </div>

            <h2 className="text-3xl sm:text-4xl font-black leading-tight mb-6">
              Un trader en progression,
              <br />
              <span style={{ background: 'linear-gradient(90deg, #d4af37, #fef08a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                pas un vendeur de rêve.
              </span>
            </h2>

            <p className="text-base leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.72)' }}>
              Chaque trade, chaque résultat — gagnant ou perdant — partagé en transparence totale. Pas de mise en scène, juste la réalité d'un trader qui progresse et documente tout.
            </p>

            {/* Vertical timeline */}
            <div className="relative ml-1 mb-8">
              {/* Connecting line */}
              <div className="absolute left-[17px] top-4 bottom-4 w-0.5 rounded-full"
                style={{ background: 'linear-gradient(to bottom, #d4af37 0%, #10b981 50%, #d4af37 100%)' }} />

              <div className="space-y-6">
                {getMilestones(memberCount).map((m, i) => {
                  const isLatest = i === 3
                  return (
                    <motion.div
                      key={m.year}
                      className="flex items-start gap-4 relative"
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.12, duration: 0.5 }}
                    >
                      {/* Pulse ring on latest */}
                      {isLatest && (
                        <div className="absolute left-0 top-0 w-9 h-9 rounded-full z-10 pointer-events-none"
                          style={{
                            border: `2px solid ${m.color}`,
                            animation: 'ping 2s cubic-bezier(0,0,0.2,1) infinite',
                            opacity: 0.3,
                          }} />
                      )}

                      {/* Icon circle */}
                      <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 relative z-10"
                        style={{
                          background: '#111111',
                          border: `2px solid ${m.color}`,
                          boxShadow: `0 0 ${isLatest ? 20 : 10}px ${m.color}${isLatest ? '50' : '25'}`,
                        }}>
                        <m.icon size={15} style={{ color: m.color }} />
                      </div>

                      {/* Text */}
                      <div className="pt-1">
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <span className="text-sm font-black" style={{ color: m.color }}>{m.year}</span>
                          <span className="text-sm font-semibold text-white">{m.label}</span>
                          {isLatest && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                              style={{ background: 'rgba(16,185,129,0.12)', color: '#10b981', border: '1px solid rgba(16,185,129,0.25)' }}>
                              Maintenant
                            </span>
                          )}
                        </div>
                        <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.62)' }}>{m.desc}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-8 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              {[
                { count: 5, prefix: '+', label: 'Ans dans la finance', color: '#d4af37' },
                { count: 3, prefix: '', label: 'Mentors', color: '#10b981' },
                { count: memberCount, prefix: '+', label: 'Membres', color: '#d4af37' },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                >
                  <AnimatedNumber value={s.count} prefix={s.prefix} duration={1800} delay={i * 80} className="text-2xl font-black" style={{ color: s.color }} />
                  <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.58)' }}>{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
