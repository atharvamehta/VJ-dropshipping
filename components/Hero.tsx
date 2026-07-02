'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const vjRef = useRef<HTMLDivElement>(null)
  const [taglineIndex, setTaglineIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  const taglines = [
    "We Don't Just Build Stores. We Build Empires.",
    "₹0 to ₹1 Crore — We Know The Road.",
    "Your Store. Our Strategy. Real Results.",
    "From Products to Profit — We Handle It All.",
  ]

  useEffect(() => {
    const current = taglines[taglineIndex]
    let timeout: NodeJS.Timeout
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 45)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 22)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setTaglineIndex(prev => (prev + 1) % taglines.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, taglineIndex])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let animId: number
    let w = canvas.width = window.innerWidth
    let h = canvas.height = window.innerHeight

    const colors = ['#C9A84C', '#FFD700', '#7B3FE4', '#FF6B35', '#ffffff']
    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      size: Math.random() * 2.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.6 + 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
    }))

    let mouseX = w / 2
    let mouseY = h / 2

    const onMouseMove = (e: MouseEvent) => { mouseX = e.clientX; mouseY = e.clientY }
    window.addEventListener('mousemove', onMouseMove)

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      const grad = ctx.createRadialGradient(mouseX * 0.3 + w * 0.2, mouseY * 0.3 + h * 0.1, 0, w / 2, h / 2, w * 0.9)
      grad.addColorStop(0, 'rgba(123,63,228,0.08)')
      grad.addColorStop(0.5, 'rgba(201,168,76,0.04)')
      grad.addColorStop(1, 'rgba(5,5,8,0)')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, w, h)

      particles.forEach(p => {
        p.x += p.speedX; p.y += p.speedY
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.opacity
        ctx.shadowBlur = 8
        ctx.shadowColor = p.color
        ctx.fill()
        ctx.globalAlpha = 1
        ctx.shadowBlur = 0
      })
      animId = requestAnimationFrame(draw)
    }
    draw()

    const onResize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)

    gsap.fromTo(vjRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.2 }
    )

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <section
     id="home"
      className="relative w-full flex flex-col items-center justify-center overflow-hidden"
      style={{ minHeight: '100vh', background: '#050508' , overflowX: 'hidden' , overflowY: 'visible' , }}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }} />

      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 15% 40%, rgba(123,63,228,0.15) 0%, transparent 55%)', zIndex: 1 }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 85% 60%, rgba(201,168,76,0.10) 0%, transparent 55%)', zIndex: 1 }} />

      {/* Main content */}
      <div
        ref={vjRef}
        style={{ zIndex: 2, opacity: 0, width: '100%', maxWidth: '900px', padding: '100px 20px 80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' , overflow: 'visible' }}
      >
        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          marginBottom: '32px', padding: '8px 20px', borderRadius: '100px',
          border: '1px solid rgba(201,168,76,0.3)',
          background: 'rgba(201,168,76,0.06)',
          backdropFilter: 'blur(10px)',
        }}>
          <div style={{
            width: 7, height: 7, borderRadius: '50%',
            background: '#C9A84C', boxShadow: '0 0 8px #C9A84C',
            animation: 'pulse 2s ease-in-out infinite',
          }} />
          <span style={{ color: '#C9A84C', fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 500 }}>
            Premium Dropshipping Agency
          </span>
        </div>

        {/* VJ text — clipped so J stays in frame */}
        {/* VJ text — fully visible */}
<div style={{
  position: 'relative',
  marginBottom: '4px',
  padding: '0 16px 30px 16px',
  overflow: 'visible',
  lineHeight: 1,
}}>
  <h1 style={{
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: 'clamp(110px, 24vw, 220px)',
  fontWeight: 700,
  fontStyle: 'italic',
  lineHeight: 0.85,
  margin: '0',
  padding: '20px 10px 40px 10px',
  background: 'linear-gradient(135deg, #8B6914 0%, #C9A84C 25%, #FFD700 50%, #C9A84C 75%, #8B6914 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  filter: 'drop-shadow(0 0 35px rgba(201,168,76,0.55))',
  display: 'block',
  overflow: 'visible',
}}>
  VJ
</h1>
  <div style={{
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(ellipse, rgba(201,168,76,0.18) 0%, transparent 70%)',
    filter: 'blur(25px)',
    zIndex: -1,
    pointerEvents: 'none',
  }} />
</div>

        {/* DROPSHIPPING */}
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 'clamp(12px, 3vw, 22px)',
          fontWeight: 300,
          letterSpacing: 'clamp(0.25em, 2vw, 0.75em)',
          color: '#F0EDE8',
          textTransform: 'uppercase',
          marginBottom: '20px',
          opacity: 0.85,
          paddingLeft: 'clamp(0.25em, 2vw, 0.75em)',
        }}>
          Dropshipping
        </p>

        {/* Divider */}
        <div style={{
          width: 'clamp(50px, 12vw, 100px)', height: '1px',
          background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
          marginBottom: '24px',
        }} />

        {/* Typewriter */}
        <div style={{ minHeight: 'clamp(40px, 7vw, 60px)', maxWidth: '640px', marginBottom: '36px', padding: '0 8px' }}>
          <span style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: 'clamp(17px, 3.2vw, 26px)',
            fontStyle: 'italic',
            background: 'linear-gradient(90deg, #F0EDE8, #C9A84C, #F0EDE8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontWeight: 600,
          }}>
            {displayed}
          </span>
          <span style={{
            display: 'inline-block', width: '2px',
            height: 'clamp(16px, 2.8vw, 24px)',
            background: '#C9A84C', marginLeft: '3px',
            verticalAlign: 'middle',
            animation: 'blink 0.8s step-end infinite',
          }} />
        </div>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', marginBottom: '40px' }}>
          <button
            onClick={() => window.open('https://wa.me/919203308903', '_blank')}
             style={{
              padding: 'clamp(12px,2vw,16px) clamp(24px,4vw,40px)',
              borderRadius: '3px', border: 'none', cursor: 'pointer',
              fontSize: 'clamp(12px,1.5vw,14px)', fontWeight: 700,
              letterSpacing: '0.10em', textTransform: 'uppercase',
              color: '#050508',
              background: 'linear-gradient(135deg, #C9A84C, #FFD700, #C9A84C)',
              boxShadow: '0 0 25px rgba(201,168,76,0.4), inset 0 1px 0 rgba(255,255,255,0.2)',
              transition: 'all 0.3s ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => { const el = e.currentTarget; el.style.boxShadow = '0 0 50px rgba(201,168,76,0.65)'; el.style.transform = 'translateY(-3px)' }}
            onMouseLeave={e => { const el = e.currentTarget; el.style.boxShadow = '0 0 25px rgba(201,168,76,0.4)'; el.style.transform = 'translateY(0)' }}
          >
            🚀 Start Your Journey    
          </button>

        </div>

        {/* Stats */}
        <div style={{
          display: 'flex', gap: 'clamp(20px, 6vw, 60px)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '28px', flexWrap: 'wrap', justifyContent: 'center',
        }}>
          {[
            { num: '250+', label: 'Clients Served' },
            { num: '₹5Cr+', label: 'Revenue Generated' },
            { num: '4Yrs+', label: 'EXPERIENCE' },
          ].map((stat, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{
                fontSize: 'clamp(22px, 4.5vw, 30px)', fontWeight: 700,
                background: 'linear-gradient(135deg, #C9A84C, #FFD700)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>{stat.num}</span>
              <span style={{
                fontSize: 'clamp(9px, 1.5vw, 11px)', color: '#8B8B9E',
                letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '4px',
              }}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 flex flex-col items-center gap-2" style={{ zIndex: 2 }}>
        <span style={{ color: '#8B8B9E', fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase' }}></span>
        <div style={{
          width: '1px', height: '45px',
          background: 'linear-gradient(to bottom, #C9A84C, transparent)',
          animation: 'scrollPulse 2s ease-in-out infinite',
        }} />
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes scrollPulse { 0%,100%{opacity:0.2;transform:scaleY(0.8)} 50%{opacity:1;transform:scaleY(1)} }
        @keyframes pulse { 0%,100%{opacity:1;box-shadow:0 0 8px #C9A84C} 50%{opacity:0.5;box-shadow:0 0 4px #C9A84C} }
        @media (max-width: 480px) {
          .stat-row { gap: 20px !important; }
        }
      `}</style>
    </section>
  )
}