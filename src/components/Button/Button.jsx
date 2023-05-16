import React from 'react';

const Button = ({ text, type, onClick, icon }) => {
 return (
  <div className='w-fit flex flex-col items-center'>
   <div className='bg-indigo-50 w-fit rounded-full'>
    <button className='w-8 h-8' onClick={onClick} type={type}>
     <span className='text-indigo-500 flex justify-center items-center'>
      {icon}
     </span>
    </button>
   </div>
   <div>
    <span className='text-indigo-400 font-bold text-sm'>{text}</span>
   </div>
  </div>
 );
};

export default Button;
