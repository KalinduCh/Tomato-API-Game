import { FunctionComponent } from "react";
import ButtonsButton from "../components/ButtonsButton";
import ButtonsFrame from "../components/ButtonsFrame";
import "./CSS/Home.css";

const Home: FunctionComponent = () => {
  return (
    <div className="home">
      <main className="frame-container">
        <img className="root-frame-icon" alt="" src="/root-frame@2x.png" />
        <section className="root-frame" />
      </main>
      <div className="empty-frame">
        <div className="button-frame">
          <ButtonsButton
            avatarBadgeWidth="unset"
            avatarBadgeAlignSelf="stretch"
          />
          <div className="welcome-username-label">
            <div className="welcome-username">{`Welcome {Username}`}</div>
          </div>
        </div>
        <div className="frame-with-io-stats-chart">
          <ButtonsFrame />
        </div>
      </div>
    </div>
  );
};

export default Home;
