'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const packages = [
  {
    name: 'Launchpad',
    badge: 'Start Here',
    badgeColor: '#8B8B9E',
    price: '₹5,499',
    breakdown: '₹1,500 store + ₹1,500 ads setup + ₹2,100 ad budget',
    tagline: 'Everything you need to launch your first profitable store.',
    color: '#8B8B9E',
    accentColor: 'rgba(139,139,158,0.2)',
    featured: false,
    duration: '7 Days Campaign',
    features: [
      'Shopify Store Setup',
      '50+ Winning Products',
      'Payment + Shipping Setup',
      '3 Ad Creatives',
      '7 Days Meta Ads Management',
      '₹300/day Budget Managed',
      '7 Days Post-Launch Support',
      'Invoice + Agreement',
    ],
    extras: [
      'Basic store design',
      'Standard product research',
      'Ads account setup',
      'Lead generation setup',
      '3-5 orders/day guarantee',
    ],
    whatsapp: 'Hi Vaibhav, I am interested in the Launchpad package (₹5,499). Please share more details.',
  },
  {
    name: 'Scaleup',
    badge: '⭐ Most Popular',
    badgeColor: '#C9A84C',
    price: '₹6,999',
    breakdown: '₹1,500 store + ₹1,500 ads setup + ₹3,000 ad budget',
    tagline: 'The complete growth system for serious dropshippers.',
    color: '#C9A84C',
    accentColor: 'rgba(201,168,76,0.15)',
    featured: true,
    duration: '10 Days Campaign',
    features: [
      'Shopify Store Setup',
      '50+ Winning Products',
      'Payment + Shipping Setup',
      '5 Ad Creatives',
      '10 Days Meta Ads Management',
      '₹300/day Budget Managed',
      '15 Days Post-Launch Support',
      'Scaling Strategy Session',
      'Invoice + Agreement',
    ],
    extras: [
      'Everything in Launchpad',
      'Enhanced store design',
      'Advanced product research',
      'Scaling strategy session',
      '3-5 orders/day guarantee',
      'Priority response support',
    ],
    whatsapp: 'Hi Vaibhav, I am interested in the Scaleup package (₹6,999). Please share more details.',
  },
  {
    name: 'Empire',
    badge: 'Full Power',
    badgeColor: '#7B3FE4',
    price: '₹8,999',
    breakdown: '₹2,500 premium store + ₹1,500 ads setup + ₹4,500 ad budget',
    tagline: 'Maximum firepower for maximum results from day one.',
    color: '#7B3FE4',
    accentColor: 'rgba(123,63,228,0.15)',
    featured: false,
    duration: '15 Days Campaign',
    features: [
      'Premium Dynamic Website',
      '50+ Winning Products',
      'Full A-Z Configuration',
      '8 Ad Creatives',
      '15 Days Meta Ads Management',
      '₹300/day Budget Managed',
      '30 Days Post-Launch Support',
      'Monthly Strategy Call',
      'Priority WhatsApp Support',
      'Invoice + Agreement',
    ],
    extras: [
      'Everything in Scaleup',
      'High-converting custom design',
      'Premium product selection',
      'Monthly call with Vaibhav',
      '3-5 orders/day guarantee',
      'Fastest priority support',
    ],
    whatsapp: 'Hi Vaibhav, I am interested in the Empire package (₹8,999). Please share more details.',
  },
]

export default function Packages() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [openDrawer, setOpenDrawer] = useState<number | null>(null)
  const drawerRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.pkg-card',
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.packages-grid',
            start: 'top 75%',
          }
        }
      )
      gsap.fromTo('.pkg-bottom',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.pkg-bottom',
            start: 'top 85%',
          }
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const toggleDrawer = (index: number) => {
    const isOpening = openDrawer !== index
    setOpenDrawer(isOpening ? index : null)

    setTimeout(() => {
      const drawer = drawerRefs.current[index]
      if (!drawer) return
      if (isOpening) {
        gsap.fromTo(drawer.querySelectorAll('.drawer-item'),
          { opacity: 0, x: -16 },
          { opacity: 1, x: 0, duration: 0.3, stagger: 0.06, ease: 'power2.out' }
        )
      }
    }, 50)
  }

  return (
    <section
      ref={sectionRef}
      id="packages"
      style={{
        background: '#050508',
        padding: 'clamp(60px, 10vw, 100px) clamp(16px, 5vw, 40px)',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 8vw, 72px)' }}>
        <p style={{
          fontSize: '11px',
          letterSpacing: '0.4em',
          textTransform: 'uppercase',
          color: '#C9A84C',
          fontFamily: "'Inter', sans-serif",
          marginBottom: '12px',
          fontWeight: 500,
        }}>
          Investment
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
          Choose Your Path
        </h2>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 'clamp(13px, 2vw, 15px)',
          color: '#8B8B9E',
          maxWidth: '480px',
          margin: '0 auto',
          lineHeight: 1.7,
          fontWeight: 300,
        }}>
          Every package includes a legal invoice, signed agreement, and a guaranteed result.
          No fluff. No hidden charges.
        </p>
      </div>

      {/* Cards Grid */}
      <div
        className="packages-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: 'clamp(16px, 3vw, 24px)',
          maxWidth: '960px',
          margin: '0 auto',
          alignItems: 'start',
        }}
      >
        {packages.map((pkg, i) => (
          <div
            key={i}
            className="pkg-card"
            style={{
              opacity: 0,
              position: 'relative',
              borderRadius: '16px',
              background: pkg.featured
                ? `linear-gradient(145deg, rgba(201,168,76,0.08), rgba(5,5,8,0.95))`
                : 'rgba(255,255,255,0.02)',
              border: pkg.featured
                ? '1px solid rgba(201,168,76,0.5)'
                : '1px solid rgba(255,255,255,0.06)',
              boxShadow: pkg.featured
                ? '0 0 60px rgba(201,168,76,0.12), 0 20px 60px rgba(0,0,0,0.5)'
                : '0 8px 32px rgba(0,0,0,0.3)',
              transform: pkg.featured ? 'translateY(-16px)' : 'translateY(0)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              overflow: 'hidden',
            }}
            onMouseEnter={e => {
              if (!pkg.featured) {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = `0 20px 60px rgba(0,0,0,0.4), 0 0 30px ${pkg.accentColor}`
              }
            }}
            onMouseLeave={e => {
              if (!pkg.featured) {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.3)'
              }
            }}
          >
            {/* Top accent line */}
            <div style={{
              position: 'absolute',
              top: 0, left: 0, right: 0,
              height: '2px',
              background: `linear-gradient(90deg, transparent, ${pkg.color}, transparent)`,
            }} />

            <div style={{ padding: 'clamp(24px, 4vw, 36px)' }}>
              {/* Badge */}
              <div style={{
                display: 'inline-flex',
                padding: '5px 14px',
                borderRadius: '100px',
                background: `rgba(${
                  pkg.color === '#C9A84C' ? '201,168,76' :
                  pkg.color === '#7B3FE4' ? '123,63,228' :
                  '139,139,158'
                }, 0.12)`,
                border: `1px solid ${pkg.color}40`,
                marginBottom: '20px',
              }}>
                <span style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  color: pkg.color,
                  letterSpacing: '0.08em',
                  fontFamily: "'Inter', sans-serif",
                }}>
                  {pkg.badge}
                </span>
              </div>

              {/* Package name */}
              <h3 style={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: 'clamp(28px, 5vw, 38px)',
                fontWeight: 700,
                fontStyle: 'italic',
                color: pkg.color,
                marginBottom: '4px',
                lineHeight: 1,
              }}>
                {pkg.name}
              </h3>

              {/* Duration */}
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '11px',
                color: '#8B8B9E',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}>
                {pkg.duration}
              </p>

              {/* Price */}
              <div style={{ marginBottom: '8px' }}>
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(36px, 6vw, 48px)',
                  fontWeight: 800,
                  background: `linear-gradient(135deg, ${pkg.color}, #FFD700)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  letterSpacing: '-1px',
                }}>
                  {pkg.price}
                </span>
              </div>

              {/* Price breakdown */}
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '11px',
                color: '#8B8B9E',
                marginBottom: '20px',
                lineHeight: 1.5,
                fontStyle: 'italic',
              }}>
                {pkg.breakdown}
              </p>

              {/* Divider */}
              <div style={{
                height: '1px',
                background: `linear-gradient(90deg, transparent, ${pkg.color}40, transparent)`,
                marginBottom: '20px',
              }} />

              {/* Tagline */}
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(12px, 1.8vw, 13px)',
                color: '#D0CCC4',
                lineHeight: 1.6,
                marginBottom: '20px',
                fontWeight: 300,
              }}>
                {pkg.tagline}
              </p>

              {/* Key features */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                {pkg.features.slice(0, 5).map((f, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{
                      width: '6px', height: '6px',
                      borderRadius: '50%',
                      background: pkg.color,
                      boxShadow: `0 0 6px ${pkg.color}`,
                      flexShrink: 0,
                    }} />
                    <span style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 'clamp(11px, 1.8vw, 13px)',
                      color: '#D0CCC4',
                      fontWeight: 300,
                    }}>
                      {f}
                    </span>
                  </div>
                ))}
              </div>

              {/* Know More button */}
              <button
                onClick={() => toggleDrawer(i)}
                style={{
                  width: '100%',
                  padding: '11px',
                  borderRadius: '6px',
                  border: `1px solid ${pkg.color}50`,
                  background: 'transparent',
                  color: pkg.color,
                  fontSize: '12px',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  marginBottom: '12px',
                  transition: 'all 0.3s ease',
                  fontFamily: "'Inter', sans-serif",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = `${pkg.color}12`
                  e.currentTarget.style.borderColor = pkg.color
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.borderColor = `${pkg.color}50`
                }}
              >
                {openDrawer === i ? '▲ Hide Details' : '▼ Know More'}
              </button>

              {/* Get Started button */}
              <button
                onClick={() => window.open(`https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(pkg.whatsapp)}`, '_blank')}
                style={{
                  width: '100%',
                  padding: '14px',
                  borderRadius: '6px',
                  border: 'none',
                  background: pkg.featured
                    ? 'linear-gradient(135deg, #C9A84C, #FFD700, #C9A84C)'
                    : `linear-gradient(135deg, ${pkg.color}22, ${pkg.color}44)`,
                  color: pkg.featured ? '#050508' : pkg.color,
                  fontSize: '13px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontFamily: "'Inter', sans-serif",
                  boxShadow: pkg.featured ? `0 8px 24px rgba(201,168,76,0.3)` : 'none',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = `0 12px 32px ${pkg.color}40`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = pkg.featured ? `0 8px 24px rgba(201,168,76,0.3)` : 'none'
                }}
              >
                Get Started →
              </button>
            </div>

            {/* Drawer */}
            <div
              ref={el => { drawerRefs.current[i] = el }}
              style={{
                maxHeight: openDrawer === i ? '600px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.5s cubic-bezier(0.23,1,0.32,1)',
                borderTop: openDrawer === i ? `1px solid ${pkg.color}25` : 'none',
              }}
            >
              <div style={{ padding: 'clamp(20px, 4vw, 32px)' }}>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '11px',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: pkg.color,
                  marginBottom: '16px',
                }}>
                  Full Package Details
                </p>

                {/* All features */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                  {pkg.extras.map((item, j) => (
                    <div key={j} className="drawer-item" style={{
                      display: 'flex', alignItems: 'flex-start', gap: '12px', opacity: 0,
                    }}>
                      <span style={{ color: pkg.color, fontSize: '14px', flexShrink: 0, marginTop: '1px' }}>✓</span>
                      <span style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 'clamp(12px, 1.8vw, 13px)',
                        color: '#D0CCC4',
                        lineHeight: 1.6,
                        fontWeight: 300,
                      }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Guarantee */}
                <div style={{
                  padding: '14px 16px',
                  borderRadius: '8px',
                  background: `${pkg.color}08`,
                  border: `1px solid ${pkg.color}25`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}>
                  <span style={{ fontSize: '18px' }}>🛡️</span>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 'clamp(11px, 1.8vw, 12px)',
                    color: '#D0CCC4',
                    lineHeight: 1.5,
                    fontWeight: 300,
                  }}>
                    <strong style={{ color: pkg.color }}>Guaranteed:</strong> Minimum 3–5 orders/day by campaign end. If not achieved, we extend the campaign at no extra cost.
                  </p>
                </div>

                {/* Invoice note */}
                <div style={{
                  marginTop: '12px',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                }}>
                  <span style={{ fontSize: '16px' }}>📄</span>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 'clamp(11px, 1.8vw, 12px)',
                    color: '#8B8B9E',
                    lineHeight: 1.5,
                    fontWeight: 300,
                  }}>
                    Includes a signed agreement + GST invoice detailing every service and timeline.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom trust section */}
      <div
        className="pkg-bottom"
        style={{
          maxWidth: '700px',
          margin: 'clamp(40px, 8vw, 64px) auto 0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          opacity: 0,
        }}
      >
        {/* Trust badges */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px',
          justifyContent: 'center',
        }}>
          {[
            { icon: '🛡️', text: '3–5 Orders/Day Guaranteed' },
            { icon: '📄', text: 'Legal Invoice + Agreement' },
            { icon: '💬', text: 'Direct WhatsApp Support' },
          ].map((badge, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 18px',
              borderRadius: '100px',
              border: '1px solid rgba(201,168,76,0.2)',
              background: 'rgba(201,168,76,0.04)',
            }}>
              <span style={{ fontSize: '14px' }}>{badge.icon}</span>
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '12px',
                color: '#D0CCC4',
                fontWeight: 400,
                whiteSpace: 'nowrap',
              }}>
                {badge.text}
              </span>
            </div>
          ))}
        </div>

        {/* Not sure CTA */}
        <div style={{ textAlign: 'center' }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '13px',
            color: '#8B8B9E',
            marginBottom: '12px',
          }}>
            Not sure which plan is right for you?
          </p>
          <button
            onClick={() => window.open('https://wa.me/91XXXXXXXXXX?text=Hi Vaibhav, I need help choosing the right package for my business.', '_blank')}
            style={{
              padding: '13px 32px',
              borderRadius: '6px',
              border: '1px solid rgba(201,168,76,0.35)',
              background: 'transparent',
              color: '#C9A84C',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.08em',
              cursor: 'pointer',
              fontFamily: "'Inter', sans-serif",
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(201,168,76,0.08)'
              e.currentTarget.style.borderColor = '#C9A84C'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(201,168,76,0.35)'
            }}
          >
            💬 Ask Vaibhav Directly
          </button>
        </div>
      </div>
    </section>
  )
}