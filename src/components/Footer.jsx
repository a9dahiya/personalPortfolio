import '../styles/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="terminal-footer">
      <div className="footer-line"></div>
      
      <div className="footer-content">
        <div className="contact-wrapper">
          <h2 className="footer-heading glitch-element" data-text="INITIATE_CONTACT">
            INITIATE_CONTACT
          </h2>
          <p className="footer-sub">
            {"> "} System ready for inbound queries. Click below to establish a secure link.
          </p>
          
          <a href="mailto:akhilesh.dahiya@gmail.com" className="reach-out-link">
            <span className="cmd-text">RUN contact_akhilesh.sh</span>
            <div className="btn-glitch-layers">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </a>
        </div>

        <div className="footer-bottom">
          <div className="system-logs">
            <span className="log-item">LOC: WATERLOO_ON</span>
            <span className="log-item">STATUS: ACCEPTING_QUERIES</span>
            <span className="log-item pulse">SESSION: ACTIVE</span>
          </div>
          
          <div className="copyright-info">
            <span className="copy-text">© {currentYear} AKHILESH_DAHIYA</span>
            <span className="footer-cursor">█</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;