'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const services = [
  {
    icon: '🏪',
    title: 'Store Setup & Design',
    desc: 'Conversion-optimised Shopify stores built from scratch. Every pixel designed to sell.',
    tilt: -4,
  },
  {
    icon: '🔍',
    title: 'Product Research',
    desc: 'Data-driven winning products before they go viral. We find gold before the rush.',
    tilt: 3,
  },
  {
    icon: '📢',
    title: 'Meta Ads Management',
    desc: 'Full-funnel Meta campaigns that scale. From ₹500/day to ₹50,000/day profitably.',
    tilt: -3,
  },
  {
    icon: '🎨',
    title: 'Ad Creatives',
    desc: 'Scroll-stopping creatives that convert cold audiences into paying customers.',
    tilt: 4,
  },
  {
    icon: '📈',
    title: 'SEO Optimization',
    desc: 'Rank organically and reduce ad dependency. Long-term traffic that compounds.',
    tilt: -4,
  },
  {
    icon: '🚀',
    title: 'Scaling Strategy',
    desc: 'Proven frameworks to scale past ₹1Cr/month without burning your budget.',
    tilt: 3,
  },
]

export default function Services() {
  const trackRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const autoScrollRef = useRef<number | null>(null)
  const isPausedRef = useRef(false)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)
  const pauseTimeout = useRef<NodeJS.Timeout | null>(null)
  const directionRef = useRef<'left' | 'right'>('left')
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  // Auto scroll logic
  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const speed = 0.7

    const autoScroll = () => {
      if (isPausedRef.current || isDragging.current) {
        autoScrollRef.current = requestAnimationFrame(autoScroll)
        return
      }

      const maxScroll = track.scrollWidth - track.clientWidth

      if (directionRef.current === 'left') {
        track.scrollLeft += speed
        if (track.scrollLeft >= maxScroll - 2) {
          directionRef.current = 'right'
        }
      } else {
        track.scrollLeft -= speed
        if (track.scrollLeft <= 2) {
          directionRef.current = 'left'
        }
      }

      autoScrollRef.current = requestAnimationFrame(autoScroll)
    }

    autoScrollRef.current = requestAnimationFrame(autoScroll)
    return () => {
      if (autoScrollRef.current) cancelAnimationFrame(autoScrollRef.current)
    }
  }, [])

  // Pause on hover/touch
  const pauseScroll = () => {
    isPausedRef.current = true
    if (pauseTimeout.current) clearTimeout(pauseTimeout.current)
  }

  const resumeScroll = () => {
    if (pauseTimeout.current) clearTimeout(pauseTimeout.current)
    pauseTimeout.current = setTimeout(() => {
      isPausedRef.current = false
    }, 2000)
  }

  // Mouse drag
  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true
    isPausedRef.current = true
    startX.current = e.pageX - (trackRef.current?.offsetLeft || 0)
    scrollLeft.current = trackRef.current?.scrollLeft || 0
  }

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return
    e.preventDefault()
    const x = e.pageX - (trackRef.current.offsetLeft || 0)
    const walk = (x - startX.current) * 1.5
    trackRef.current.scrollLeft = scrollLeft.current - walk
  }

  const onMouseUp = () => {
    isDragging.current = false
    resumeScroll()
  }

  // Entrance animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          gsap.fromTo(
            sectionRef.current,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
          )
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="services"
      ref={sectionRef}
      style={{
        background: '#050508',
        padding: 'clamp(60px, 10vw, 100px) 0',
        overflow: 'hidden',
        opacity: 0,
      }}
    >
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 64px)', padding: '0 24px' }}>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '11px',
          letterSpacing: '0.4em',
          textTransform: 'uppercase',
          color: '#C9A84C',
          marginBottom: '16px',
          fontWeight: 500,
        }}>
          What We Do
        </p>
        <h2 style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: 'clamp(36px, 7vw, 64px)',
          fontWeight: 700,
          fontStyle: 'italic',
          background: 'linear-gradient(135deg, #F0EDE8, #C9A84C, #F0EDE8)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          lineHeight: 1.1,
          marginBottom: '16px',
        }}>
          Our Services
        </h2>
        {/* Gold underline */}
        <div style={{
          width: '60px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
          margin: '0 auto',
        }} />
      </div>

      {/* Scroll hint */}
      <div style={{
        textAlign: 'center',
        marginBottom: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
      }}>
        <div style={{
          width: '20px', height: '1px',
          background: 'linear-gradient(90deg, transparent, #8B8B9E)',
        }} />
        <span style={{
          fontSize: '10px',
          color: '#8B8B9E',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
        }}>
          drag to explore
        </span>
        <div style={{
          width: '20px', height: '1px',
          background: 'linear-gradient(90deg, #8B8B9E, transparent)',
        }} />
      </div>

      {/* Horizontal scroll track */}
      <div
        ref={trackRef}
        onMouseEnter={pauseScroll}
        onMouseLeave={() => { onMouseUp(); }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onTouchStart={pauseScroll}
        onTouchEnd={resumeScroll}
        style={{
          display: 'flex',
          gap: 'clamp(16px, 3vw, 28px)',
          overflowX: 'auto',
          overflowY: 'visible',
          padding: 'clamp(40px, 6vw, 60px) clamp(24px, 6vw, 80px)',
          cursor: 'grab',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          userSelect: 'none',
          alignItems: 'center',
        }}
      >
        {services.map((service, i) => (
          <div
            key={i}
            onMouseEnter={() => { setActiveIndex(i); pauseScroll() }}
            onMouseLeave={() => { setActiveIndex(null); resumeScroll() }}
            style={{
              flexShrink: 0,
              width: 'clamp(220px, 32vw, 280px)',
              minHeight: 'clamp(240px, 35vw, 300px)',
              background: 'rgba(255,255,255,0.025)',
              border: activeIndex === i
                ? '1px solid rgba(201,168,76,0.6)'
                : '1px solid rgba(255,255,255,0.06)',
              borderRadius: '12px',
              padding: 'clamp(24px, 4vw, 36px) clamp(20px, 3vw, 28px)',
              transform: `rotate(${service.tilt}deg) translateY(${i % 2 === 0 ? '-10px' : '10px'})`,
              transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
              backdropFilter: 'blur(20px)',
              boxShadow: activeIndex === i
                ? '0 20px 60px rgba(201,168,76,0.12), 0 0 0 1px rgba(201,168,76,0.1)'
                : '0 8px 32px rgba(0,0,0,0.4)',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Subtle inner glow on hover */}
            <div style={{
              position: 'absolute',
              top: 0, left: 0, right: 0,
              height: '1px',
              background: activeIndex === i
                ? 'linear-gradient(90deg, transparent, rgba(201,168,76,0.6), transparent)'
                : 'transparent',
              transition: 'all 0.4s ease',
            }} />

            {/* Icon */}
            <div style={{
              fontSize: 'clamp(28px, 5vw, 36px)',
              lineHeight: 1,
              filter: activeIndex === i
                ? 'drop-shadow(0 0 12px rgba(201,168,76,0.5))'
                : 'none',
              transition: 'filter 0.4s ease',
            }}>
              {service.icon}
            </div>

            {/* Title */}
            <h3 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(15px, 2.5vw, 18px)',
              fontWeight: 600,
              color: activeIndex === i ? '#C9A84C' : '#F0EDE8',
              lineHeight: 1.3,
              transition: 'color 0.4s ease',
              letterSpacing: '0.02em',
            }}>
              {service.title}
            </h3>

            {/* Divider */}
            <div style={{
              width: activeIndex === i ? '40px' : '20px',
              height: '1px',
              background: '#C9A84C',
              opacity: activeIndex === i ? 0.8 : 0.3,
              transition: 'all 0.4s ease',
            }} />

            {/* Description */}
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(12px, 1.8vw, 14px)',
              color: '#8B8B9E',
              lineHeight: 1.7,
              fontWeight: 300,
            }}>
              {service.desc}
            </p>

            {/* Bottom corner accent */}
            <div style={{
              position: 'absolute',
              bottom: 0, right: 0,
              width: '60px', height: '60px',
              background: 'radial-gradient(circle at bottom right, rgba(201,168,76,0.08) 0%, transparent 70%)',
              borderRadius: '0 0 12px 0',
              opacity: activeIndex === i ? 1 : 0,
              transition: 'opacity 0.4s ease',
            }} />
          </div>
        ))}
      </div>

      {/* Hide scrollbar */}
      <style>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  )
}