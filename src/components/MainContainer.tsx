// MainContainer.tsx
import React, { FunctionComponent } from "react";
import "./MainContainer.css";

type MainContainerProps = {
  onButtonClick?: (selectedAnswer: number) => void;
  selectedAnswer: number | null;
};

const MainContainer: FunctionComponent<MainContainerProps> = ({ onButtonClick, selectedAnswer }) => {
  return (
    <div className="main-container">
      <div className="verification-code-input-field">
        <div className="input-with-label3">
          <div className="label11">Secure code</div>
          <div className="input5">
            <div className="numbered-buttons">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
                <button
                  key={number}
                  className={selectedAnswer === number ? "number-button selected" : "number-button"}
                  onClick={() => onButtonClick && onButtonClick(number)}
                >
                  {number}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="hint-text10">This is a hint text to help user.</div>
      </div>
    </div>
  );
};

export default MainContainer;
