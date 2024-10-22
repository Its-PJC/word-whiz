import React, { useState } from 'react'
import { boardDefault } from '../words'

function Board() {
    const [board,setBoard] = useState(boardDefault);
  return (
    // <div>Board</div>
    <div className="board">
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
    </div>
  )
}

export default Board