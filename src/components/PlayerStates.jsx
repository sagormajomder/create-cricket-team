import React from 'react';

export default function PlayerStates({ toggle, onToggle }) {
  const selectedBtnStyle = 'text-body bg-primary font-semibold';

  function handleBtnClick() {
    onToggle(t => !t);
  }

  return (
    <div className='flex flex-col sm:flex-row gap-4 items-center justify-between py-5'>
      <h2 className='text-2xl font-bold'>
        {toggle ? 'Selected Players' : 'Available Players'}
      </h2>
      <div className='text-gray-500'>
        <button
          onClick={handleBtnClick}
          className={`border border-gray-400 px-5 border-r-0 rounded-r-none py-1 rounded-lg  ${
            toggle ? '' : selectedBtnStyle
          }
          `}>
          Available
        </button>
        <button
          onClick={handleBtnClick}
          className={`border border-gray-400 border-l-0 rounded-lg rounded-l-none  px-5 py-1 ${
            toggle ? selectedBtnStyle : ''
          }
          `}>
          Selected (0)
        </button>
      </div>
    </div>
  );
}
