import { useState, useEffect } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import '../styles/chess.css';
import myFace from '../assets/myFace.png'; 

const ChessGame = () => {
  const [game, setGame] = useState(new Chess());
  const [status, setStatus] = useState("SYSTEM_READY // AWAITING_OWNER_INPUT");

  useEffect(() => {
    if (game.isGameOver() || game.turn() === 'w') return;

    const makeBotMove = () => {
      const possibleMoves = game.moves();
      if (possibleMoves.length === 0) return;

      const randomIndex = Math.floor(Math.random() * possibleMoves.length);
      const move = possibleMoves[randomIndex];

      const gameCopy = new Chess(game.fen());
      gameCopy.move(move);
      setGame(gameCopy);
      updateStatus(gameCopy);
    };

    const timeout = setTimeout(makeBotMove, 1200);
    return () => clearTimeout(timeout);
  }, [game]);

  const updateStatus = (gameInstance) => {
    if (gameInstance.isCheckmate()) {
      setStatus(`SESSION_END // CHECKMATE // ${gameInstance.turn() === 'w' ? 'COMPILER_BOT' : 'OWNER'}_WINS`);
    } else if (gameInstance.isDraw()) {
      setStatus("SESSION_END // DRAW_DETECTED");
    } else if (gameInstance.isCheck()) {
      setStatus("STATUS // WARNING // OWNER_IN_CHECK");
    } else {
      setStatus(`STATUS // ${gameInstance.turn() === 'w' ? 'AWAITING_OWNER_INPUT' : 'COMPILER_BOT_THINKING...'}`);
    }
  };

  function onDrop(sourceSquare, targetSquare) {
    if (game.turn() === 'b') return false; 

    try {
      const gameCopy = new Chess(game.fen());
      const move = gameCopy.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: 'q', 
      });

      if (move === null) return false;

      setGame(gameCopy);
      updateStatus(gameCopy);
      return true;
    } catch (error) {
      return false; 
    }
  }

  function resetGame() {
    setGame(new Chess());
    setStatus("SYSTEM_READY // AWAITING_OWNER_INPUT");
  }

  return (
    <div className="chess-section">
      <h2 className="chess-header glitch-text" data-text="Chess_With_Me">
        Chess_With_Me
      </h2>

      <div className="chess-main-layout">
        <div className="chess-container">
          <div className="chess-board-frame">
            <Chessboard 
              position={game.fen()} 
              onPieceDrop={onDrop}
              boardOrientation="white"
              animationDuration={300}
              showBoardNotation={true}
              customDarkSquareStyle={{ backgroundColor: '#1f2937' }}
              customLightSquareStyle={{ backgroundColor: '#f3f4f6' }}
            />
          </div>
        </div>

        <div className="bot-avatar-container">
          <div className="stickman-wrapper">
            <svg viewBox="0 0 150 200" className="stickman-svg">
              <defs>
                <clipPath id="faceCircle">
                  <circle cx="75" cy="50" r="45" />
                </clipPath>
              </defs>
              
              <image 
                href={myFace} 
                x="30" 
                y="5" 
                width="90" 
                height="90" 
                clipPath="url(#faceCircle)"
                preserveAspectRatio="xMidYMid slice"
              />
              <circle cx="75" cy="50" r="45" stroke="white" strokeWidth="3" fill="none" />
              
              <line x1="75" y1="95" x2="75" y2="140" stroke="white" strokeWidth="3" />
              
              <line x1="75" y1="140" x2="45" y2="190" stroke="white" strokeWidth="3" />
              
              <line x1="75" y1="140" x2="105" y2="190" stroke="white" strokeWidth="3" />
            </svg>
            <div className="bot-tag">PLAY AGAINST MY OWN CHESS BOT</div>
          </div>
        </div>
      </div>

      <div className="terminal-status">
        <p className="status-text"> {status}</p>
        <button className="reset-btn" onClick={resetGame}>[ REBOOT_SESSION ]</button>
      </div>
    </div>
  );
};

export default ChessGame;