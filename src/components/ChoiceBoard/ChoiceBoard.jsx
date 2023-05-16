import React from 'react';
import { FaEraser } from 'react-icons/fa';
import NumberButton from '../NumberButton/NumberButton';

const ChoiceBoard = ({ setClickValue }) => {
 return (
  <div>
   <div className='text-indigo-500 font-bold'>
    <div className='flex flex-col my-5 items-center'>
     {/* row 1 */}
     <div className='flex gap-3'>
      <NumberButton number={1} onClick={() => setClickValue(1)} />
      <NumberButton number={2} onClick={() => setClickValue(2)} />
      <NumberButton number={3} onClick={() => setClickValue(3)} />
     </div>

     {/* row 2 */}
     <div className='flex gap-3'>
      <NumberButton number={4} onClick={() => setClickValue(4)} />
      <NumberButton number={5} onClick={() => setClickValue(5)} />
      <NumberButton number={6} onClick={() => setClickValue(6)} />
     </div>

     {/* row 3 */}
     <div className='flex gap-3'>
      <NumberButton number={7} onClick={() => setClickValue(7)} />
      <NumberButton number={8} onClick={() => setClickValue(8)} />
      <NumberButton number={9} onClick={() => setClickValue(9)} />
     </div>
    </div>
   </div>

   <div className='flex justify-center'>
    <div className='w-1/2 bg-indigo-500 rounded-xl'>
     <button
      className='w-full h-12 flex justify-center items-center'
      onClick={() => setClickValue(0)}
     >
      <span className='text-white'>
       <FaEraser />
      </span>
     </button>
    </div>
   </div>
  </div>
 );
};

export default ChoiceBoard;
