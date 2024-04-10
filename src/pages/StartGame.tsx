import { FunctionComponent } from "react";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import "./CSS/StartGame.css";

const StartGame: FunctionComponent = () => {
  return (
    <div className="start-game">
      <main className="rectangle-parent">
        <img className="frame-child" alt="" src="/root-frame@2x.png" />
        <section className="frame-item" />
      </main>
      <div className="frame-group">
        <div className="frame-div">
          <FrameComponent2 />
          <h1 className="choose-your-diffeculty">
            Choose Your Diffeculty Level
          </h1>
        </div>
        <div className="frame-wrapper">
          <FrameComponent1 />
        </div>
      </div>
    </div>
  );
};

export default StartGame;
