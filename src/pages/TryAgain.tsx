import { FunctionComponent } from "react";
import FrameComponent3 from "../components/FrameComponent3";
import Modal from "../components/Modal";
import "./CSS/TimeWrap.css";

const TryAgain: FunctionComponent = () => {
  return (
    <div className="try-again">
      <main className="rectangle-parent4">
        <img className="frame-child9" alt="" src="/root-frame@2x.png" />
        <section className="frame-child10" />
      </main>
      <div className="label-parent3">
        <div className="label6" />
        <div className="hint-text6" />
        <div className="buttonsbutton-container">
          <div className="buttonsbutton5">
            <div className="input-label">
              <div className="avatar3">
                <div className="src3">{` `}</div>
                <div className="name3">TA</div>
                <img
                  className="image-icon3"
                  loading="lazy"
                  alt=""
                  src="/image1@2x.png"
                />
                <div className="avatarbadge3" />
              </div>
            </div>
            <div className="text8">MatoPuzzle</div>
            <img className="placeholder-icon3" alt="" src="/placeholder.svg" />
          </div>
        </div>
        <FrameComponent3 />
      </div>
      <div className="modal1">
        <div className="background-overlay2">
          <div className="background-overlay3" />
        </div>
        <Modal
          image="/image-11@2x.png"
          text="Better luck next time !!"
          inputFieldMega="Cancel"
          placeholder1="/placeholder4.svg"
          text1="Restart"
          placeholder2="/placeholder4.svg"
          propHeight="20px"
          propMinWidth="54px"
          propMinWidth1="57px"
        />
      </div>
    </div>
  );
};

export default TryAgain;
