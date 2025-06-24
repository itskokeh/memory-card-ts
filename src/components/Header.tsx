import './Header.css';

interface HeaderProps {
  currentScore: number;
  bestScore: number;
};

const Header = ({ currentScore, bestScore }: HeaderProps) => {
  return (
    <div className="header">
      <div className="header-left">
        <h1>Memory Card Game</h1>
      </div>
      <div className="scoreboard">
        <p className="best-score">
          Best Score: {bestScore}
        </p>
        <p className="current-score">
          Current Score: {currentScore}
        </p>
      </div>
    </div>
  );
};

export default Header;