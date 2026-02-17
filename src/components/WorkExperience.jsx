import React from 'react';
import '../styles/work.css';

const WorkExperience = () => {
  // ================== Experience ==================
const jobs = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Solinst Canada",
    date: "May 2025 - Dec 2025",
    description: [
      "Frontend rebuild (React + TS + MUI)",
      "UI test automation (Puppeteer → Playwright/Cypress)",
      "CI/CD & Terraform setup"
    ]
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "Fabricland",
    date: "May 2024 - Aug 2024",
    description: [
      "Python ERP automation",
      "Portfolio website (React + Tailwind)",
      "B2B partner portal integration"
    ]
  },
  {
    id: 3,
    role: "Junior Developer",
    company: "GetWorld Attire Trims Ltd.",
    date: "Jun 2023 - Aug 2023",
    description: [
      "Qt app for QC digitization",
      "C++/Qt data visualization",
      "Optimized QC data tracking"
    ]
  }
];

// ================== Personal Projects ==================
const projects = [
  {
    id: 1,
    title: "RaiiNet",
    link: "https://github.com/a9dahiya/raiinet",
    description: [
      "Modular C++ system (Player, GameState, Observer)",
      "Core logic for abilities & events",
      "Large-scale simulation framework"
    ]
  },
  {
    id: 2,
    title: "Sign Language Recognition",
    link: "https://github.com/a9dahiya/sign-language-detection",
    description: [
      "Real-time ASL detection (Python + OpenCV + MediaPipe)",
      "Trained & deployed LSTM model",
      "Webcam overlay predictions"
    ]
  },
  {
    id: 3,
    title: "SQL Chatbot",
    link: "https://github.com/a9dahiya/sql-openai-chatbot",
    description: [
      "Rust chatbot for SQL generation",
      "OpenAI API integration",
      "Real-time CLI output"
    ]
  }
];

  return (
    <div className="work-container">
      <h2 className="section-title">Experience_Log</h2>
      
      {jobs.map((job) => (
        <div key={job.id} className="timeline-item">
          <div className="glitch-card">
            <h3 className="role glitch-text" data-text={job.role}>
              {job.role}
            </h3>
            <p className="company">{job.company}</p>
            <p className="date">{job.date}</p>

            {/* Popup Description */}
            <div className="job-details">
              <ul>
                {job.description.map((point, index) => (
                  <li key={index}>_ {point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;