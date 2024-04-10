import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./ButtonsButton.css";

export type ButtonsButtonType = {
  /** Style props */
  avatarBadgeWidth?: CSSProperties["width"];
  avatarBadgeAlignSelf?: CSSProperties["alignSelf"];
};

const ButtonsButton: FunctionComponent<ButtonsButtonType> = ({
  avatarBadgeWidth,
  avatarBadgeAlignSelf,
}) => {
  const buttonsButtonStyle: CSSProperties = useMemo(() => {
    return {
      width: avatarBadgeWidth,
      alignSelf: avatarBadgeAlignSelf,
    };
  }, [avatarBadgeWidth, avatarBadgeAlignSelf]);

  return (
    <div className="buttonsbutton6" style={buttonsButtonStyle}>
      <button className="avatar4">
        <div className="src4">{` `}</div>
        <div className="name4">TA</div>
        <img className="image-icon4" alt="" src="/image@2x.png" />
        <div className="avatarbadge4" />
      </button>
      <div className="input-field-frame-wrapper">
        <h1 className="input-field-frame">MatoPuzzle</h1>
      </div>
      <img className="placeholder-icon4" alt="" src="/placeholder.svg" />
    </div>
  );
};

export default ButtonsButton;
