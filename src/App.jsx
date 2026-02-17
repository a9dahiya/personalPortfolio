import StarBackground from './components/StarBackground'; 
import Intro from './components/Intro';
import WorkExperience from './components/WorkExperience';
// Adjust path based on where you put the file
export default function App() {
  return (
    <div style={{ minHeight: "100vh", position: "relative", overflow: "hidden" }}>
      
      {/* The component handles the massive generation now */}
      <StarBackground />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10, padding: "2rem" }}>
        <Intro />
      </div>

       <div style={{ position: "relative", zIndex: 10, padding: "2rem" }}>
        <WorkExperience />
      </div>

    </div>
  );
}