const NumberButton = ({ number, onClick }) => {
 return (
  <button className='w-16 h-20 bg-indigo-50 rounded-xl mb-1' onClick={onClick}>
   <span className='text-indigo-500 font-bold text-md'>{number}</span>
  </button>
 );
};

export default NumberButton;
