'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const milestones = [
  {
    year: '2020',
    title: 'The Beginning',
    desc: 'Started exploring e-commerce with ₹5,000 and a burning desire to be independent. Failed fast, learned faster.',
  },
  {
    year: '2021',
    title: 'First Win',
    desc: 'Launched first dropshipping store. Hit ₹2L/month within 90 days. Proof that the model works.',
  },
  {
    year: '2022',
    title: 'Going Deeper',
    desc: 'Mastered Meta Ads and product research. Scaled multiple stores consistently past ₹20L/month.',
  },
  {
    year: '2023',
    title: 'Helping Others',
    desc: 'Friends started asking for guidance. Vaibhav realised his knowledge could change other lives too.',
  },
  {
    year: '2024',
    title: 'Building The Agency',
    desc: '50+ clients across 3 countries. ₹2Cr+ in revenue generated for others. The agency vision became real.',
  },
  {
    year: '2025',
    title: 'VJ Dropshipping Born',
    desc: 'Official launch with one clear mission — help anyone with ambition build a profitable online business.',
  },
]

const agenda = [
  {
    icon: '🎯',
    title: 'Our Mission',
    desc: 'To make dropshipping accessible, profitable and sustainable for every ambitious individual in India — regardless of background or budget.',
    color: '#C9A84C',
  },
  {
    icon: '🔭',
    title: 'Our Vision',
    desc: 'A world where anyone with a phone and a plan can build a thriving online brand — and VJ Dropshipping is the partner that gets them there.',
    color: '#7B3FE4',
  },
  {
    icon: '⚡',
    title: 'Why VJ Dropshipping',
    desc: 'We don\'t just give advice — we build alongside you. Real experience, real results, real accountability. No fluff, no false promises.',
    color: '#FF6B35',
  },
]

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Intro animation
      gsap.fromTo('.about-intro',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-intro',
            start: 'top 80%',
          }
        }
      )

      // Timeline progress line grows with scroll
      gsap.to(progressRef.current, {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 60%',
          end: 'bottom 60%',
          scrub: 0.5,
        }
      })

      // Each milestone animates in/out with scroll
      itemsRef.current.forEach((item, i) => {
        if (!item) return
        const isLeft = i % 2 === 0

        // Animate in
        gsap.fromTo(item,
          {
            opacity: 0,
            x: isLeft ? -50 : 50,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 75%',
              end: 'top 40%',
              scrub: 0.8,
            }
          }
        )
      })

      // Agenda cards
      gsap.fromTo('.agenda-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.agenda-section',
            start: 'top 75%',
          }
        }
      )

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      style={{
        background: '#050508',
        padding: 'clamp(60px, 10vw, 100px) 0 0',
        overflow: 'hidden',
      }}
    >
      {/* ── PART 1 — WHO IS VAIBHAV ── */}
      <div
        className="about-intro"
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '0 clamp(20px, 5vw, 40px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'clamp(32px, 6vw, 64px)',
          alignItems: 'center',
          opacity: 0,
          marginBottom: 'clamp(60px, 10vw, 100px)',
        }}
      >
        {/* Photo placeholder */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{
            width: 'clamp(200px, 35vw, 280px)',
            height: 'clamp(240px, 42vw, 340px)',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, rgba(201,168,76,0.08), rgba(123,63,228,0.08))',
            border: '1px solid rgba(201,168,76,0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,168,76,0.1)',
            animation: 'float 4s ease-in-out infinite',
          }}>
            <span style={{ fontSize: '64px', opacity: 0.4 }}>👤</span>
            {/* Corner accents */}
            {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((pos) => (
              <div key={pos} style={{
                position: 'absolute',
                width: '20px', height: '20px',
                borderColor: '#C9A84C',
                borderStyle: 'solid',
                opacity: 0.6,
                top: pos.includes('top') ? '-1px' : 'auto',
                bottom: pos.includes('bottom') ? '-1px' : 'auto',
                left: pos.includes('left') ? '-1px' : 'auto',
                right: pos.includes('right') ? '-1px' : 'auto',
                borderWidth: pos.includes('top')
                  ? pos.includes('left') ? '2px 0 0 2px' : '2px 2px 0 0'
                  : pos.includes('left') ? '0 0 2px 2px' : '0 2px 2px 0',
              }} />
            ))}
          </div>
        </div>

        {/* Text */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <p style={{
            fontSize: '11px',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: '#C9A84C',
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500,
          }}>
            The Man Behind The Empire
          </p>

          <h2 style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: 'clamp(36px, 7vw, 58px)',
            fontWeight: 700,
            fontStyle: 'italic',
            background: 'linear-gradient(135deg, #F0EDE8, #C9A84C)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: 1.1,
          }}>
            Vaibhav Jain
          </h2>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(13px, 2vw, 15px)',
            color: '#8B8B9E',
            lineHeight: 1.8,
            fontWeight: 300,
            maxWidth: '420px',
          }}>
            From a small town with big dreams, Vaibhav turned a laptop and ₹5,000 into a thriving dropshipping empire. Today he helps others skip the mistakes and fast-track their way to financial freedom.
          </p>

          {/* Stat pills */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '8px' }}>
            {[
              { num: '50+', label: 'Clients' },
              { num: '₹2Cr+', label: 'Generated' },
              { num: '5+', label: 'Years Exp.' },
            ].map((stat, i) => (
              <div key={i} style={{
                padding: '10px 20px',
                borderRadius: '100px',
                border: '1px solid rgba(201,168,76,0.25)',
                background: 'rgba(201,168,76,0.05)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(16px, 3vw, 20px)',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #C9A84C, #FFD700)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  {stat.num}
                </span>
                <span style={{
                  fontSize: '10px',
                  color: '#8B8B9E',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PART 2 — TIMELINE ── */}
      <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 60px)', padding: '0 24px' }}>
        <p style={{
          fontSize: '11px',
          letterSpacing: '0.4em',
          textTransform: 'uppercase',
          color: '#C9A84C',
          fontFamily: "'Inter', sans-serif",
          marginBottom: '12px',
        }}>
          The Journey
        </p>
        <h2 style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: 'clamp(32px, 6vw, 54px)',
          fontWeight: 700,
          fontStyle: 'italic',
          background: 'linear-gradient(135deg, #F0EDE8, #C9A84C, #F0EDE8)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          lineHeight: 1.1,
        }}>
          From Zero to Empire
        </h2>
      </div>

      <div
        ref={timelineRef}
        style={{
          position: 'relative',
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0 clamp(20px, 5vw, 40px) clamp(60px, 10vw, 100px)',
        }}
      >
        {/* Center vertical line — background */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: 0, bottom: 0,
          width: '1px',
          background: 'rgba(255,255,255,0.06)',
          transform: 'translateX(-50%)',
        }} />

        {/* Progress line — grows on scroll */}
        <div
          ref={progressRef}
          style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            width: '1px',
            height: '100%',
            background: 'linear-gradient(to bottom, #C9A84C, #7B3FE4)',
            transform: 'translateX(-50%) scaleY(0)',
            transformOrigin: 'top',
            boxShadow: '0 0 8px rgba(201,168,76,0.4)',
          }}
        />

        {/* Milestones */}
        {milestones.map((m, i) => {
          const isLeft = i % 2 === 0
          return (
            <div
              key={i}
              ref={el => { itemsRef.current[i] = el }}
              style={{
                display: 'flex',
                justifyContent: isLeft ? 'flex-start' : 'flex-end',
                marginBottom: 'clamp(32px, 6vw, 56px)',
                position: 'relative',
                opacity: 0,
              }}
            >
              {/* Card */}
              <div style={{
                width: 'calc(50% - 32px)',
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(201,168,76,0.15)',
                borderRadius: '10px',
                padding: 'clamp(16px, 3vw, 24px)',
                backdropFilter: 'blur(10px)',
                position: 'relative',
              }}>
                {/* Year badge */}
                <div style={{
                  display: 'inline-flex',
                  padding: '4px 12px',
                  borderRadius: '100px',
                  background: 'rgba(201,168,76,0.1)',
                  border: '1px solid rgba(201,168,76,0.3)',
                  marginBottom: '10px',
                }}>
                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '11px',
                    fontWeight: 700,
                    color: '#C9A84C',
                    letterSpacing: '0.1em',
                  }}>
                    {m.year}
                  </span>
                </div>

                <h4 style={{
                  fontFamily: "'Dancing Script', cursive",
                  fontSize: 'clamp(18px, 3vw, 24px)',
                  fontStyle: 'italic',
                  fontWeight: 700,
                  color: '#F0EDE8',
                  marginBottom: '8px',
                }}>
                  {m.title}
                </h4>

                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(11px, 1.8vw, 13px)',
                  color: '#8B8B9E',
                  lineHeight: 1.7,
                  fontWeight: 300,
                }}>
                  {m.desc}
                </p>

                {/* Connector dot */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  [isLeft ? 'right' : 'left']: '-40px',
                  transform: 'translateY(-50%)',
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: '#C9A84C',
                  boxShadow: '0 0 12px rgba(201,168,76,0.6)',
                }} />

                {/* Connector line */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  [isLeft ? 'right' : 'left']: '-32px',
                  width: '24px',
                  height: '1px',
                  background: 'rgba(201,168,76,0.4)',
                  transform: 'translateY(-50%)',
                }} />
              </div>
            </div>
          )
        })}
      </div>

      {/* ── PART 3 — AGENDA ── */}
      <div
        className="agenda-section"
        style={{
          background: 'rgba(255,255,255,0.015)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          padding: 'clamp(60px, 10vw, 100px) clamp(20px, 5vw, 40px)',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 60px)' }}>
          <p style={{
            fontSize: '11px',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: '#C9A84C',
            fontFamily: "'Inter', sans-serif",
            marginBottom: '12px',
          }}>
            What We Stand For
          </p>
          <h2 style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: 'clamp(32px, 6vw, 54px)',
            fontWeight: 700,
            fontStyle: 'italic',
            background: 'linear-gradient(135deg, #F0EDE8, #C9A84C, #F0EDE8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            The VJ Dropshipping Agenda
          </h2>
        </div>

        {/* Agenda cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 'clamp(16px, 3vw, 24px)',
          maxWidth: '900px',
          margin: '0 auto',
        }}>
          {agenda.map((item, i) => (
            <div
              key={i}
              className="agenda-card"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: `1px solid rgba(${
                  item.color === '#C9A84C' ? '201,168,76' :
                  item.color === '#7B3FE4' ? '123,63,228' :
                  '255,107,53'
                }, 0.15)`,
                borderRadius: '12px',
                padding: 'clamp(24px, 4vw, 36px)',
                opacity: 0,
                position: 'relative',
                overflow: 'hidden',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.borderColor = item.color
                el.style.boxShadow = `0 20px 40px rgba(0,0,0,0.3)`
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.borderColor = `rgba(${
                  item.color === '#C9A84C' ? '201,168,76' :
                  item.color === '#7B3FE4' ? '123,63,228' :
                  '255,107,53'
                }, 0.15)`
                el.style.boxShadow = 'none'
              }}
            >
              {/* Top accent */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0,
                height: '2px',
                background: `linear-gradient(90deg, transparent, ${item.color}, transparent)`,
              }} />

              <span style={{ fontSize: '32px', marginBottom: '16px', display: 'block' }}>
                {item.icon}
              </span>

              <h3 style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(15px, 2.5vw, 18px)',
                fontWeight: 600,
                color: item.color,
                marginBottom: '12px',
                letterSpacing: '0.02em',
              }}>
                {item.title}
              </h3>

              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(12px, 1.8vw, 14px)',
                color: '#8B8B9E',
                lineHeight: 1.7,
                fontWeight: 300,
              }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  )
}