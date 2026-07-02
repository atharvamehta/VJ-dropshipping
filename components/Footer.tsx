'use client'

export default function Footer() {
  return (
    <footer style={{
      background: '#050508',
      borderTop: '1px solid rgba(201,168,76,0.12)',
      padding: 'clamp(48px, 8vw, 80px) clamp(20px, 6vw, 60px) clamp(24px, 4vw, 36px)',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Background glow */}
      <div style={{
        position: 'absolute',
        top: 0, left: '50%',
        transform: 'translateX(-50%)',
        width: '600px', height: '200px',
        background: 'radial-gradient(ellipse, rgba(201,168,76,0.06) 0%, transparent 70%)',
        filter: 'blur(40px)',
        pointerEvents: 'none',
      }} />

      {/* Main content */}
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: 'clamp(32px, 6vw, 60px)',
        marginBottom: 'clamp(40px, 6vw, 60px)',
      }}>

        {/* Left — Logo + tagline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <span style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(48px, 10vw, 72px)',
              fontWeight: 700,
              fontStyle: 'italic',
              background: 'linear-gradient(135deg, #8B6914, #C9A84C, #FFD700, #C9A84C, #8B6914)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 20px rgba(201,168,76,0.4))',
              lineHeight: 1,
              display: 'block',
              paddingBottom: '8px',
            }}>
              VJ
            </span>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '10px',
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              color: '#8B8B9E',
              marginTop: '4px',
            }}>
              Dropshipping Agency
            </p>
          </div>

          <p style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: 'clamp(14px, 2.5vw, 17px)',
            fontStyle: 'italic',
            color: '#8B8B9E',
            lineHeight: 1.6,
            maxWidth: '220px',
          }}>
            "We Don't Just Build Stores. We Build Empires."
          </p>

          {/* Divider */}
          <div style={{
            width: '40px', height: '1px',
            background: 'linear-gradient(90deg, #C9A84C, transparent)',
          }} />
        </div>

        {/* Right — Contact info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '11px',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: '#C9A84C',
            fontWeight: 500,
          }}>
            Get In Touch
          </p>

          {/* Phone — opens WhatsApp */}
          
            <a href="https://wa.me/919203308903"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              width: 'fit-content',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget
              el.style.transform = 'translateX(4px)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget
              el.style.transform = 'translateX(0)'
            }}
          >
            <div style={{
              width: '36px', height: '36px',
              borderRadius: '8px',
              background: 'rgba(37,211,102,0.08)',
              border: '1px solid rgba(37,211,102,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <div>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '11px',
                color: '#8B8B9E',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '2px',
              }}>
                WhatsApp
              </p>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(13px, 2vw, 15px)',
                color: '#F0EDE8',
                fontWeight: 400,
              }}>
                +91 92033 08903
              </p>
            </div>
          </a>

          {/* Email — opens Gmail */}
          
            <a href="https://mail.google.com/mail/?view=cm&to=support@vjdropshipping.com&su=Enquiry%20from%20VJ%20Dropshipping%20Website"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              width: 'fit-content',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateX(4px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateX(0)'
            }}
          >
            <div style={{
              width: '36px', height: '36px',
              borderRadius: '8px',
              background: 'rgba(201,168,76,0.08)',
              border: '1px solid rgba(201,168,76,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <div>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '11px',
                color: '#8B8B9E',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '2px',
              }}>
                Email
              </p>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(12px, 2vw, 14px)',
                color: '#F0EDE8',
                fontWeight: 400,
              }}>
                support@vjdropshipping.com
              </p>
            </div>
          </a>

          {/* Address */}
          
            <a href="https://maps.app.goo.gl/QFaDdvxNUDcL1Qa77"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              width: 'fit-content',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateX(4px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateX(0)'
            }}
          >
            <div style={{
              width: '36px', height: '36px',
              borderRadius: '8px',
              background: 'rgba(123,63,228,0.08)',
              border: '1px solid rgba(123,63,228,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
              marginTop: '2px',
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7B3FE4" strokeWidth="1.5">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
            </div>
            <div>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '11px',
                color: '#8B8B9E',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '2px',
              }}>
                Location
              </p>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(12px, 2vw, 14px)',
                color: '#F0EDE8',
                fontWeight: 400,
                lineHeight: 1.5,
              }}>
                C21 Building Nanakheda, Ujjain, Madhya Pradesh
                <br />
                <span style={{ color: '#7B3FE4', fontSize: '11px' }}>
                  View on Maps →
                </span>
              </p>
            </div>
          </a>
        </div>
      </div>

      {/* Bottom divider */}
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)',
        marginBottom: 'clamp(20px, 3vw, 28px)',
      }} />

      {/* Trademark line */}
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '6px',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '12px',
          color: '#8B8B9E',
          fontWeight: 300,
          letterSpacing: '0.05em',
        }}>
          © 2026 VJ Dropshipping. All rights reserved. Made with ❤️ and ☕ by
        </p>
        
          <a href="https://mail.google.com/mail/?view=cm&to=atharvamehta95@gmail.com&su=Work%20Enquiry%20for%20Atharva%20Mehta"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '12px',
            color: '#C9A84C',
            fontWeight: 500,
            textDecoration: 'none',
            borderBottom: '1px solid rgba(201,168,76,0.3)',
            paddingBottom: '1px',
            transition: 'all 0.3s ease',
            letterSpacing: '0.05em',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.color = '#FFD700'
            e.currentTarget.style.borderBottomColor = '#FFD700'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = '#C9A84C'
            e.currentTarget.style.borderBottomColor = 'rgba(201,168,76,0.3)'
          }}
        >
          Atharva Mehta
        </a>
      </div>

    </footer>
  )
}