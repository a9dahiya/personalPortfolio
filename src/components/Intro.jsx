  import { useState, useEffect } from 'react';
  import { FaLinkedin, FaGithub, FaEnvelope, FaSpotify } from "react-icons/fa";
  import "../styles/intro.css";
  import img1 from "../assets/img1.jpg";
  import img2 from "../assets/img2.JPG";
  import ecoli from "../assets/ecoli.jpg"; 

  const Intro = () => {
    const [data, setData] = useState(null);
    const DISCORD_ID = "564452756815872050"; 

    useEffect(() => {
      const fetchSpotify = async () => {
        try {
          const response = await fetch(`https://api.lanyard.rest/v1/users/${DISCORD_ID}`);
          const json = await response.json();
          if (json.success) setData(json.data);
        } catch (err) { console.error("Signal lost"); }
      };
      fetchSpotify();
      const interval = setInterval(fetchSpotify, 15000);
      return () => clearInterval(interval);
    }, [DISCORD_ID]);

    const isLive = data && data.listening_to_spotify;
    const spotify = isLive ? data.spotify : {
      song: "E. COLI",
      artist: "The Alchemist",
      album_art_url: ecoli
    };

    return (
      <div className="intro-container">
        {/* LEFT SECTION */}
        <div className="intro-text-wrapper">
          <h1 className="intro-name" data-text="Akhilesh Dahiya">Akhilesh Dahiya</h1>
          <div className="intro-desc">
            <p>Combinatrics & Optimization @ University of Waterloo</p>
            <p>Turning ideas into code, one scalable system at a time</p>
            <p>Peaked Immortal in Valorant</p>
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/akhilesh-dahiya-3307b42a8/" target="_blank" rel="noreferrer" className="social-icon"><FaLinkedin /></a>
            <a href="https://github.com/a9dahiya" target="_blank" rel="noreferrer" className="social-icon"><FaGithub /></a>
            <a href="mailto:akhileshd1976@gmail.com" className="social-icon"><FaEnvelope /></a>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="right-panel">
          <div className="dual-photo-wrapper">
            <div className="photo-frame wide-frame">
              <img src={img1} alt="Landscape" />
              <div className="frame-label">IMG_01.SYS</div>
            </div>
            <div className="photo-frame tall-frame">
              <img src={img2} alt="Portrait" />
              <div className="frame-label">IMG_02.SYS</div>
            </div>
          </div>

          <div className="vinyl-player-glass">
            <div className="vinyl-left">
              <div className="vinyl-disk spinning">
                <img src={spotify.album_art_url} alt="Album Art" className="vinyl-center-art" />
                <div className="vinyl-shine"></div>
              </div>
            </div>
            <div className="vinyl-right">
              <div className="live-tag">
                <FaSpotify className="spot-icon" />
                <span>{isLive ? 'LIVE_SIGNAL' : 'ARCHIVED_PLAYBACK'}</span>
              </div>
              <h3 className="glitch-element" data-text={spotify.song.toUpperCase()}>{spotify.song.toUpperCase()}</h3>
              <p className="artist-name">{spotify.artist}</p>
              <div className="mini-bars">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="m-bar" style={{animationDelay: `${i * 0.1}s`}}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Intro;