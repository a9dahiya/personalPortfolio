import  { useState } from 'react';
import '../styles/projects.css';
import '../styles/picks.css';

import gow2 from '../assets/GoW2.jpg';
import choose from '../assets/choose.jpg';
import dune from '../assets/dune.jpg';
import expedition from '../assets/expedition.webp';
import mario from '../assets/mario.webp';
import val from '../assets/val.webp';
import beast from '../assets/beast.gif';
import count from '../assets/count.jpeg';
import ecoli from '../assets/ecoli.jpg';
import freebird from '../assets/freebird.jpeg';
import likehim from '../assets/likehim.jpg';
import olympus from '../assets/olympus.jpg';
import shutter from '../assets/shutter.jpg';
import whip from '../assets/whip.jpg';
import boy from '../assets/boy.jpg';
import dead from '../assets/dead.jpg';
import elden from '../assets/elden.jpeg';
import lost from '../assets/lost.jpg';
import prestige from '../assets/prestige.jpg';
import swords from '../assets/swords.jpg';

const picksData = {
  MOVIES: [
    { name: "Shutter Island", sub: "Martin Scorsese", img: shutter },
    { name: "Dead Poets Society", sub: "Peter Weir", img: dead },
    { name: "Whiplash", sub: "Damien Chazelle", img: whip },
    { name: "The Prestige", sub: "Christopher Nolan", img: prestige },
    { name: "That's My Boy", sub: "Sean Anders", img: boy }
  ],
  BOOKS: [
    { name: "Heroes of Olympus", sub: "Rick Riordan", img: olympus },
    { name: "Count of Monte Cristo", sub: "Alexandre Dumas", img: count },
    { name: "Dune", sub: "Frank Herbert", img: dune },
    { name: "A Storm of Swords", sub: "George R.R. Martin", img: swords },
    { name: "Free to Choose", sub: "Milton Friedman", img: choose }
  ],
  SONGS: [
    { name: "Free Bird", sub: "Lynyrd Skynyrd", img: freebird },
    { name: "Beast of Burden", sub: "The Rolling Stones", img: beast },
    { name: "Lost", sub: "Frank Ocean", img: lost },
    { name: "Like Him", sub: "Tyler, The Creator", img: likehim },
    { name: "E. Coli", sub: "The Alchemist", img: ecoli }
  ],
  GAMES: [
    { name: "Elden Ring", sub: "FromSoftware", img: elden },
    { name: "Mario Kart", sub: "Nintendo", img: mario },
    { name: "Valorant", sub: "Riot Games", img: val },
    { name: "Expedition 33", sub: "Sandfall Interactive", img: expedition },
    { name: "God of War 2", sub: "Santa Monica Studio", img: gow2 }
  ]
};

const TopPicks = () => {
  const [activeCat, setActiveCat] = useState('MOVIES');

  return (
    <div className="picks-section">
      <h2 className="picks-header" data-text="SYSTEM_RECOMMENDATIONS">SYSTEM_RECOMMENDATIONS</h2>

      <div className="picks-tabs">
        {Object.keys(picksData).map(cat => (
          <button 
            key={cat} 
            className={activeCat === cat ? 'active' : ''} 
            onClick={() => setActiveCat(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="picks-grid">
        {picksData[activeCat].map((item) => (
          <div key={item.name} className="pick-card">
            <div className="pick-image-container">
              <img src={item.img} alt={item.name} loading="lazy" />
              <div className="scanline"></div>
            </div>
            <div className="pick-info">
              <div className="title-container">
                <h3 className="glitch-element" data-text={item.name}>{item.name}</h3>
              </div>
              <p className="pick-sub">{item.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicks;