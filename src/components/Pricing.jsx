import { motion } from 'framer-motion'
import { Check, Sparkles, Lock, Zap, ShieldCheck } from 'lucide-react'

const plans = [
  {
    name: 'JOT — TRADING',
    price: '24,99€',
    period: '/mois',
    color: '#10b981',
    description: 'Accès complet à la communauté, aux analyses et au programme éducatif Forex.',
    features: [
      'Accès exclusif au salon privé Discord',
      'Analyses fondamentales complètes (Weekly & Daily Recap)',
      'Analyses techniques avancées par JustOneTrader',
      'Programme éducatif Forex',
      'Sessions d\'analyses en live avec le marché',
      'Sessions Q&A en direct pour répondre à toutes les questions',
      'Suivi des performances et résultats des membres',
    ],
    link: 'https://whop.com/joined/justonetrader/products/jot-trading/',
    cta: 'Rejoindre maintenant',
  },
  {
    name: 'JOT — DTP',
    price: '24,99€',
    period: '/mois',
    color: '#d4af37',
    description: 'Terminal de données institutionnelles. Toutes les données pour trader comme le smart money.',
    features: [
      'Positions retail',
      'Positions COT institutionnels',
      'Force des devises',
      'Bias directionnels institutionnels',
      'Calendrier FX Premium',
      'Données macro : NFP, CPI, PIB, taux directeurs',
      'Journal de Trading avancé',
    ],
    link: 'https://whop.com/joined/justonetrader/products/jot-dtp/',
    cta: 'Accéder au terminal',
    badge: 'NOUVEAU',
  },
  {
    name: 'JOT — CRYPTO',
    price: '39,99€',
    period: '/mois',
    color: '#F7931A',
    description: 'Investissement crypto moyen/long-terme avec un accompagnement structuré et des signaux clairs.',
    features: [
      'Analyses techniques des cryptomonnaies',
      'Analyses fondamentales des projets crypto',
      'Signaux et alertes pour optimiser tes DCA (entrées progressives)',
      'Détection des phases de marché (Bull & Bear)',
    ],
    link: 'https://whop.com/joined/justonetrader/products/jot-crypto/',
    cta: 'Investir en Crypto',
  },
  {
    name: 'JOT — PREMIUM',
    price: '59,99€',
    period: '/mois',
    color: '#38BDF8',
    description: 'L\'accès total. Suivi personnalisé, tous marchés, analyses premium.',
    features: [
      'Accès aux analyses fondamentales',
      'Accès aux analyses techniques',
      'Accès au suivi du portefeuille crypto',
      'Sessions d\'analyses en live sur Discord',
      'Accès direct via WhatsApp pour un suivi plus réactif',
      { text: 'Coaching personnalisé (bientôt disponible)', soon: true },
    ],
    link: 'https://whop.com/joined/justonetrader/products/jot-premium/',
    cta: 'Devenir Premium',
    badge: 'MEILLEURE OFFRE',
  },
]

export default function Pricing() {
  return (
    <section id="tarifs" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(212,175,55,0.05), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest uppercase"
            style={{ border: '1px solid rgba(212,175,55,0.3)', background: 'rgba(212,175,55,0.05)', color: '#d4af37' }}>
            Tarifs
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            Commence
            <span style={{ background: 'linear-gradient(90deg, #d4af37, #fef08a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}> gratuitement.</span>
          </h2>
          <p className="text-base max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Pas d'engagement. Upgrade quand tu veux, annule quand tu veux.
          </p>

        </motion.div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {plans.map((plan, i) => {
            const c = plan.color
            const isPremium = plan.badge === 'MEILLEURE OFFRE'
            return (
            <motion.div
              key={plan.name}
              className="relative flex flex-col rounded-2xl p-6"
              style={{
                background: `linear-gradient(160deg, ${c}18 0%, #1a1a1a 50%)`,
                border: `1px solid ${c}55`,
                boxShadow: `0 4px 24px rgba(0,0,0,0.4), 0 0 0 0px ${c}00`,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -5, borderColor: `${c}90`, boxShadow: `0 8px 40px rgba(0,0,0,0.5), 0 0 30px ${c}22`, transition: { duration: 0.2 } }}
              whileTap={{ y: -5, borderColor: `${c}90`, boxShadow: `0 8px 40px rgba(0,0,0,0.5), 0 0 30px ${c}22`, transition: { duration: 0.15 } }}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 text-xs font-black px-4 py-1.5 rounded-full whitespace-nowrap"
                  style={{ background: c, color: '#fff', boxShadow: `0 0 16px ${c}55` }}>
                  {isPremium ? <Sparkles size={10} /> : <Zap size={10} />}
                  {plan.badge}
                </div>
              )}

              {/* Name + price */}
              <div className="mb-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ background: c, boxShadow: `0 0 8px ${c}` }} />
                  <span className="text-white font-black text-sm tracking-widest uppercase">{plan.name}</span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{plan.description}</p>
              </div>

              <div className="mb-6 pb-5" style={{ borderBottom: `1px solid ${c}25` }}>
                <span className="text-4xl font-black" style={{ color: c }}>{plan.price}</span>
                <span className="text-sm ml-1.5" style={{ color: 'rgba(255,255,255,0.4)' }}>{plan.period}</span>
              </div>

              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((f, fi) => {
                  const isSoon = typeof f === 'object' && f.soon
                  const text = isSoon ? f.text : f
                  return (
                    <li key={fi} className="flex items-start gap-2.5 text-xs">
                      {isSoon
                        ? <Lock size={12} className="mt-0.5 shrink-0" style={{ color: 'rgba(255,255,255,0.2)' }} />
                        : <Check size={12} className="mt-0.5 shrink-0" style={{ color: c }} />
                      }
                      <span style={isSoon
                        ? { color: 'rgba(255,255,255,0.35)', textDecoration: 'line-through' }
                        : { color: 'rgba(255,255,255,0.75)' }
                      }>
                        {text}
                        {isSoon && <span className="ml-1.5 no-underline text-[10px] font-semibold px-1.5 py-0.5 rounded-full"
                          style={{ background: `${c}15`, color: c, textDecoration: 'none', display: 'inline-block' }}>
                          Bientôt
                        </span>}
                      </span>
                    </li>
                  )
                })}
              </ul>

              <a href={plan.link} target="_blank" rel="noopener noreferrer"
                className="block text-center font-bold py-3 rounded-xl text-sm transition-all duration-200"
                style={{
                  background: `linear-gradient(135deg, ${c}cc, ${c})`,
                  color: '#fff',
                  boxShadow: `0 0 20px ${c}30`,
                  letterSpacing: '0.03em',
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 0 40px ${c}55`; e.currentTarget.style.transform = 'translateY(-1px)' }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = `0 0 20px ${c}30`; e.currentTarget.style.transform = 'translateY(0)' }}
                onTouchStart={e => { e.currentTarget.style.opacity = '0.85' }}
                onTouchEnd={e => { e.currentTarget.style.opacity = '1' }}
              >
                {plan.cta}
              </a>
            </motion.div>
            )
          })}
        </div>

        {/* Subtle guarantee line below cards */}
        <motion.div
          className="flex items-center justify-center gap-2 mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <ShieldCheck size={13} style={{ color: 'rgba(16,185,129,0.6)' }} />
          <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
            Satisfait ou remboursé sous <span style={{ color: 'rgba(255,255,255,0.55)' }}>7 jours</span> — aucune question posée
          </span>
        </motion.div>
      </div>
    </section>
  )
}
