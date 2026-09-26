import { ImageResponse } from 'next/og';

export const alt = 'Fardin Ad Works — Targeted YouTube Video Promotion';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

function OgArtwork() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '80px',
        background: '#07090E',
        color: '#F1F5F9',
        fontFamily: 'Inter, system-ui, sans-serif',
        position: 'relative',
      }}
    >
      {/* Accent glows */}
      <div
        style={{
          position: 'absolute',
          top: -120,
          left: -80,
          width: 420,
          height: 420,
          borderRadius: '50%',
          background: 'rgba(255,66,41,0.18)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: -140,
          right: -60,
          width: 460,
          height: 460,
          borderRadius: '50%',
          background: 'rgba(16,185,129,0.10)',
        }}
      />

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          marginBottom: 28,
        }}
      >
        <div
          style={{
            width: 54,
            height: 54,
            borderRadius: 14,
            background: 'linear-gradient(135deg, #FF4229, #FF7A50)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 26,
            color: '#fff',
          }}
        >
          ▶
        </div>
        <div style={{ fontSize: 26, letterSpacing: 6, color: '#FFA58A', fontWeight: 700 }}>
          FARDIN AD WORKS
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          fontSize: 68,
          fontWeight: 800,
          lineHeight: 1.15,
          maxWidth: 950,
        }}
      >
        <div>Targeted YouTube Promotion</div>
        <div style={{ color: '#FF7A50' }}>That Actually Delivers.</div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginTop: 36 }}>
        <div
          style={{
            fontSize: 24,
            padding: '12px 28px',
            borderRadius: 999,
            background: 'linear-gradient(90deg, #FF4229, #FF7A50)',
            color: '#fff',
            fontWeight: 700,
          }}
        >
          Packages $20 – $105
        </div>
        <div style={{ fontSize: 24, color: '#94A3B8', fontFamily: 'monospace' }}>
          fardintareque.com
        </div>
      </div>
    </div>
  );
}

export default function Image() {
  return new ImageResponse(<OgArtwork />, { ...size });
}
