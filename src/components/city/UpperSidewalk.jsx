export default function UpperSidewalk() {
  return (
    <div style={{
      position: 'absolute',
      bottom: '40vh',
      left: 0, right: 0,
      height: '5vh',
      background: '#2e2e2e',
      overflow: 'hidden',
    }}>
      {/* thin vertical black lines = tile boxes */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'repeating-linear-gradient(to right, transparent 59px, rgba(0,0,0,0.7) 59px, rgba(0,0,0,0.7) 60px)',
      }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: '#444' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, background: '#444' }} />
    </div>
  );
}
