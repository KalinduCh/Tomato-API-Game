import { FunctionComponent } from "react";
import LevelIndicator from "../components/LevelIndicator";
import "./CSS/TimeWrap.css";

const TimeWrap: FunctionComponent = () => {
  return (
    <div className="time-wrap">
      <main className="rectangle-parent2">
        <img className="frame-child5" alt="" src="/root-frame@2x.png" />
        <section className="frame-child6" />
      </main>
      <div className="label-parent1">
        <div className="label4" />
        <div className="hint-text4" />
        <div className="button-pair1">
          <div className="buttonsbutton3">
            <div className="source-image">
              <div className="avatar1">
                <div className="src1">{` `}</div>
                <div className="name1">TA</div>
                <img
                  className="image-icon1"
                  loading="lazy"
                  alt=""
                  src="/image1@2x.png"
                />
                <div className="avatarbadge1" />
              </div>
            </div>
            <div className="mega-input-base">MatoPuzzle</div>
            <img className="placeholder-icon1" alt="" src="/placeholder.svg" />
          </div>
        </div>
        <LevelIndicator />
      </div>
    </div>
  );
};

export default TimeWrap;
