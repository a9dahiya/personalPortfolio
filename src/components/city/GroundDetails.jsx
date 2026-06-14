import { useMemo } from 'react';
import useTransparentImage from '../../hooks/useTransparentImage';
import manholeSrc from '../../assets/detail_manhole.png';
import drainSrc   from '../../assets/detail_storm_drain.png';

const PLACEMENTS = [
  { src: 'manhole', x: 900,  size: 52, bottom: 1.5 },
  { src: 'drain',   x: 2200, size: 64, bottom: 1.2 },
  { src: 'manhole', x: 3600, size: 52, bottom: 1.5 },
  { src: 'drain',   x: 5100, size: 64, bottom: 1.2 },
  { src: 'manhole', x: 6500, size: 52, bottom: 1.5 },
];

export default function GroundDetails({ worldX }) {
  const manholeUrl = useTransparentImage(manholeSrc);
  const drainUrl   = useTransparentImage(drainSrc);

  if (!manholeUrl || !drainUrl) return null;

  const urlMap = { manhole: manholeUrl, drain: drainUrl };

  return (
    <div style={{
      position: 'absolute',
      // road starts at bottom: 5vh — details sit just above the road bottom
      bottom: '5vh',
      left: 0,
      width: 0,           // zero-width, children use absolute positions
      height: 0,
      pointerEvents: 'none',
      zIndex: 5,
    }}>
      {PLACEMENTS.map((p, i) => (
        <img
          key={i}
          src={urlMap[p.src]}
          style={{
            position: 'absolute',
            left: p.x - worldX,
            bottom: `${p.bottom}vh`,
            height: p.size,
            width: 'auto',
            imageRendering: 'pixelated',
            opacity: 0.85,
          }}
        />
      ))}
    </div>
  );
}
