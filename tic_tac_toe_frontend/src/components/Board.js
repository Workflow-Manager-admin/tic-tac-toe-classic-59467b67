import React from 'react';

// PUBLIC_INTERFACE
const Board = ({ squares, onSquareClick, winner }) => {
  const renderSquare = (i) => {
    return (
      <button 
        className={`board-square ${squares[i] ? 'filled' : ''} ${winner && winner.line.includes(i) ? 'winner' : ''}`}
        onClick={() => onSquareClick(i)}
        disabled={squares[i] || winner}
      >
        {squares[i]}
      </button>
    );
  };

  return (
    <div className="game-board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
