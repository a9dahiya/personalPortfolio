import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "../styles/intro.css";
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.JPG"

// TODO: Replace with your imports
const photo1 = "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=500&auto=format&fit=crop&q=60";
const photo2 = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60";

const Intro = () => {
  return (
    <div className="intro-container">
      
      {/* TEXT SECTION (Left) */}
      <div className="intro-text-wrapper">
        <h1 className="intro-name" data-text="Akhilesh Dahiya">
  Akhilesh Dahiya
</h1>

        <div className="intro-desc">
            <p>
            Combinatorics & Optimization @ University of Waterloo <br />
            Turning ideas into code, one scalable system at a time <br />
            Peaked Immortal in Valorant
          </p>
        </div>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/akhilesh-dahiya/" target="_blank" rel="noreferrer" className="social-icon">
            <FaLinkedin />
          </a>
          <a href="https://github.com/akhileshdahiya" target="_blank" rel="noreferrer" className="social-icon">
            <FaGithub />
          </a>
          <a href="mailto:akhilesh.dahiya@gmail.com" className="social-icon">
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* PHOTO SECTION (Far Right) */}
      <div className="photo-section">
        <div className="polaroid">
           <img src={img2} alt="Akhilesh 1" />
        </div>
        <div className="polaroid">
           <img src={img1} alt="Akhilesh 2" />
        </div>
      </div>

    </div>
  );
};

export default Intro;