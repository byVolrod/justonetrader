import { motion } from 'framer-motion'
import { Check, Sparkles, Lock, Zap, ShieldCheck } from 'lucide-react'

const plans = [
  {
    name: 'JOT — TRADING',
    emoji: '📈',
    price: '24,99€',
    period: '/mois',
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
    popular: false,
  },
  {
    name: 'JOT — DTP',
    emoji: '🖥️',
    price: '24,99€',
    period: '/mois',
    description: 'Nouveau terminal de données macro & institutionnelles. Trade avec le smart money.',
    features: [
      'Positions retail & bias directionnels institutionnels',
      'Analyse fondamentale & flux smart money',
      'Données macro : NFP, CPI, PIB, taux directeurs',
    ],
    link: 'https://whop.com/joined/justonetrader/products/jot-dtp/',
    cta: 'Accéder au terminal',
    popular: false,
    highlight: true,
    highlightLabel: 'NOUVEAU',
  },
  {
    name: 'JOT — CRYPTO',
    emoji: '₿',
    price: '39,99€',
    period: '/mois',
    description: 'Investissement crypto moyen/long-terme. Points réguliers sur le marché, accompagnement continu.',

    features: [
      'Analyses & prises de positions Crypto',
      'Analyses on-chain & fondamentales',
      'Alertes Bull/Bear market',
    ],
    link: 'https://whop.com/joined/justonetrader/products/jot-crypto/',
    cta: 'Investir en Crypto',
    popular: false,
  },
  {
    name: 'JOT — PREMIUM',
    emoji: '💎',
    price: '59,99€',
    period: '/mois',
    description: 'L\'accès total. Tous marchés, analyses premium.',
    features: [
      'Analyses et prises de positions Forex, Indices & Crypto',
      'Setups exclusifs pre-market quotidiens',
      'Analyses fondamentales hebdomadaires',
      'Accès VIP prioritaire & support 24/7',
      { text: 'Coaching personnalisé', soon: true },
    ],
    link: 'https://whop.com/joined/justonetrader/products/jot-premium/',
    cta: 'Devenir Premium',
    popular: true,
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
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className="relative flex flex-col rounded-2xl p-6"
              style={{
                background: plan.popular
                  ? 'linear-gradient(160deg, rgba(212,175,55,0.09), #1c1c1c 60%)'
                  : plan.highlight
                    ? 'linear-gradient(160deg, rgba(16,185,129,0.09), #1c1c1c 60%)'
                    : '#1c1c1c',
                border: plan.popular
                  ? '1px solid rgba(212,175,55,0.35)'
                  : plan.highlight
                    ? '1px solid rgba(16,185,129,0.35)'
                    : '1px solid rgba(255,255,255,0.07)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={!plan.popular && !plan.highlight ? {
                y: -4,
                borderColor: 'rgba(255,255,255,0.18)',
                boxShadow: '0 0 30px rgba(255,255,255,0.04)',
                transition: { duration: 0.2 },
              } : { y: -4, transition: { duration: 0.2 } }}
              whileTap={!plan.popular && !plan.highlight ? {
                y: -4,
                borderColor: 'rgba(255,255,255,0.18)',
                boxShadow: '0 0 30px rgba(255,255,255,0.04)',
                transition: { duration: 0.15 },
              } : { y: -4, transition: { duration: 0.15 } }}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 text-xs font-black px-4 py-1.5 rounded-full whitespace-nowrap"
                  style={{ background: 'linear-gradient(90deg, #d4af37, #fef08a)', color: '#0a0a0f' }}>
                  <Sparkles size={10} />
                  MEILLEURE OFFRE
                </div>
              )}
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 text-xs font-black px-4 py-1.5 rounded-full whitespace-nowrap"
                  style={{ background: 'linear-gradient(90deg, #10b981, #34d399)', color: '#ffffff' }}>
                  <Zap size={10} />
                  NOUVEAU
                </div>
              )}

              <div className="mb-5">
                <div className="flex items-center gap-2 mb-2">
                  <span>{plan.emoji}</span>
                  <span className="text-white font-bold text-sm tracking-wide">{plan.name}</span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{plan.description}</p>
              </div>

              <div className="mb-6 pb-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <span className="text-3xl font-black text-white">{plan.price}</span>
                <span className="text-sm ml-1" style={{ color: 'rgba(255,255,255,0.58)' }}>{plan.period}</span>
              </div>

              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((f, fi) => {
                  const isSoon = typeof f === 'object' && f.soon
                  const text = isSoon ? f.text : f
                  return (
                    <li key={fi} className="flex items-start gap-2.5 text-xs">
                      {isSoon
                        ? <Lock size={12} className="mt-0.5 shrink-0" style={{ color: 'rgba(255,255,255,0.2)' }} />
                        : <Check size={12} className="mt-0.5 shrink-0" style={{ color: plan.popular ? '#d4af37' : plan.highlight ? '#10b981' : '#10b981' }} />
                      }
                      <span style={isSoon
                        ? { color: 'rgba(255,255,255,0.45)', textDecoration: 'line-through' }
                        : { color: 'rgba(255,255,255,0.72)' }
                      }>
                        {text}
                        {isSoon && <span className="ml-1.5 no-underline text-[10px] font-semibold px-1.5 py-0.5 rounded-full"
                          style={{ background: 'rgba(212,175,55,0.1)', color: '#d4af37', textDecoration: 'none', display: 'inline-block' }}>
                          Bientôt
                        </span>}
                      </span>
                    </li>
                  )
                })}
              </ul>

              <a href={plan.link} target="_blank" rel="noopener noreferrer"
                className="block text-center font-bold py-3 rounded-xl text-sm transition-all"
                style={plan.popular
                  ? { background: 'linear-gradient(90deg, #d4af37, #e8c94a)', color: '#0a0a0f', boxShadow: '0 0 30px rgba(212,175,55,0.2)' }
                  : plan.highlight
                    ? { background: 'linear-gradient(90deg, #10b981, #34d399)', color: '#ffffff', boxShadow: '0 0 30px rgba(16,185,129,0.2)' }
                    : { background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.75)', border: '1px solid rgba(255,255,255,0.1)' }
                }
                onMouseEnter={e => { if (!plan.popular && !plan.highlight) e.currentTarget.style.borderColor = 'rgba(212,175,55,0.35)' }}
                onMouseLeave={e => { if (!plan.popular && !plan.highlight) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
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
