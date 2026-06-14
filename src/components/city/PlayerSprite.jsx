import { useState, useEffect } from 'react';
import useTransparentImage from '../../hooks/useTransparentImage';
import idleSrc     from '../../assets/idle.png';
import justMoveSrc from '../../assets/justMove.png';
import step1Src    from '../../assets/step1.png';
import step2Src    from '../../assets/step2.png';

const DISPLAY_H = 200; // px — tweak this to resize

export default function PlayerSprite({ isWalking, facing }) {
  const [walkIdx, setWalkIdx] = useState(0);

  const idleUrl  = useTransparentImage(idleSrc);
  const jmUrl    = useTransparentImage(justMoveSrc);
  const s1Url    = useTransparentImage(step1Src);
  const s2Url    = useTransparentImage(step2Src);

  // Continuous walk: just alternate the two step frames
  const walkUrls = [s1Url, s2Url];

  useEffect(() => {
    if (!isWalking) { setWalkIdx(0); return; }
    const id = setInterval(() => setWalkIdx(i => (i + 1) % 2), 150);
    return () => clearInterval(id);
  }, [isWalking]);

  // Don't render until all frames are ready
  if (!idleUrl || !jmUrl || !s1Url || !s2Url) return null;

  const src = isWalking ? walkUrls[walkIdx] : idleUrl;

  return (
    <img
      src={src}
      style={{
        position: 'absolute',
        bottom: '30%',          // centered in the road
        left: 24,               // starts at far left
        height: DISPLAY_H,
        width: 'auto',          // preserves aspect ratio from the cropped frame
        imageRendering: 'pixelated',
        transform: `scaleX(${facing === 'left' ? -1 : 1})`,
        transformOrigin: 'center bottom',
        zIndex: 20,
        pointerEvents: 'none',
      }}
    />
  );
}
