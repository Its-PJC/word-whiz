import Letter from './Letter';

function Board() {
  return (
    // <div>Board</div>
    <div className="board">
        <div className="row">
          <Letter letterPosition={0} atttemptValue={0}/>
          <Letter letterPosition={1} atttemptValue={0}/>
          <Letter letterPosition={2} atttemptValue={0}/>
          <Letter letterPosition={3} atttemptValue={0}/>
          <Letter letterPosition={4} atttemptValue={0}/>
        </div>
        <div className="row">
          <Letter letterPosition={0} atttemptValue={1}/>
          <Letter letterPosition={1} atttemptValue={1}/>
          <Letter letterPosition={2} atttemptValue={1}/>
          <Letter letterPosition={3} atttemptValue={1}/>
          <Letter letterPosition={4} atttemptValue={1}/>
        </div>
        <div className="row">
          <Letter letterPosition={0} atttemptValue={2}/>
          <Letter letterPosition={1} atttemptValue={2}/>
          <Letter letterPosition={2} atttemptValue={2}/>
          <Letter letterPosition={3} atttemptValue={2}/>
          <Letter letterPosition={4} atttemptValue={2}/>
        </div>
        <div className="row">
          <Letter letterPosition={0} atttemptValue={3}/>
          <Letter letterPosition={1} atttemptValue={3}/>
          <Letter letterPosition={2} atttemptValue={3}/>
          <Letter letterPosition={3} atttemptValue={3}/>
          <Letter letterPosition={4} atttemptValue={3}/>
        </div>
        <div className="row">
          <Letter letterPosition={0} atttemptValue={4}/>
          <Letter letterPosition={1} atttemptValue={4}/>
          <Letter letterPosition={2} atttemptValue={4}/>
          <Letter letterPosition={3} atttemptValue={4}/>
          <Letter letterPosition={4} atttemptValue={4}/>
        </div>
        <div className="row">
          <Letter letterPosition={0} atttemptValue={5}/>
          <Letter letterPosition={1} atttemptValue={5}/>
          <Letter letterPosition={2} atttemptValue={5}/>
          <Letter letterPosition={3} atttemptValue={5}/>
          <Letter letterPosition={4} atttemptValue={5}/>
        </div>
    </div>
  )
}

export default Board