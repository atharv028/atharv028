import { ImageResponse } from 'next/og'
import { SEO_CONFIG } from '@/lib/seo'

export const runtime = 'edge'

export const alt = 'Atharv Tare - Full Stack Developer Portfolio'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 60%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)
            `,
          }}
        />
        
        {/* Main Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            zIndex: 1,
            padding: '40px',
            maxWidth: '1000px',
          }}
        >
          {/* Profile Image Placeholder */}
          <div
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '60px',
              background: 'linear-gradient(135deg, #3b82f6, #10b981)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '30px',
              fontSize: '48px',
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            AT
          </div>
          
          {/* Name */}
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              color: 'white',
              margin: '0 0 20px 0',
              background: 'linear-gradient(135deg, #3b82f6, #10b981, #8b5cf6)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Atharv Tare
          </h1>
          
          {/* Title */}
          <h2
            style={{
              fontSize: '36px',
              fontWeight: '600',
              color: '#9ca3af',
              margin: '0 0 30px 0',
            }}
          >
            Full Stack Developer Portfolio
          </h2>
          
          {/* Description */}
          <p
            style={{
              fontSize: '24px',
              color: '#d1d5db',
              margin: '0 0 40px 0',
              lineHeight: '1.4',
              maxWidth: '800px',
            }}
          >
            Software Engineer with 3+ years of experience building scalable applications
            <br />
            Expert in Node.js, React, AWS, and cloud architecture
          </p>
          
          {/* Tech Stack */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              justifyContent: 'center',
              marginBottom: '30px',
            }}
          >
            {['Node.js', 'React', 'TypeScript', 'AWS', 'MongoDB', 'Kubernetes'].map((tech) => (
              <div
                key={tech}
                style={{
                  background: 'rgba(59, 130, 246, 0.2)',
                  border: '1px solid rgba(59, 130, 246, 0.3)',
                  borderRadius: '20px',
                  padding: '8px 16px',
                  fontSize: '18px',
                  color: '#60a5fa',
                  fontWeight: '500',
                }}
              >
                {tech}
              </div>
            ))}
          </div>
          
          {/* Stats */}
          <div
            style={{
              display: 'flex',
              gap: '40px',
              fontSize: '20px',
              color: '#9ca3af',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#3b82f6' }}>5M+</div>
              <div>Users Served</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#10b981' }}>400K+</div>
              <div>Monthly Active Users</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#8b5cf6' }}>99.9%</div>
              <div>Uptime</div>
            </div>
          </div>
        </div>
        
        {/* Bottom Branding */}
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            right: '20px',
            fontSize: '16px',
            color: '#6b7280',
          }}
        >
          atharv.work
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
