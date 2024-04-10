import { FunctionComponent } from "react";
import FrameComponent2 from "../components/FrameComponent2";
import Column from "../components/Column";
import "./CSS/Profile.css";

const Profile: FunctionComponent = () => {
  return (
    <div className="profile">
      <main className="rectangle-group">
        <img className="frame-inner" alt="" src="/root-frame@2x.png" />
        <section className="rectangle-section" />
      </main>
      <div className="label-parent">
        <div className="label1" />
        <div className="hint-text1" />
        <FrameComponent2
          avatarBadgeAlignSelf="unset"
          avatarBadgePadding="unset"
          avatarBadgeWidth="743px"
          frameDivFlex="unset"
          frameDivWidth="517px"
        />
        <div className="my-profile-wrapper">
          <h3 className="my-profile">My Profile</h3>
        </div>
        <form className="content">
          <div className="column">
            <div className="table-cell">
              <div className="text-and-supporting-text">
                <div className="text">Username</div>
                <div className="supporting-text">
                  Brings all your news into one place
                </div>
              </div>
            </div>
            <div className="table-cell1">
              <div className="text-and-supporting-text1">
                <div className="text1">Spent time</div>
                <div className="supporting-text1">
                  Brings all your news into one place
                </div>
              </div>
            </div>
            <div className="table-cell2">
              <div className="text-and-supporting-text2">
                <div className="text2">Rank</div>
                <div className="supporting-text2">
                  Brings all your news into one place
                </div>
              </div>
            </div>
            <div className="table-cell3">
              <div className="text-and-supporting-text3">
                <div className="text3">Best time</div>
                <div className="supporting-text3">
                  Brings all your news into one place
                </div>
              </div>
            </div>
            <div className="table-cell4">
              <div className="text-and-supporting-text4">
                <div className="text4">Games played</div>
                <div className="supporting-text4">
                  Brings all your news into one place
                </div>
              </div>
            </div>
            <div className="table-cell5">
              <div className="text-and-supporting-text5">
                <div className="text5">Games won</div>
                <div className="supporting-text5">
                  Brings all your news into one place
                </div>
              </div>
            </div>
          </div>
          <Column />
        </form>
      </div>
    </div>
  );
};

export default Profile;
