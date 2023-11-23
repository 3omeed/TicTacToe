import React, { useEffect, useRef, useState } from 'react';
import './TicTacToe.css';
import Cell from '../Cell/Cell';
// import './Cell.css';

// function setCells() {}

const winsCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const TicTacToe = () => {
  const [cells, setCells] = useState(['', '', '', '', '', '', '', '', '']);
  const [go, setGo] = useState('cross');
  const [winningMsg, setWinningMsg] = useState('')

  console.log(cells);

  const resetHandler = () => {
    setCells(['', '', '', '', '', '', '', '', '']);
    setWinningMsg("")
  };

  useEffect(() => {
    winsCombos.forEach((combo) => {
      const circleWin = combo.every((cell) => cells[cell] === "circle");
      const crossWin = combo.every((cell) => cells[cell] === "cross");

      if (circleWin) {
        console.log('Circle Win');
        setWinningMsg('circle Wins')
      } else if (crossWin) {
        console.log('Cross Win');
        setWinningMsg('circle Wins')
      } else if (!circleWin && !crossWin && cells.every((cell) => cell !== "")) {
        console.log('Draw');
        setWinningMsg('It\'s a Draw')
      }
    })
  }, [cells])

  const checkWin = () => {
    // if (cells[0] === cells[1] && cells[1] === cells[2] && cells[2] !== '') {
    //   console.log(`${cells[0]} Wins`);
    // } else if (
    //   cells[3] === cells[4] &&
    //   cells[4] === cells[5] &&
    //   cells[5] !== ''
    // ) {
    //   console.log(`${cells[3]} Wins`);
    // } else if (
    //   cells[6] === cells[7] &&
    //   cells[7] === cells[8] &&
    //   cells[8] !== ''
    // ) {
    //   console.log(`${cells[6]} Wins`);
    // } else if (
    //   cells[0] === cells[3] &&
    //   cells[3] === cells[6] &&
    //   cells[6] !== ''
    // ) {
    //   console.log(`${cells[6]} Wins`);
    // } else if (
    //   cells[1] === cells[4] &&
    //   cells[4] === cells[7] &&
    //   cells[7] !== ''
    // ) {
    //   console.log(`${cells[4]} Wins`);
    // } else if (
    //   cells[2] === cells[5] &&
    //   cells[5] === cells[8] &&
    //   cells[8] !== ''
    // ) {
    //   console.log(`${cells[8]} Wins`);
    // } else if (
    //   cells[0] === cells[4] &&
    //   cells[4] === cells[8] &&
    //   cells[8] !== ''
    // ) {
    //   console.log(`${cells[8]} Wins`);
    // } else if (
    //   cells[2] === cells[4] &&
    //   cells[4] === cells[6] &&
    //   cells[6] !== ''
    // ) {
    //   console.log(`${cells[2]} Wins`);
    // }
  };

  checkWin();

  return (
    <div className="box">
      <h1>
        Tic Tac Toe Game in <span>React</span>
      </h1>
      <div className="board">
        {cells.map((cell, index) => {
          return (
            <Cell
              go={go}
              setGo={setGo}
              key={index}
              cells={cells}
              setCells={setCells}
              id={index}
              cell={cell}
              winningMsg = {winningMsg}
            />
          );
        })}
      </div>
      {!winningMsg?  <p>{`It's Now ${go} Turn!`}</p> : <p>{winningMsg}</p>}

       <button className="reset" onClick={resetHandler}>
        {' '}
        Reset
      </button>
    </div>
  );
};

export default TicTacToe;
