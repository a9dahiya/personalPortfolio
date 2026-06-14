export default function LowerSidewalk() {
  return (
    <div style={{
      position: 'absolute',
      bottom: 0, left: 0, right: 0,
      height: '5vh',
      background: 'repeating-linear-gradient(-45deg, #222 0px, #222 18px, #2e2e2e 18px, #2e2e2e 36px)',
    }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: '#444444' }} />
    </div>
  );
}
