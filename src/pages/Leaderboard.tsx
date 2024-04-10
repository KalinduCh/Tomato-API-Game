import { FunctionComponent } from "react";
import ButtonsButton1 from "../components/ButtonsButton1";
import Content from "../components/Content";
import "./CSS/Leaderboard.css";

const Leaderboard: FunctionComponent = () => {
  return (
    <div className="leaderboard">
      <main className="rectangle-container">
        <img className="rectangle-icon" alt="" src="/root-frame@2x.png" />
        <section className="frame-child1" />
      </main>
      <div className="label-group">
        <div className="label2" />
        <div className="hint-text2" />
        <div className="buttonsbutton-group">
          <ButtonsButton1 />
          <div className="leader-board-wrapper">
            <h3 className="leader-board">Leader board</h3>
          </div>
        </div>
        <div className="content-wrapper">
          <Content />
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
