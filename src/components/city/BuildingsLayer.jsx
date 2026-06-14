import { useEffect, useRef, useState } from 'react';
import useTransparentImage from '../../hooks/useTransparentImage';
import b1  from '../../assets/building_hotel_bar.png';
import b2  from '../../assets/building_cyber_shop.png';
import b3  from '../../assets/named_night_club.png';
import b4  from '../../assets/named_diner.png';
import b5  from '../../assets/named_pharmacy.png';
import b6  from '../../assets/named_arcade.png';
import b7  from '../../assets/named_bakery.png';
import b8  from '../../assets/nameless_brick.png';
import b9  from '../../assets/nameless_brutalist.png';
import b10 from '../../assets/nameless_victorian.png';

// Only building 0 (hotel bar) is wired up for now
const CLICKABLE = [0];

export default function BuildingsLayer({ worldX, onWidthReady, onBuildingClick }) {
  const containerRef = useRef(null);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const urls = [
    useTransparentImage(b1),
    useTransparentImage(b2),
    useTransparentImage(b3),
    useTransparentImage(b4),
    useTransparentImage(b5),
    useTransparentImage(b6),
    useTransparentImage(b7),
    useTransparentImage(b8),
    useTransparentImage(b9),
    useTransparentImage(b10),
  ];

  const allReady = urls.every(Boolean);

  useEffect(() => {
    if (!allReady || !containerRef.current || !onWidthReady) return;
    const id = requestAnimationFrame(() => {
      onWidthReady(containerRef.current.scrollWidth);
    });
    return () => cancelAnimationFrame(id);
  }, [allReady, onWidthReady]);

  if (!allReady) return null;

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        bottom: '45vh',
        left: 0,
        display: 'flex',
        alignItems: 'flex-end',
        transform: `translateX(${-worldX}px)`,
        willChange: 'transform',
        pointerEvents: 'auto',
      }}
    >
      {urls.map((url, i) => {
        const clickable = CLICKABLE.includes(i);
        const hovered   = hoveredIdx === i && clickable;

        return (
          <img
            key={i}
            src={url}
            onMouseEnter={() => clickable && setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
            onClick={() => clickable && onBuildingClick?.('hotel_bar')}
            style={{
              height: '72vh',
              width: 'auto',
              display: 'block',
              flexShrink: 0,
              imageRendering: 'pixelated',
              cursor: clickable ? 'pointer' : 'default',
              transition: 'filter 0.25s ease',
              filter: hovered
                ? 'brightness(1.25) drop-shadow(0 0 10px rgba(255,180,60,0.9)) drop-shadow(0 0 28px rgba(255,120,0,0.55))'
                : 'none',
            }}
          />
        );
      })}
    </div>
  );
}
