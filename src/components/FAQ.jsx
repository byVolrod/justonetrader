import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'Est-ce que ça marche si je suis débutant ?',
    a: 'Oui — et c\'est même fait pour ça. Le plan gratuit te donne accès aux analyses commentées et à la communauté Discord. Chaque prise de position est accompagnée du raisonnement complet : pourquoi ce marché, pourquoi ce niveau, quelle gestion du risque. Tu lis, tu comprends, tu progresses. Aucune expérience préalable requise.',
  },
  {
    q: 'Combien de temps par jour faut-il consacrer ?',
    a: '15 à 30 minutes par jour suffisent. Les analyses arrivent directement sur Discord — tu consultes à ton rythme, matin ou soir. Pas besoin d\'être collé aux écrans. La méthode est construite pour des gens qui ont une vie en dehors des marchés.',
  },
  {
    q: 'Est-ce que tu trades toi-même en direct ?',
    a: 'Oui. Chaque prise de position est partagée avant l\'entrée, avec l\'analyse derrière. Le résultat est posté après clôture — gain ou perte. Rien n\'est modifié après coup, rien n\'est caché. C\'est la différence entre JustOneTrader et un simple groupe de "alertes".',
  },
  {
    q: 'Quel plan choisir pour commencer ?',
    a: 'Commence par le plan gratuit — accès immédiat, zéro carte bleue. Si tu veux aller plus loin sur le Forex et les Indices, JOT Premium est le meilleur investissement. Si tu es centré sur la crypto moyen/long terme, JOT Crypto est fait pour toi. Tu peux upgrade à tout moment sans perdre l\'accès.',
  },
  {
    q: 'Et si je ne suis pas satisfait ?',
    a: 'Tu as 7 jours pour essayer n\'importe quel plan payant. Si ça ne correspond pas à tes attentes, tu es remboursé intégralement — aucune question posée. L\'annulation se fait en 2 clics depuis ton espace Whop.',
  },
  {
    q: 'C\'est quoi la différence avec d\'autres groupes Discord ?',
    a: 'La transparence totale et l\'absence de mise en scène. Pas de screenshots sélectionnés, pas de résultats tronqués. Les trades sont postés en amont avec le raisonnement, les résultats en aval même quand c\'est négatif. Le track record est accessible à tous les membres en temps réel.',
  },
]

function FaqItem({ faq, isOpen, onToggle, index }) {
  return (
    <div
      className="rounded-2xl overflow-hidden transition-colors duration-200"
      style={{
        background: isOpen ? 'rgba(212,175,55,0.03)' : '#1c1c1c',
        border: isOpen ? '1px solid rgba(212,175,55,0.22)' : '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <button onClick={onToggle} className="w-full flex items-center justify-between p-5 text-left gap-4">
        <div className="flex items-center gap-3">
          <span className="text-xs font-black tabular-nums shrink-0"
            style={{ color: isOpen ? '#d4af37' : 'rgba(255,255,255,0.18)' }}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-white font-medium text-sm sm:text-base">{faq.q}</span>
        </div>
        <div className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors"
          style={{ background: isOpen ? 'rgba(212,175,55,0.15)' : 'rgba(255,255,255,0.05)' }}>
          {isOpen
            ? <Minus size={13} style={{ color: '#d4af37' }} />
            : <Plus size={13} style={{ color: 'rgba(255,255,255,0.45)' }} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 pl-5 sm:pl-14 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <section id="faq" className="py-14 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest uppercase"
            style={{ border: '1px solid rgba(212,175,55,0.3)', background: 'rgba(212,175,55,0.05)', color: '#d4af37' }}>
            FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-3">
            Vos questions,
            <span style={{ background: 'linear-gradient(90deg, #d4af37, #fef08a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}> nos réponses.</span>
          </h2>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.58)' }}>
            Une question sans réponse ? Contactez-nous sur <a href="https://t.me/justonetrader_1" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: '#d4af37' }}>Telegram</a>.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <FaqItem
                faq={faq}
                index={i}
                isOpen={openIdx === i}
                onToggle={() => setOpenIdx(openIdx === i ? null : i)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
