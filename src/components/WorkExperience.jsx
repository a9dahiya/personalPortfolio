import '../styles/work.css';

const WorkExperience = () => {
  const jobs = [
    {
      id: 1,
      role: "Software Engineer",
      company: "Solinst Canada",
      date: "May 2025 - Dec 2025",
      description: [
        "Frontend rebuild ",
        "UI test automation ",
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

            <div className="job-details">
              <ul>
                {job.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              <div className="system-footer">
                <p className="blink-text">[!]ACCESS_EXPANDED_WORK_LOGS</p>
                <p className="contact-note">Refer to my resume for detailed breakdown!</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;