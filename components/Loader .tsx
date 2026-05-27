'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export default function Loader({ onComplete }: { onComplete?: () => void }) {
  const loaderRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)
  const [hide, setHide] = useState(false)

  useEffect(() => {
    const text = 'VJ Dropshipping'
    const container = textRef.current
    if (!container) return

    container.innerHTML = ''

    // Create individual letter spans
    text.split('').forEach((char, i) => {
      const span = document.createElement('span')
      span.textContent = char === ' ' ? '\u00A0' : char
      span.style.cssText = `
        opacity: 0;
        display: inline-block;
        color: transparent;
        background: linear-gradient(135deg, #C9A84C, #FFD700, #C9A84C);
        -webkit-background-clip: text;
        background-clip: text;
        filter: drop-shadow(0 0 8px #C9A84C);
        transform: translateY(20px);
      `
      container.appendChild(span)
    })

    const spans = container.querySelectorAll('span')
    const tl = gsap.timeline()

    // Animate each letter appearing one by one
    spans.forEach((span, i) => {
      tl.to(span, {
        opacity: 1,
        y: 0,
        duration: 0.12,
        ease: 'power2.out',
        onStart: () => spawnParticles(span as HTMLElement),
      }, i * 0.1)
    })

    // Glow pulse
    tl.to(container, {
      filter: 'drop-shadow(0 0 20px #C9A84C) drop-shadow(0 0 50px #C9A84C)',
      duration: 0.5,
      ease: 'power2.inOut',
    })

    tl.to(container, {
      filter: 'drop-shadow(0 0 8px #C9A84C)',
      duration: 0.4,
    })

    // Fade out loader
    tl.to(loaderRef.current, {
      opacity: 0,
      duration: 0.7,
      ease: 'power2.inOut',
      onComplete: () => {
        setHide(true)
        onComplete?.()
      },
    }, '+=0.4')

  }, [onComplete])

  function spawnParticles(element: HTMLElement) {
    if (!particlesRef.current) return
    const rect = element.getBoundingClientRect()
    const containerRect = particlesRef.current.getBoundingClientRect()

    for (let i = 0; i < 5; i++) {
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
        x: (Math.random() - 0.5) * 80,
        y: (Math.random() - 0.5) * 80,
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
      {/* Particles container */}
      <div
        ref={particlesRef}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      />

      {/* Main text */}
      <div
        ref={textRef}
        style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: 'clamp(42px, 10vw, 88px)',
          fontWeight: '700',
          fontStyle: 'italic',
          letterSpacing: '2px',
          position: 'relative',
          zIndex: 5,
        }}
      />

      {/* Subtitle */}
      <p
        className="mt-6 tracking-[0.5em] uppercase text-xs"
        style={{ color: '#8B8B9E' }}
      >
        Building Empires
      </p>

      {/* Bottom loading bar */}
      <div
        className="absolute bottom-12 w-48 h-[1px] overflow-hidden"
        style={{ background: '#1a1a2e' }}
      >
        <div
          className="h-full"
          style={{
            background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
            animation: 'loadBar 2.5s ease-in-out forwards',
            width: '100%',
            transform: 'translateX(-100%)',
          }}
        />
      </div>

      <style>{`
        @keyframes loadBar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  )
}