import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./TableCell1.css";

export type TableCell1Type = {
  text?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const TableCell1: FunctionComponent<TableCell1Type> = ({
  text,
  propMinWidth,
}) => {
  const textStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <button className="table-cell12">
      <div className="text-and-supporting-text9">
        <div className="text14" style={textStyle}>
          {text}
        </div>
        <div className="supporting-text9">
          Brings all your news into one place
        </div>
      </div>
    </button>
  );
};

export default TableCell1;
