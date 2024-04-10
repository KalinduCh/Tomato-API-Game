import { FunctionComponent } from "react";
import FrameComponent3 from "../components/FrameComponent3";
import Modal from "../components/Modal";
import "./CSS/Winner.css";

const Winner: FunctionComponent = () => {
  return (
    <div className="winner">
      <main className="rectangle-parent3">
        <img className="frame-child7" alt="" src="/root-frame@2x.png" />
        <section className="frame-child8" />
      </main>
      <div className="label-parent2">
        <div className="label5" />
        <div className="hint-text5" />
        <div className="buttonsbutton-wrapper">
          <div className="buttonsbutton4">
            <div className="avatar-wrapper">
              <div className="avatar2">
                <div className="src2">{` `}</div>
                <div className="name2">TA</div>
                <img
                  className="image-icon2"
                  loading="lazy"
                  alt=""
                  src="/image1@2x.png"
                />
                <div className="avatarbadge2" />
              </div>
            </div>
            <div className="text7">MatoPuzzle</div>
            <img className="placeholder-icon2" alt="" src="/placeholder.svg" />
          </div>
        </div>
        <FrameComponent3 />
      </div>
      <div className="modal">
        <div className="background-overlay">
          <div className="background-overlay1" />
        </div>
        <Modal
          image="/image-1@2x.png"
          text="Congratulations !!"
          supportingText="You have completed the level 01"
          inputFieldMega="Retry"
          placeholder1="/placeholder3.svg"
          text1="Next Level"
          placeholder2="/placeholder3.svg"
        />
      </div>
    </div>
  );
};

export default Winner;
