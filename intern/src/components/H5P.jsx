import React, { useState } from 'react';

// import './H5P.css';
// import reactLogo from './assets/react.svg'

export const H5P = ({ icon, label , popup }) => {
  const [showPopover, setShowPopover] = useState(false);

  return (
    <div className="h5p-container p-1 flex items-center justify-start bg-blue-50 rounded-lg border border-blue-50 mb-3" style={{width:"400px" , height:"70px"}}>
      <div className="img-container bg-blue-100 rounded-lg p-2">
        <img src={icon} alt="H5P" className="h5p-img w-10 h-10 bg-E6F1FF" />
      </div>
      <div className="relative text-container p-4 font-arial">
        <span
          onClick={() => setShowPopover(!showPopover)}
          className={`cursor-pointer ${showPopover ? 'text-blue-500' : ''}`}
          onMouseLeave={()=>showPopover==true?setShowPopover(!showPopover) : setShowPopover(showPopover)}
        >
          {label}
        </span>
        {showPopover && (
          <div className="absolute  bg-gray-800 bg-opacity-50 rounded-2xl shadow-lg">
            <div className="bg-white p-2 rounded-2xl font-serif" >
              {popup}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default H5P;
