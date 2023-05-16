import React from 'react';
import { Node } from '../index.js';

const Grid = ({ grid, handleCellClick }) => {
 return (
  <table className='grid-table border-4 mx-auto'>
   <tbody>
    {grid &&
     grid.map((row, rowIndex) => {
      return (
       <tr className='row' key={rowIndex}>
        {row.map((cell, columnIndex) => {
         return (
          <Node
           key={rowIndex + '-' + columnIndex}
           cell={cell}
           handleClickCallback={handleCellClick}
          />
         );
        })}
       </tr>
      );
     })}
   </tbody>
  </table>
 );
};

export default Grid;
