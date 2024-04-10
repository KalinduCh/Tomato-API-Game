import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./Modal.css";

export type ModalType = {
  image?: string;
  text?: string;
  supportingText?: string;
  inputFieldMega?: string;
  placeholder1?: string;
  text1?: string;
  placeholder2?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const Modal: FunctionComponent<ModalType> = ({
  image,
  text,
  supportingText,
  inputFieldMega,
  placeholder1,
  text1,
  placeholder2,
  propHeight,
  propMinWidth,
  propMinWidth1,
}) => {
  const supportingTextStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const inputFieldMegaStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const text2Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className="modal2">
      <div className="content3">
        <img className="image-icon7" alt="" src={image} />
      </div>
      <div className="modal-header">
        <div className="content4">
          <img className="featured-icon" alt="" src="/featured-icon.svg" />
          <div className="text-and-supporting-text24">
            <div className="text33">{text}</div>
            <div className="supporting-text24" style={supportingTextStyle}>
              {supportingText}
            </div>
          </div>
        </div>
        <div className="button-close-x">
          <img className="x-close-icon" alt="" src="/xclose.svg" />
        </div>
        <div className="padding-bottom" />
        <img className="divider-icon" alt="" src="/divider.svg" />
      </div>
      <div className="modal-actions">
        <div className="divider-wrap">
          <img className="divider-icon1" alt="" src="/divider.svg" />
        </div>
        <div className="content5">
          <button className="buttonsbutton18">
            <img className="copy-01-icon" alt="" src="/copy01.svg" />
            <div className="text-padding">
              <div className="input-field-mega" style={inputFieldMegaStyle}>
                {inputFieldMega}
              </div>
            </div>
            <img className="placeholder-icon8" alt="" src="/placeholder2.svg" />
          </button>
          <button className="buttonsbutton19">
            <img className="placeholder-icon9" alt="" src={placeholder1} />
            <div className="text-padding1">
              <div className="text34" style={text2Style}>
                {text1}
              </div>
            </div>
            <img className="placeholder-icon10" alt="" src={placeholder2} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
