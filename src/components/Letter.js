import { useContext } from 'react';
import React from 'react'
import { boardDefault } from '../words'
import { AppContext } from '../App';

function Letter({letterPosition,atttemptValue}) {
  const {board} = useContext(AppContext);
  const letter = board[atttemptValue][letterPosition];
  return (
    <div className="letter">{letter}</div>
  )
}

export default Letter