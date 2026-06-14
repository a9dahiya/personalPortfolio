import { useMemo } from 'react';

const STAR_COUNT = 200;

export default function SkyLayer() {
  const stars = useMemo(() => (
    Array.from({ length: STAR_COUNT }, (_, i) => ({
      id: i,
      x: Math.random() * 100,        // vw %
      y: Math.random() * 100,        // vh %
      size: Math.random() > 0.85 ? 2 : 1,
      opacity: 0.3 + Math.random() * 0.7,
    }))
  ), []);

  return (
    <div style={{
      position: 'absolute',
      top: 0, left: 0, right: 0,
      // covers the sky area above the upper sidewalk
      bottom: '45vh',
      background: 'linear-gradient(to bottom, #02020a 0%, #07071f 70%, #0d0d2a 100%)',
      overflow: 'hidden',
      pointerEvents: 'none',
      zIndex: 0,
    }}>
      {stars.map(s => (
        <div
          key={s.id}
          style={{
            position: 'absolute',
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            borderRadius: '50%',
            background: '#ffffff',
            opacity: s.opacity,
          }}
        />
      ))}
    </div>
  );
}
