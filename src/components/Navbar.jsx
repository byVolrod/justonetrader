import { useState, useEffect, useRef } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'

const links = [
  { label: 'Communauté', href: '#communaute', id: 'communaute' },
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Parcours', href: '#parcours', id: 'parcours' },
  { label: 'Tarifs', href: '#tarifs', id: 'tarifs' },
  { label: 'Avis', href: '#temoignages', id: 'temoignages' },
  { label: 'FAQ', href: '#faq', id: 'faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [showStickyCta, setShowStickyCta] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const menuRef = useRef(null)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.scrollY
          setScrolled(y > 50)
          setShowStickyCta(y > 650)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -60% 0px' }
    )
    document.querySelectorAll('section[id]').forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return
    const onClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [open])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <nav
      ref={menuRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: 'rgba(20,20,20,0.95)',
        backdropFilter: 'blur(24px)',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-[72px]">
          <a href="#" className="flex items-center group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="JustOneTrader - Retour en haut">
            <img src="/logo-1.png" alt="JustOneTrader" className="h-10 sm:h-12 w-auto object-contain" style={{ mixBlendMode: 'screen', filter: 'contrast(8) brightness(1.6) sepia(0.4) saturate(1.8)' }} />
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {links.map(link => {
              const isActive = active === link.id
              return (
                <a key={link.href} href={link.href}
                  className="relative px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200"
                  style={{ color: isActive ? 'white' : 'rgba(255,255,255,0.45)' }}
                  onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = 'rgba(255,255,255,0.85)' }}
                  onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = 'rgba(255,255,255,0.45)' }}
                >
                  {link.label}
                  {isActive && <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full" style={{ background: '#d4af37' }} />}
                </a>
              )
            })}
          </div>

          <div className="hidden md:block">
            <a href="https://whop.com/justonetrader" target="_blank" rel="noopener noreferrer"
              className="font-bold px-6 py-2.5 rounded-full text-sm transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #d4af37, #e8c94a)', color: '#0a0a0f', boxShadow: '0 0 20px rgba(212,175,55,0.25)' }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 40px rgba(212,175,55,0.5)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 0 20px rgba(212,175,55,0.25)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Rejoindre
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white p-2"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Sticky bottom CTA — appears after scrolling past hero */}
      <div
        className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-center gap-4 px-4 py-3 sm:hidden transition-all duration-500"
        style={{
          background: 'rgba(14,14,14,0.97)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(212,175,55,0.15)',
          transform: showStickyCta ? 'translateY(0)' : 'translateY(100%)',
          opacity: showStickyCta ? 1 : 0,
          pointerEvents: showStickyCta ? 'auto' : 'none',
        }}
      >
        <a
          href="https://whop.com/justonetrader"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 max-w-xs flex items-center justify-center gap-2 font-bold py-3 rounded-xl text-sm"
          style={{ background: 'linear-gradient(135deg, #d4af37, #e8c94a)', color: '#0a0a0f' }}
        >
          Commencer gratuitement
          <ArrowRight size={15} />
        </a>
      </div>

{open && (
        <div style={{ background: 'rgba(20,20,20,0.97)', backdropFilter: 'blur(24px)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="px-4 py-5 space-y-1">
            {links.map(link => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium"
                style={{ color: active === link.id ? 'white' : 'rgba(255,255,255,0.5)', background: active === link.id ? 'rgba(255,255,255,0.04)' : 'transparent' }}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3">
              <a href="https://whop.com/justonetrader" target="_blank" rel="noopener noreferrer"
                className="block text-center font-bold py-3 rounded-full text-sm"
                style={{ background: 'linear-gradient(135deg, #d4af37, #e8c94a)', color: '#0a0a0f' }}>
                Rejoindre
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
