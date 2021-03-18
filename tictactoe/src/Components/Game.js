import React, { useState } from 'react';
import { calculateWinner } from '../helpers';
import Board from './Board';

const styles = {
  width: '200px',
  margin: '20px auto'
};

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
 
  const handleClick = i => {
    //used to implement time travel
    const timeInHistory = history.slice(0, stepNumber + 1);
    //remembers the previous step so you can attempt next step. 
    const current = timeInHistory[stepNumber];
    const squares = [...current];
    // If user click an occupied square or if game is won, return
    if (winner || squares[i]) return;
    // Put an X or an O in the clicked square
    squares[i] = xIsNext ? 'X' : 'O';
    // makes sure if x is chosen, then O would be next. //
    //down below is used to set time in history. 
    setHistory([...timeInHistory, squares]);
    setStepNumber(timeInHistory.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = step => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  const renderMoves = () =>
  //renders out the buttons when you jump back and forth through time. //
    history.map((_step, move) => {
      const destination = move ? `Got to move #${move}` : 'Go to start';
      return (
          //gives the function of what move is next.  (go to move 1,2, & etc)
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });

  return (
    <>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div style={styles}>
        {winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}
        {renderMoves()}
      </div>
    </>
  );
};

export default Game;