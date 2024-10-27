import { useContext, useEffect } from 'react';
import React from 'react'
import { AppContext } from '../App';

function Letter({letterPosition,attemptValue}) {
  const {board,correctWord, currAttempt,disabledLetters,setDisabledLetter} = useContext(AppContext);
  const letter = board[attemptValue][letterPosition];

  const correct = correctWord[letterPosition] === letter;
  const almost = !correct && letter !== "" && correctWord.includes(letter);

  const letterState = 
                currAttempt.attempt > attemptValue && 
                (correct ? "correct" : almost ? "almost" : "error");

  useEffect(()=>{
    if(letter !== "" && !correct && !almost){
      setDisabledLetter((prev)=>[...prev,letter]);
    }
  },[currAttempt.attempt]);

  return (
    <div className="letter" id={letterState}>
      {""}
      {letter}
    </div>
  )
}

export default Letter