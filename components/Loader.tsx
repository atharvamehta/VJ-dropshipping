'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export default function Loader({ onComplete }: { onComplete?: () => void }) {
  const loaderRef = useRef<HTMLDivElement>(null)
  const vjRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)
  const [hide, setHide] = useState(false)

  useEffect(() => {
    const vjEl = vjRef.current
    if (!vjEl) return

    const text = 'VJ'
    vjEl.innerHTML = ''

    // Create letter spans for VJ
    text.split('').forEach((char) => {
      const span = document.createElement('span')
      span.textContent = char
      span.style.cssText = `
        opacity: 0;
        display: inline-block;
        color: transparent;
        background: linear-gradient(135deg, #8B6914, #C9A84C, #FFD700, #C9A84C, #8B6914);
        -webkit-background-clip: text;
        background-clip: text;
        filter: drop-shadow(0 0 12px rgba(201,168,76,0.6));
        transform: translateY(20px);
      `
      vjEl.appendChild(span)
    })

    const spans = vjEl.querySelectorAll('span')
    const tl = gsap.timeline()

    // Animate VJ letters
    spans.forEach((span, i) => {
      tl.to(span, {
        opacity: 1,
        y: 0,
        duration: 0.25,
        ease: 'power3.out',
        onStart: () => spawnParticles(span as HTMLElement),
      }, i * 0.2)
    })

    // Glow pulse on VJ
    tl.to(vjEl, {
      filter: 'drop-shadow(0 0 30px rgba(201,168,76,0.8)) drop-shadow(0 0 60px rgba(201,168,76,0.4))',
      duration: 0.4,
      ease: 'power2.inOut',
    })

    tl.to(vjEl, {
      filter: 'drop-shadow(0 0 10px rgba(201,168,76,0.4))',
      duration: 0.3,
    })

    // Fade in Dropshipping
    tl.to('#loader-dropshipping', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power3.out',
    }, '-=0.2')

    // Fade in subtitle
    tl.to('#loader-subtitle', {
      opacity: 1,
      duration: 0.4,
      ease: 'power2.out',
    }, '-=0.2')

    // Fade out entire loader
    tl.to(loaderRef.current, {
      opacity: 0,
      duration: 0.7,
      ease: 'power2.inOut',
      onComplete: () => {
        setHide(true)
        onComplete?.()
      },
    }, '+=0.6')

  }, [onComplete])

  function spawnParticles(element: HTMLElement) {
    if (!particlesRef.current) return
    const rect = element.getBoundingClientRect()
    const containerRect = particlesRef.current.getBoundingClientRect()

    for (let i = 0; i < 6; i++) {
      const particle = document.createElement('div')
      const size = Math.random() * 5 + 2
      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: ${Math.random() > 0.5 ? '#C9A84C' : '#FFD700'};
        border-radius: 50%;
        left: ${rect.left - containerRect.left + rect.width / 2}px;
        top: ${rect.top - containerRect.top + rect.height / 2}px;
        pointer-events: none;
        box-shadow: 0 0 ${size * 2}px #C9A84C;
        z-index: 10;
      `
      particlesRef.current.appendChild(particle)

      gsap.to(particle, {
        x: (Math.random() - 0.5) * 100,
        y: (Math.random() - 0.5) * 100,
        opacity: 0,
        duration: Math.random() * 1 + 0.5,
        ease: 'power2.out',
        onComplete: () => particle.remove(),
      })
    }
  }

  if (hide) return null

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: '#050508' }}
    >
      {/* Particles layer */}
      <div
        ref={particlesRef}
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ zIndex: 0 }}
      />

      {/* Content — perfectly centered */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        zIndex: 5,
        overflow: 'visible',
        gap: '0px',
      }}>

        {/* VJ — Cormorant Garamond */}
        <div
          ref={vjRef}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(72px, 16vw, 130px)',
            fontWeight: 700,
            fontStyle: 'italic',
            lineHeight: 1,
            letterSpacing: '6px',
            display: 'block',
            overflow: 'visible',
            padding: '10px 20px 30px 20px',
            textAlign: 'center',
            minWidth: '200px',
          }}
        />

        {/* Dropshipping — Dancing Script */}
        <div
          id="loader-dropshipping"
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: 'clamp(24px, 5.5vw, 46px)',
            fontWeight: 700,
            fontStyle: 'italic',
            letterSpacing: '3px',
            background: 'linear-gradient(135deg, #C9A84C, #FFD700, #C9A84C)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            opacity: 0,
            transform: 'translateY(10px)',
            marginTop: '-16px',
            paddingBottom: '12px',
            overflow: 'visible',
            textAlign: 'center',
            display: 'block',
            filter: 'drop-shadow(0 0 8px rgba(201,168,76,0.4))',
          }}
        >
          Dropshipping
        </div>

        {/* Subtle tagline */}
        <div
          id="loader-subtitle"
          style={{
            marginTop: '20px',
            opacity: 0,
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div style={{
            width: '30px', height: '1px',
            background: 'linear-gradient(90deg, transparent, #C9A84C)',
          }} />
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '10px',
            letterSpacing: '0.45em',
            textTransform: 'uppercase',
            color: '#8B8B9E',
            margin: 0,
          }}>
            Building Empires
          </p>
          <div style={{
            width: '30px', height: '1px',
            background: 'linear-gradient(90deg, #C9A84C, transparent)',
          }} />
        </div>
      </div>

      {/* Bottom loading bar */}
      <div style={{
        position: 'absolute',
        bottom: '48px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '120px',
        height: '1px',
        background: 'rgba(255,255,255,0.06)',
        overflow: 'hidden',
        borderRadius: '1px',
      }}>
        <div style={{
          height: '100%',
          background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
          animation: 'loadBar 2.8s ease-in-out forwards',
        }} />
      </div>

      <style>{`
        @keyframes loadBar {
          0% { transform: translateX(-100%); width: 100%; }
          100% { transform: translateX(100%); width: 100%; }
        }
      `}</style>
    </div>
  )
}