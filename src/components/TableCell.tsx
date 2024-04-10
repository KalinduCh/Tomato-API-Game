import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./TableCell.css";

export type TableCellType = {
  text?: string;

  /** Style props */
  propBackgroundImage?: CSSProperties["backgroundImage"];
  propMinWidth?: CSSProperties["minWidth"];
};

const TableCell: FunctionComponent<TableCellType> = ({
  text,
  propBackgroundImage,
  propMinWidth,
}) => {
  const avatarStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const text1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="table-cell13">
      <div className="avatar7" style={avatarStyle}>
        <div className="contrast-border" />
      </div>
      <div className="text-and-supporting-text10">
        <div className="text15" style={text1Style}>
          {text}
        </div>
        <div className="supporting-text10">
          Brings all your news into one place
        </div>
      </div>
    </div>
  );
};

export default TableCell;
