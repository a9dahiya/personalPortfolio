import { useState, useEffect, useRef, useCallback } from 'react';
import RoadLayer       from './city/RoadLayer';
import UpperSidewalk   from './city/UpperSidewalk';
import LowerSidewalk   from './city/LowerSidewalk';
import BuildingsLayer  from './city/BuildingsLayer';
import SkyLayer        from './city/SkyLayer';
import GroundDetails   from './city/GroundDetails';
import BuildingInterior from './city/BuildingInterior';

const SPEED = 7;


export default function CityGame() {
  const [worldX,       setWorldX]       = useState(0);
  const [isWalking,    setIsWalking]    = useState(false);
  const [facing,       setFacing]       = useState('right');
  const [overlayOpacity, setOverlayOpacity] = useState(0);
  const [activeBuilding, setActiveBuilding] = useState(null); // null = outside
  const [showInterior,   setShowInterior]   = useState(false);

  const worldXRef    = useRef(0);
  const maxXRef      = useRef(0);
  const keysRef      = useRef({});
  const insideRef    = useRef(false); // block movement while inside

  const onWidthReady = useCallback((totalWidth) => {
    maxXRef.current = Math.max(0, totalWidth - window.innerWidth);
  }, []);

  const enterBuilding = useCallback((id) => {
    insideRef.current = true;
    setOverlayOpacity(1);
    setTimeout(() => {
      setActiveBuilding(id);
      setShowInterior(true);
      setOverlayOpacity(0);
    }, 400);
  }, []);

  const exitBuilding = useCallback(() => {
    setOverlayOpacity(1);
    setTimeout(() => {
      setShowInterior(false);
      setActiveBuilding(null);
      setOverlayOpacity(0);
      insideRef.current = false;
    }, 400);
  }, []);

  // Keyboard — movement + Enter/Escape
  useEffect(() => {
    const down = e => {
      keysRef.current[e.key] = true;
      if (e.key === 'Escape' && insideRef.current) exitBuilding();
    };
    const up = e => { keysRef.current[e.key] = false; };
    window.addEventListener('keydown', down);
    window.addEventListener('keyup',   up);
    return () => {
      window.removeEventListener('keydown', down);
      window.removeEventListener('keyup',   up);
    };
  }, [enterBuilding, exitBuilding]);

  // Game loop
  useEffect(() => {
    let rafId;
    let prevWalking = false;
    let prevFacing  = 'right';

    const loop = () => {
      if (!insideRef.current) {
        const k     = keysRef.current;
        const left  = k['ArrowLeft']  || k['a'] || k['A'];
        const right = k['ArrowRight'] || k['d'] || k['D'];
        const maxX  = maxXRef.current;
        let walking = false;

        if (right && worldXRef.current < maxX) {
          worldXRef.current = Math.min(worldXRef.current + SPEED, maxX);
          if (prevFacing !== 'right') { setFacing('right'); prevFacing = 'right'; }
          walking = true;
        } else if (left && worldXRef.current > 0) {
          worldXRef.current = Math.max(worldXRef.current - SPEED, 0);
          if (prevFacing !== 'left') { setFacing('left'); prevFacing = 'left'; }
          walking = true;
        }

        setWorldX(worldXRef.current);
        if (walking !== prevWalking) { setIsWalking(walking); prevWalking = walking; }
      }
      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative', background: '#05050f' }}>

      <SkyLayer />
      <LowerSidewalk />
      <RoadLayer     worldX={worldX} isWalking={isWalking} facing={facing} />
      <UpperSidewalk />
      <BuildingsLayer worldX={worldX} onWidthReady={onWidthReady} onBuildingClick={enterBuilding} />
      <GroundDetails  worldX={worldX} />


      {/* Interior */}
      {showInterior && (
        <BuildingInterior buildingId={activeBuilding} onExit={exitBuilding} />
      )}

      {/* Black flash overlay */}
      <div style={{
        position: 'fixed',
        inset: 0,
        background: '#000',
        opacity: overlayOpacity,
        transition: 'opacity 0.3s',
        pointerEvents: overlayOpacity > 0 ? 'all' : 'none',
        zIndex: 200,
      }} />
    </div>
  );
}
