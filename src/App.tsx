import { useState } from 'react';
import Header from './components/Header';
import MemoryGame from './components/MemoryGame';
import './App.css';

const App = () => {
  const [currentScore, setCurrentScore] = useState<number>(0);
  const [bestScore, setBestScore] = useState<number>(0);
  const scoreUpdateHandler = (score: number, isReset: boolean) => {
    if (isReset) {
      if (currentScore > bestScore) {
        setBestScore(currentScore);
      }
      setCurrentScore(0);
    } else {
      setCurrentScore(score);
    }
  }
  return (
    <div className='container'>
      <Header currentScore={currentScore} bestScore={bestScore}/>
      <MemoryGame onScoreUpdate={scoreUpdateHandler}/>
    </div>
  )
}

export default App;
