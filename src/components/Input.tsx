import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./Input.css";

export type InputType = {
  biLockAltInput?: string;

  /** Style props */
  propMarginTop?: CSSProperties["marginTop"];
  propMinWidth?: CSSProperties["minWidth"];
};

const Input: FunctionComponent<InputType> = ({
  biLockAltInput,
  propMarginTop,
  propMinWidth,
}) => {
  const inputStyle: CSSProperties = useMemo(() => {
    return {
      marginTop: propMarginTop,
    };
  }, [propMarginTop]);

  const biLockAltStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="input2" style={inputStyle}>
      <div className="second-lock-icon">
        <img className="bilockalt-icon1" alt="" src="/bilockalt.svg" />
      </div>
      <div className="bi-lock-alt" style={biLockAltStyle}>
        {biLockAltInput}
      </div>
    </div>
  );
};

export default Input;
