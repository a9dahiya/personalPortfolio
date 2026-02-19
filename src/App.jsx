import StarBackground from './components/StarBackground'; 
import Intro from './components/Intro';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import TopPicks from './components/TopPicks';
import Footer from './components/Footer';


export default function App() {
  return (
    <div style={{ minHeight: "100vh", position: "relative", overflow: "hidden" }}>
      
      <StarBackground />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10, padding: "2rem" }}>
        <Intro />
      </div>


       <div style={{ position: "relative", zIndex: 10, padding: "2rem" }}>
        <WorkExperience />
      </div>

      <div style={{ position: "relative", zIndex: 10, padding: "2rem" }}>
        <Projects />
      </div>

      <div style={{ position: "relative", zIndex: 10, padding: "2rem" }}>
        <TopPicks />
      </div>

      <div style={{ position: "relative", zIndex: 10, padding: "2rem" }}>
        <Footer />
      </div>

    </div>
  );
}