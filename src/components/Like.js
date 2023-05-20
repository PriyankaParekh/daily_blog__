import React, { useState} from "react";
export default function Like() {

  const [bgColor, setBgColor] = useState("white");
  const handleLike = () => {
    setBgColor("red");
  };

  function Icon({ fill }) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><path fill={fill} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8Z"/></svg>
    );
  }

  return (
    <div>
      <button
        onClick={handleLike}
        style={{ border: "none", background: "none" }}
      >
        <Icon fill={bgColor} />
      </button>
      </div>
  );
}
