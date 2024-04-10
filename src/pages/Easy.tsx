import React, { FunctionComponent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainContainer from "../components/MainContainer";
import "./CSS/Easy.css";
import ReactAudioPlayer from "react-audio-player";

// Define MainContainerProps type
type MainContainerProps = {
  onButtonClick?: (selectedAnswer: number) => void;
  selectedAnswer: number | null;
};

const Easy: FunctionComponent = () => {
  const navigate = useNavigate();
  const [isMuted, setIsMuted] = useState(false);
  const [timer, setTimer] = useState(40); // Timer set to 40 seconds
  const [questionImages, setQuestionImages] = useState<string[]>([]); // State to store question images
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  // Load all question images from the API
  useEffect(() => {
    fetchQuestionImages();
  }, []);

  const fetchQuestionImages = async () => {
    try {
      const response = await fetch("https://marcconrad.com/uob/tomato/api.php");
      if (!response.ok) {
        throw new Error("Failed to fetch question images");
      }
      const data = await response.json();
      const images = data.map((item: any) => item.imageUrl);
      setQuestionImages(images);
    } catch (error) {
      console.error("Error loading images:", error);
    }
  };

  // Decrement timer every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, []);

  // Navigate to "/try-again" when timer reaches 0
  useEffect(() => {
    if (timer === 0) {
      navigate("/try-again");
    }
  }, [timer, navigate]);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const handleAnswerSelection = (answer: number) => {
    setSelectedAnswer(answer);
    // Check if the selected answer is 8
    if (answer === 8) {
      // Navigate to "/winner" if the answer is 8
      navigate("/winner");
    } else {
      // Otherwise, navigate to "/try-again"
      navigate("/try-again");
    }
  };

  return (
    <div className="easy">
      {/* Use ReactAudioPlayer to play music tracks */}
      <ReactAudioPlayer
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
        autoPlay
        loop
        muted={isMuted}
      />

      <main className="frame-main">
        <img className="frame-child2" alt="" src="/root-frame@2x.png" />
        <section className="frame-child3" />
      </main>
      <div className="label-container">
        <div className="label3" />
        <div className="hint-text3" />
        <div className="rectangle-parent1">
          
          <div className="rectangle-div">
            {questionImages.map((imageUrl, index) => {
              // Extract the solution from the file name
              const solution = parseInt(imageUrl.match(/(\d+)\.png$/)![1]);
              return (
                <div key={index}>
                  <img src={imageUrl} alt={`Question ${index + 1}`} />
                  <button onClick={() => handleAnswerSelection(solution)}>
                    {solution}
                  </button>
                </div>
              );
            })}
          </div>
          
          <div className="level-01-wrapper">
            <div className="level-01">Level 01</div>
          </div>
          
          <div className="timer-lives-container">
            <div className="timer-parent">
              <div className="timer">Timer: {timer} S</div>
              <div className="lives"></div>
              <button className="mute-button" onClick={toggleMute}>
                {isMuted ? "Unmute" : "Mute"}
              </button>
            </div>
          </div>
           <div className="rectangle-wrapper">
                  <img
                    className="frame-child4"
                    loading="lazy"
                    alt=""
                    src="/rectangle-4@2x.png"
                  />
                </div>
          <div className="input-verification-field">
            <div className="input-mega">
              <div className="select-the-correct">
                Select the correct answer
              </div>
            </div>
          </div>
          {/* Pass onButtonClick handler and selectedAnswer to MainContainer */}
          <MainContainer
            onButtonClick={handleAnswerSelection}
            selectedAnswer={selectedAnswer}
          />
        </div>
      </div>
    </div>
  );
};

export default Easy;
