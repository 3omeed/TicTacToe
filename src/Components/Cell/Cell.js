import React from 'react';
import './Cell.css';

const cross = 'X';
const circle = 'O';

const Cell = ({ id, go, setGo, cells, setCells, cell , winningMsg}) => {
  const handleCellChange = (cellType) => {
    const copyCells = [...cells];
    copyCells[id] = cellType;
    setCells(copyCells);
  };

  const handleClick = (e) => {
    const notTaken = !cells[id]

    if (notTaken && !winningMsg) {
      if (go === 'circle') {
        handleCellChange('circle');
        setGo('cross');
      } else if (go === 'cross') {
        handleCellChange('cross');
        setGo('circle');
      } 
    }
  };
  return (
    <div>
      <div className="square" onClick={handleClick}>
       <div className={cell}> {cell ? (cell === 'circle'? "O" : "X") : ""}</div>
      </div>
    </div>
  );
};

export default Cell;
