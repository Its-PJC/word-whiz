import { createContext, useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { boardDefault, generateWordSet } from './Words';
import GameOver from './components/GameOver';

export const AppContext = createContext();

function App() {

  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });
  const [wordSet, setWordSet] = useState(new Set());
  const [disabledLetters, setDisabledLetter] = useState([]);
  const [gameOver, setGameOver] = useState({ gameOver: false, guessedWord: false });
  const [correctWord, setCorrectWord] = useState("");

  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord);
    });
  }, []);

  const onSelectLetter = (keyValue) => {
    if (currAttempt.letterPos > 4) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyValue;
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });
  }

  const onDelete = () => {
    if (currAttempt.letterPos === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 });
  }

  const onEnter = () => {
    if (currAttempt.letterPos !== 5) return;

    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[currAttempt.attempt][i];
    }

    if (wordSet.has(currWord.toLowerCase())) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
    } else {
      alert("Word not found");
    }

    if (currWord === correctWord) {
      setGameOver({gameOver:true,guessedWord:true});
    }

    if(currAttempt.attempt === 5){
      setGameOver({gameOver:true,guessedWord:false});
    }
  }
  
  return (
    <div className="App">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <AppContext.Provider value={{ board, setBoard, currAttempt, setCurrAttempt, onSelectLetter, onEnter, onDelete, correctWord, setDisabledLetter, disabledLetters, gameOver, setGameOver }}>
        <div className='game'>
          <Board />
          {gameOver.gameOver ? <GameOver/> : <Keyboard />}
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
