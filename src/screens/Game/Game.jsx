import React, { useState } from 'react';
import { Grid, ChoiceBoard, Button } from '../../components/index.js';
import {
 arrayDeepCopy,
 checkBoard,
 checkPlayerWon,
 createSudokuGrid,
 solveSudoku,
} from '../../utility';
import { AiOutlineCheck, AiOutlineClear } from 'react-icons/ai';
import { RiRestartLine } from 'react-icons/ri';

const hardMaxEmptyCells = 50;

const Game = () => {
 const [grid, setGrid] = useState(null);
 const [startingGrid, setStartingGrid] = useState(null);
 const [clickValue, setClickValue] = useState(1);

 // Game Score logic
 const [gameMode, setGameMode] = useState(hardMaxEmptyCells);
 const [movesTaken, setMovesTaken] = useState(0);
 const [hintsTaken, setHintsTaken] = useState(0);
 const [isPlayerWon, setIsPlayerWon] = useState(false);
 const [pressedSolve, setPressedSolve] = useState(false);

 // Logic for modal
 const [showNoSolutionFoundModal, setShowNoSolutionFoundModal] =
  useState(false);

 const handleSolve = () => {
  let solvedBoard = arrayDeepCopy(grid);
  let solvedStatus = solveSudoku(solvedBoard);
  if (solvedStatus === false) {
   setShowNoSolutionFoundModal((show) => !show);
   return;
  }

  let newHints = 0;
  for (let i = 0; i < 9; i++) {
   for (let j = 0; j < 9; j++) {
    if (grid[i][j].value === 0) {
     newHints++;
     solvedBoard[i][j].isHinted = true;
     solvedBoard[i][j].isModifiable = false;
    }
   }
  }

  setHintsTaken((hints) => hints + newHints);
  setIsPlayerWon(true);
  setPressedSolve(true);
  setGrid(solvedBoard);
 };

 const handleNewGame = (maxEmptyCellsCount) => {
  // Waiting for the function to return the grid
  let newSudokuGrid = createSudokuGrid(maxEmptyCellsCount);

  setStartingGrid(arrayDeepCopy(newSudokuGrid));
  setGrid(arrayDeepCopy(newSudokuGrid));

  // Setting the game mode with maxEmptyCellsCount
  setGameMode(maxEmptyCellsCount);

  // Reseting the values
  setMovesTaken(0);
  setHintsTaken(0);
  setIsPlayerWon(false);
  setPressedSolve(false);
 };

 const handleClearBoard = () => {
  setIsPlayerWon(false);
  setGrid(arrayDeepCopy(startingGrid));
 };

 const handleCellClick = (row, column, isModifiable) => {
  if (!isModifiable) {
   return;
  }

  // moves registered when the value is not 0
  if (clickValue !== 0) setMovesTaken((moves) => moves + 1);

  let newGrid = arrayDeepCopy(grid);
  newGrid[row][column].value = clickValue;

  // Marking the node valid or invalid depending on the grid
  checkBoard(newGrid);

  // Checking if the player has won
  let playerWon = checkPlayerWon(newGrid);
  if (playerWon) {
   setIsPlayerWon(true);
  }

  // setting the value to the grid and also to the local storage
  setGrid(newGrid);
 };

 // If we donot have anything in the local storage
 if (grid == null && startingGrid == null) handleNewGame(gameMode);

 return (
  <div className='container mx-auto grid grid-cols-10 items-center h-screen'>
   <div className='col-span-5'>
    <h1 className='text-indigo-500 font-bold text-2xl text-center mb-5'>
     Sudoku
    </h1>

    {showNoSolutionFoundModal && (
     <div className='fixed bg-white shadow-xl h-8 flex justify-center items-center p-10 rounded-lg m-5 top-0 right-0'>
      <h1 className='text-gray-500'>Não foi possível resolver o puzzle!</h1>
     </div>
    )}

    <Grid handleCellClick={handleCellClick} grid={grid} />
   </div>

   <div className='col-span-5'>
    <div className='flex justify-center items-center gap-6'>
     <Button
      onClick={handleClearBoard}
      text='Limpar'
      icon={<AiOutlineClear />}
     />
     <Button onClick={handleSolve} text='Resolver' icon={<AiOutlineCheck />} />
     <Button
      onClick={() => handleNewGame(hardMaxEmptyCells)}
      text='Novo Jogo'
      icon={<RiRestartLine />}
     />
    </div>
    <div>
     <ChoiceBoard setClickValue={setClickValue} />
    </div>
   </div>
  </div>
 );
};

export default Game;
