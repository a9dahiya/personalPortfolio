import React, { useState } from 'react';
import '../styles/projects.css';

// Asset Imports
import raiinetImg from '../assets/raiinet.jpg';
import signImg from '../assets/sign.png';
import evappImg from '../assets/evapp.png';
import chessImg from '../assets/chess.png';
import wineImg from '../assets/wine.png';

const projectsData = [
  {
    id: "PRJ_01",
    title: "ChargePath",
    img: evappImg,
    desc: "Geospatial navigation platform for electric vehicles built with React Native and Go. Integrates Mapbox, self-hosted Valhalla, and OpenChargeMap to compute battery-aware paths and auto-reroute via charging stations when battery drops below 10%.",
    tech: ["React Native", "Go", "Mapbox", "Docker"],
    link: "https://github.com/a9dahiya/evapp"
  },
  {
    id: "PRJ_02",
    title: "Chess Engine",
    img: chessImg,
    desc: "C++ chess engine compiled to WebAssembly to run entirely in the browser — no server required. Implements bitboard representation, negamax search with alpha-beta pruning, quiescence search, and an opening book covering the King's Gambit and Caro-Kann.",
    tech: ["C++", "WebAssembly", "Emscripten", "Chess.js"],
    link: "https://github.com/a9dahiya/chess-engine"
  },
  {
    id: "PRJ_03",
    title: "Wine Stalker",
    img: wineImg,
    desc: "IoT wine cellar monitor using an ESP32 and DHT22 sensor. Streams temperature and humidity data to InfluxDB, visualized live in Grafana, with Twilio SMS alerts featuring debounce logic, severity classification, and cooldown periods to prevent notification spam.",
    tech: ["Python", "ESP32", "Grafana", "Docker"],
    link: "https://github.com/a9dahiya/wine-stalker"
  },
  {
    id: "PRJ_04",
    title: "Sign Language Recognition",
    img: signImg,
    desc: "Built a real-time sign language detection system in Python using OpenCV and MediaPipe. Trained and deployed an LSTM model to classify gestures and overlay predictions on webcam feed.",
    tech: ["Python", "OpenCV", "LSTM"],
    link: "https://github.com/a9dahiya/sign-language-detection"
  },
  {
    id: "PRJ_05",
    title: "RaiiNet",
    img: raiinetImg,
    desc: "Developed an 8x8 board game system in C++ featuring decoupled engine components (Player, GameState, Observer). Engineered core logic for abilities and event handling within a modular framework to deliver a cohesive simulation.",
    tech: ["C++", "Makefile", "OOP"],
    link: "https://github.com/a9dahiya/raiinet"
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(projectsData[0]);

  return (
    <div className="projects-section">
      <h2 className="projects-header" data-text="PROJECT_ARCHIVE">PROJECT_ARCHIVE</h2>
      
      <div className="terminal-frame">
        <div className="terminal-nav">
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              className={`nav-row ${activeProject.id === project.id ? 'active' : ''}`}
              onClick={() => setActiveProject(project)}
            >
              <div className="status-dot"></div>
              <span className="row-id">{project.id}</span>
              <span className="row-name">{project.title}</span>
            </div>
          ))}
        </div>

        <div className="terminal-view" key={activeProject.id}>
          <div className="view-top-bar">
            <span>SYS_ADMIN@PROJECTS: ~/{activeProject.id.toLowerCase()}</span>
            <span className="blink-cursor">_</span>
          </div>

          <div className="view-main">
            <div className="view-img-container">
              <img src={activeProject.img} alt={activeProject.title} />
              <div className="v-scanline"></div>
              <div className="v-noise"></div>
            </div>
            
            <div className="view-info">
              <div className="title-wrapper">
                <h3 className="view-title glitch-element" data-text={activeProject.title}>
                  {activeProject.title}
                </h3>
              </div>
              
              <div className="desc-wrapper">
                <p className="view-desc glitch-element" data-text={activeProject.desc}>
                  <span className="prompt-char">{"> "}</span>
                  {activeProject.desc}
                </p>
              </div>

              <div className="view-stack">
                {activeProject.tech.map(t => (
                  <span key={t} className="tech-chip glitch-element" data-text={t}>
                    {t}
                  </span>
                ))}
              </div>
              <button 
                className="view-action glitch-element" 
                data-text="INITIALIZE_SOURCE_CODE"
                onClick={() => activeProject.link && window.open(activeProject.link, "_blank")}
              >
                INITIALIZE_SOURCE_CODE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;