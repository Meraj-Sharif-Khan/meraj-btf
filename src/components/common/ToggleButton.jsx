import { useState } from "react";

const ToggleButton = () => {
  const [mode, setMode] = useState(false);

  const handleMode = () => {
    setMode(!mode);
  };

  return (
    <div>
      <button
        onClick={() => handleMode()}
        className={`cursor-pointer flex items-center w-[98px] h-[28px] rounded-full transition-colors duration-300 bg-foreground`}
      >
        {/* Circle */}
        <div
          className={`w-[50px] h-full text-white shrink-0 rounded-full transition-all duration-300 bg-primary ${
            mode ? "translate-x-12" : "translate-x-0"
          }`}
        >
          <span className="text-[16px]">
            {mode ? "বাংলা": "ENG" }
          </span>
        </div>

        {/* Text */}
        <span
          className={`ml-1 text-[12px] font-medium transition-colors duration-300 text-[#ffffff] ${
            mode ? "-translate-x-12" : "translate-x-0"
          } `}
        >
          {mode ? "ENG" : "বাংলা"}
        </span>
      </button>
    </div>
  );
};

export default ToggleButton;
