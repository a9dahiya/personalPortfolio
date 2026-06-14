import PlayerSprite from './PlayerSprite';

export default function RoadLayer({ worldX, isWalking, facing }) {
  const dashOffset = -(worldX % 400);

  return (
    <div style={{
      position: 'absolute',
      bottom: '5vh',
      left: 0, right: 0,
      height: '35vh',
      background: '#1c1c1c',
      overflow: 'visible',
    }}>
      {/* top curb */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: '#444444', zIndex: 1 }} />

      {/* single center lane dash — 5× longer (350px), 2.5× thicker (13px) */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: 0, right: 0,
        height: 13,
        backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.6) 350px, transparent 350px)',
        backgroundSize: '400px 13px',
        backgroundPositionX: `${dashOffset}px`,
        transform: 'translateY(-50%)',
      }} />

      {/* bottom curb */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 4, background: '#444444' }} />

      {/* Player — feet pinned to the top edge of this div */}
      <PlayerSprite isWalking={isWalking} facing={facing} />
    </div>
  );
}
