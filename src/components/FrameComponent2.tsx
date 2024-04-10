import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./FrameComponent2.css";

export type FrameComponent2Type = {
  /** Style props */
  avatarBadgeAlignSelf?: CSSProperties["alignSelf"];
  avatarBadgePadding?: CSSProperties["padding"];
  avatarBadgeWidth?: CSSProperties["width"];
  frameDivFlex?: CSSProperties["flex"];
  frameDivWidth?: CSSProperties["width"];
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  avatarBadgeAlignSelf,
  avatarBadgePadding,
  avatarBadgeWidth,
  frameDivFlex,
  frameDivWidth,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: avatarBadgeAlignSelf,
      padding: avatarBadgePadding,
      width: avatarBadgeWidth,
    };
  }, [avatarBadgeAlignSelf, avatarBadgePadding, avatarBadgeWidth]);

  const buttonsButton1Style: CSSProperties = useMemo(() => {
    return {
      flex: frameDivFlex,
      width: frameDivWidth,
    };
  }, [frameDivFlex, frameDivWidth]);

  return (
    <div className="buttonsbutton-frame" style={frameDivStyle}>
      <div className="buttonsbutton12" style={buttonsButton1Style}>
        <button className="avatar5">
          <div className="src5">{` `}</div>
          <div className="name5">TA</div>
          <img className="image-icon5" alt="" src="/image@2x.png" />
          <div className="avatarbadge5" />
        </button>
        <div className="text-wrapper">
          <h1 className="text9">MatoPuzzle</h1>
        </div>
        <img className="placeholder-icon5" alt="" src="/placeholder.svg" />
      </div>
    </div>
  );
};

export default FrameComponent2;
