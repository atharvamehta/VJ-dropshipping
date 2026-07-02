'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const serviceDetails = [
  {
    number: '01',
    icon: '🏪',
    title: 'Store Setup & Design',
    tagline: 'Your store is your first impression. We make it unforgettable.',
    bullets: [
      'Custom Shopify store built from scratch — no templates',
      'Mobile-first design, optimised for conversions',
      'Product pages engineered to reduce bounce rate',
      'Payment gateway, shipping & tax setup included',
      'Speed optimised — under 2 second load time',
      'Brand identity — logo, colours, typography all aligned',
    ],
    color: '#C9A84C',
  },
  {
    number: '02',
    icon: '🔍',
    title: 'Product Research',
    tagline: 'We find winning products before they go viral.',
    bullets: [
      'Deep market analysis across 12+ research tools',
      'Competitor reverse engineering — know what works',
      'Trend forecasting — get in before saturation',
      'Supplier vetting — quality + margins guaranteed',
      'Full product brief with pricing strategy included',
      'Ongoing research — fresh winners every month',
    ],
    color: '#7B3FE4',
  },
  {
    number: '03',
    icon: '📢',
    title: 'Meta Ads Management',
    tagline: 'Every rupee you spend — we make it work harder.',
    bullets: [
      'Full funnel campaign architecture — TOF to BOF',
      'Custom audience building + lookalike scaling',
      'Daily monitoring — no wasted spend ever',
      'A/B testing creatives, copy, audiences simultaneously',
      'Scaling framework — ₹500/day to ₹50,000/day',
      'Weekly performance reports with clear insights',
    ],
    color: '#FF6B35',
  },
  {
    number: '04',
    icon: '🎨',
    title: 'Ad Creatives',
    tagline: 'Scroll-stopping visuals that turn strangers into buyers.',
    bullets: [
      'Static + video creatives tailored per platform',
      'UGC-style content that feels native, not salesy',
      'Hook testing — first 3 seconds engineered to stop scroll',
      'Copywriting included — headlines, body, CTA',
      '5–10 fresh creatives delivered every week',
      'Competitor creative analysis before every batch',
    ],
    color: '#C9A84C',
  },
  {
    number: '05',
    icon: '📈',
    title: 'SEO Optimization',
    tagline: 'Reduce ad dependency. Build traffic that compounds.',
    bullets: [
      'Full technical SEO audit + implementation',
      'Keyword research targeting buyer-intent terms',
      'On-page optimisation — every product + collection page',
      'Schema markup for rich results in Google',
      'Blog content strategy for long-term organic growth',
      'Monthly ranking reports — transparent progress',
    ],
    color: '#7B3FE4',
  },
  {
    number: '06',
    icon: '🚀',
    title: 'Scaling Strategy',
    tagline: 'From first sale to ₹1 Crore/month — we know the road.',
    bullets: [
      'Custom growth roadmap based on your current revenue',
      'Multi-channel expansion — Meta, Google, organic',
      'AOV optimisation — upsells, bundles, cross-sells',
      'Retention strategy — email + WhatsApp flows',
      'Team building guidance as you scale operations',
      'Monthly strategy calls with Vaibhav personally',
    ],
    color: '#FF6B35',
  },
]

export default function ServiceDetails() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return

        // Bullets reveal on scroll
        const bullets = card.querySelectorAll('.bullet-item')

        ScrollTrigger.create({
          trigger: card,
          start: 'top 60%',
          onEnter: () => {
            gsap.fromTo(bullets,
              { opacity: 0, x: -20 },
              {
                opacity: 1, x: 0,
                duration: 0.4,
                stagger: 0.1,
                ease: 'power2.out',
              }
            )
          },
          once: true,
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="service-details"
      style={{
        background: '#050508',
        padding: '0 0 80px',
      }}
    >
      {/* Section label */}
      <div style={{ textAlign: 'center', padding: '60px 24px 48px' }}>
        <p style={{
          fontSize: '11px',
          letterSpacing: '0.4em',
          textTransform: 'uppercase',
          color: '#8B8B9E',
          fontFamily: "'Inter', sans-serif",
        }}>
          In Detail
        </p>
      </div>

      {/* Sticky stack container */}
      <div style={{ position: 'relative' }}>
        {serviceDetails.map((service, i) => (
          <div
            key={i}
            ref={el => { cardsRef.current[i] = el }}
            style={{
              position: 'sticky',
              top: `${i * 12}px`,
              zIndex: i + 1,
              margin: '0 auto 4px',
              maxWidth: '860px',
              width: 'calc(100% - 32px)',
              borderRadius: '16px',
              background: 'rgba(10,10,14,0.97)',
              border: `1px solid rgba(${
                service.color === '#C9A84C' ? '201,168,76' :
                service.color === '#7B3FE4' ? '123,63,228' :
                '255,107,53'
              }, 0.2)`,
              backdropFilter: 'blur(20px)',
              boxShadow: `0 -4px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.03)`,
              overflow: 'hidden',
              padding: 'clamp(28px, 5vw, 48px) clamp(24px, 5vw, 56px)',
            }}
          >
            {/* Top accent line */}
            <div style={{
              position: 'absolute',
              top: 0, left: 0, right: 0,
              height: '2px',
              background: `linear-gradient(90deg, transparent, ${service.color}, transparent)`,
              opacity: 0.8,
            }} />

            {/* Card inner layout */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'clamp(120px, 20vw, 180px) 1fr',
              gap: 'clamp(20px, 4vw, 48px)',
              alignItems: 'start',
            }}>
              {/* Left — number + icon */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(48px, 8vw, 80px)',
                  fontWeight: 800,
                  color: service.color,
                  opacity: 0.12,
                  lineHeight: 1,
                  letterSpacing: '-2px',
                }}>
                  {service.number}
                </span>
                <span style={{ fontSize: 'clamp(28px, 5vw, 40px)' }}>
                  {service.icon}
                </span>
                <h3 style={{
                  fontFamily: "'Dancing Script', cursive",
                  fontSize: 'clamp(18px, 3vw, 26px)',
                  fontStyle: 'italic',
                  fontWeight: 700,
                  color: service.color,
                  lineHeight: 1.2,
                }}>
                  {service.title}
                </h3>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(11px, 1.5vw, 13px)',
                  color: '#8B8B9E',
                  fontStyle: 'italic',
                  lineHeight: 1.5,
                  fontWeight: 300,
                }}>
                  "{service.tagline}"
                </p>
              </div>

              {/* Right — bullets */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', paddingTop: '8px' }}>
                {service.bullets.map((bullet, j) => (
                  <div
                    key={j}
                    className="bullet-item"
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      opacity: 0,
                    }}
                  >
                    {/* Bullet dot */}
                    <div style={{
                      width: '6px', height: '6px',
                      borderRadius: '50%',
                      background: service.color,
                      boxShadow: `0 0 8px ${service.color}`,
                      flexShrink: 0,
                      marginTop: '6px',
                    }} />
                    <span style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 'clamp(12px, 1.8vw, 15px)',
                      color: '#D0CCC4',
                      lineHeight: 1.6,
                      fontWeight: 300,
                    }}>
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}