'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  /*{ label: 'Packages', href: '#packages' },*/
  /*{ label: 'Portfolio', href: '#portfolio' },*/
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const menuLinksRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!overlayRef.current || !menuLinksRef.current) return

    if (menuOpen) {
      document.body.style.overflow = 'hidden'
      gsap.to(overlayRef.current, {
        opacity: 1, pointerEvents: 'all',
        duration: 0.35, ease: 'power2.out'
      })
      gsap.fromTo(
        menuLinksRef.current.querySelectorAll('.menu-link'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.07, ease: 'power3.out', delay: 0.1 }
      )
    } else {
      document.body.style.overflow = ''
      gsap.to(overlayRef.current, {
        opacity: 0, pointerEvents: 'none',
        duration: 0.3, ease: 'power2.in'
      })
    }
  }, [menuOpen])

  const handleLinkClick = (href: string) => {
    setMenuOpen(false)
    setTimeout(() => {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 350)
  }

  return (
    <>
      <nav
        ref={navRef}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 1000,
          padding: scrolled ? '14px 32px' : '22px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'all 0.4s ease',
          background: scrolled
            ? 'rgba(5,5,8,0.92)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(201,168,76,0.15)'
            : '1px solid transparent',
        }}
      >
        {/* Logo */}
        <div style={{ cursor: 'pointer' }} onClick={() => handleLinkClick('#home')}>
          <span style={{
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: 'clamp(26px, 4vw, 34px)',
  fontWeight: 700,
  fontStyle: 'italic',
  lineHeight: 1,
  paddingBottom: '2px',
  display: 'inline-block',
  background: 'linear-gradient(135deg, #C9A84C, #FFD700, #C9A84C)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  filter: 'drop-shadow(0 0 8px rgba(201,168,76,0.4))',
}}>
  VJ
</span>
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(10px, 1.5vw, 12px)',
            fontWeight: 400,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#8B8B9E',
            marginLeft: '8px',
          }}>
            Dropshipping
          </span>
        </div>

        {/* Desktop Links */}
        <div
          className="hidden md:flex items-center gap-8"
          style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}
        >
          {links.map(link => (
            <button
              key={link.label}
              onClick={() => handleLinkClick(link.href)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: "'Inter', sans-serif",
                fontSize: '13px', fontWeight: 400,
                letterSpacing: '0.08em',
                color: '#8B8B9E',
                textTransform: 'uppercase',
                transition: 'color 0.3s ease',
                padding: '4px 0',
                position: 'relative',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.color = '#C9A84C'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.color = '#8B8B9E'
              }}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA 
        < button
          className="hidden md:block"
          onClick={() => window.open('https://wa.me/91XXXXXXXXXX', '_blank')}
          style={{
            padding: '10px 24px',
            borderRadius: '3px',
            border: '1px solid rgba(201,168,76,0.5)',
            background: 'transparent',
            color: '#C9A84C',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={e => {
            const el = e.currentTarget
            el.style.background = 'rgba(201,168,76,0.1)'
            el.style.borderColor = '#C9A84C'
          }}
          onMouseLeave={e => {
            const el = e.currentTarget
            el.style.background = 'transparent'
            el.style.borderColor = 'rgba(201,168,76,0.5)'
          }}
        >
          Get Started
        </button> */}

        {/* Hamburger — mobile only */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(prev => !prev)}
          style={{
            background: 'none', border: 'none',
            cursor: 'pointer', padding: '4px',
            display: 'flex', flexDirection: 'column',
            gap: '5px', zIndex: 1100,
          }}
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              style={{
                display: 'block',
                width: menuOpen
                  ? i === 1 ? '0px' : '24px'
                  : '24px',
                height: '1.5px',
                background: '#C9A84C',
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                transform: menuOpen
                  ? i === 0 ? 'rotate(45deg) translate(4px, 4px)'
                  : i === 2 ? 'rotate(-45deg) translate(4px, -4px)'
                  : 'none'
                  : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile fullscreen overlay */}
      <div
        ref={overlayRef}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 999,
          opacity: 0,
          pointerEvents: 'none',
          background: 'rgba(5,5,8,0.97)',
          backdropFilter: 'blur(20px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
        }}
      >
        {/* Subtle gold orb in overlay */}
        <div style={{
          position: 'absolute',
          width: '300px', height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }} />

        <div ref={menuLinksRef} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          {links.map(link => (
            <button
              key={link.label}
              className="menu-link"
              onClick={() => handleLinkClick(link.href)}
              style={{
                background: 'none', border: 'none',
                cursor: 'pointer',
                fontFamily: "'Dancing Script', cursive",
                fontSize: 'clamp(36px, 10vw, 52px)',
                fontStyle: 'italic',
                fontWeight: 700,
                color: '#F0EDE8',
                letterSpacing: '0.02em',
                transition: 'color 0.3s ease',
                padding: '6px 20px',
                opacity: 0,
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#C9A84C')}
              onMouseLeave={e => (e.currentTarget.style.color = '#F0EDE8')}
            >
              {link.label}
            </button>
          ))}

          {/* WhatsApp CTA inside menu */}
          <button
            onClick={() => window.open('https://wa.me/91XXXXXXXXXX', '_blank')}
            style={{
              marginTop: '24px',
              padding: '14px 40px',
              borderRadius: '3px',
              border: '1px solid rgba(201,168,76,0.4)',
              background: 'rgba(201,168,76,0.08)',
              color: '#C9A84C',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              cursor: 'pointer',
            }}
          >
            Get Started →
          </button>
        </div>
      </div>
    </>
  )
}