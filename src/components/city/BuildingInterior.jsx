// Placeholder interior — swap content per building later
export default function BuildingInterior({ buildingId, onExit }) {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: '#0a0a0f',
      zIndex: 150,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontFamily: '"Courier New", monospace',
    }}>
      <p style={{ color: '#555', fontSize: 13, marginBottom: 32 }}>[ {buildingId} ]</p>
      <h1 style={{ fontSize: 48, margin: 0, letterSpacing: 4 }}>COMING SOON</h1>
      <p style={{ color: '#444', marginTop: 48, fontSize: 12 }}>ESC to leave</p>
    </div>
  );
}
