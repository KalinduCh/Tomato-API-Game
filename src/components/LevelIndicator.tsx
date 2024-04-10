import { FunctionComponent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainContainer from "./MainContainer"; // Import the MainContainer component
import "./LevelIndicator.css";

const LevelIndicator: FunctionComponent = () => {
  const navigate = useNavigate();
  const [correctAnswer, setCorrectAnswer] = useState<number>(6); // Set the correct answer

  const handleButtonClick = useCallback(
    (selectedAnswer: number) => {
      // Handle button click based on the selected answer
      if (selectedAnswer === correctAnswer) {
        // Navigate to the "winner" route if the answer is correct
        navigate("/winner");
      } else {
        // Navigate to the "try-again" route if the answer is incorrect
        navigate("/try-again");
      }
    },
    [correctAnswer, navigate]
  );

  return (
    <div className="level-indicator">
      {/* Your existing JSX code */}
      <div className="button-container">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
          <button
            key={number}
            className="number-button"
            onClick={() => handleButtonClick(number)}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LevelIndicator;
