import React, { useState } from 'react';
import '../styles/projects.css';

// Asset Imports
import raiinetImg from '../assets/raiinet.jpg';
import signImg from '../assets/sign.png';
import chatbotImg from '../assets/chatbot.avif';
import leetcodeImg from '../assets/leetcode.png';
import twitterImg from '../assets/twitter.png';

const projectsData = [
  { 
    id: "PRJ_01", 
    title: "RaiiNet", 
    img: raiinetImg, 
    desc: "Developed an 8x8 board game system in C++ featuring decoupled engine components (Player, GameState, Observer). Engineered core logic for abilities and event handling within a modular framework to deliver a cohesive simulation.",
    tech: ["C++", "Makefile", "OOP"],
    link: "https://github.com/a9dahiya/raiinet"
  },
  { 
    id: "PRJ_02", 
    title: "Sign Language Recognition", 
    img: signImg, 
    desc: "Built a real-time sign language detection system in Python using OpenCV and MediaPipe. Trained and deployed an LSTM model to classify gestures and overlay predictions on webcam feed.", 
    tech: ["Python", "OpenCV", "LSTM"],
    link: "https://github.com/a9dahiya/sign-language-detection"
  },
  { 
    id: "PRJ_03", 
    title: "SQL Chatbot", 
    img: chatbotImg, 
    desc: "Built a chatbot in Rust using the OpenAI API to generate SQL queries from natural language prompts. Integrated user input handling to produce executable SQL code with real-time CLI output.", 
    tech: ["Rust", "OpenAI", "CLI"],
    link: "https://github.com/a9dahiya/sql-openai-chatbot"
  },
  { 
    id: "PRJ_04", 
    title: "Leetcode Demon Mode", 
    img: leetcodeImg, 
    desc: "Electron-based productivity lock. Forces kiosk mode and disables system-level shortcuts to ensure zero-distraction sessions. Lockdown duration configurable via main.js logic.", 
    tech: ["Electron", "JavaScript", "Node.js"],
    link: "https://github.com/a9dahiya/leetcode-demon-time"
  },
  { 
    id: "PRJ_05", 
    title: "Twitter Reply Bot", 
    img: twitterImg, 
    desc: "Automated engagement tool built with Node.js. Monitors specified search queries in real-time and executes automated replies using Twitter API protocols.", 
    tech: ["Node.js", "Twitter API", "REST"],
    link: "https://github.com/a9dahiya/twitter-bot"
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