import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import "./Column.css";

const Column: FunctionComponent = () => {
  return (
    <div className="column1">
      <Button
        className="table-cell6"
        disableElevation={true}
        variant="outlined"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "28",
          borderColor: "#eaecf0",
          borderRadius: "0px 0px 0px 0px",
          "&:hover": { borderColor: "#eaecf0" },
          width: 400,
          height: 72,
        }}
      >
        User01
      </Button>
      <Button
        className="table-cell7"
        disableElevation={true}
        variant="outlined"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "28",
          borderColor: "#eaecf0",
          borderRadius: "0px 0px 0px 0px",
          "&:hover": { borderColor: "#eaecf0" },
          width: 400,
          height: 72,
        }}
      >
        15 min
      </Button>
      <div className="table-cell8">
        <div className="text-and-supporting-text6">
          <div className="text11">13</div>
          <div className="supporting-text6">
            Brings all your news into one place
          </div>
        </div>
      </div>
      <Button
        className="table-cell9"
        disableElevation={true}
        variant="outlined"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "28",
          borderColor: "#eaecf0",
          borderRadius: "0px 0px 0px 0px",
          "&:hover": { borderColor: "#eaecf0" },
          width: 400,
          height: 72,
        }}
      >
        20 S
      </Button>
      <div className="table-cell10">
        <div className="text-and-supporting-text7">
          <div className="text12">03</div>
          <div className="supporting-text7">
            Brings all your news into one place
          </div>
        </div>
      </div>
      <div className="table-cell11">
        <div className="text-and-supporting-text8">
          <div className="text13">01</div>
          <div className="supporting-text8">
            Brings all your news into one place
          </div>
        </div>
      </div>
    </div>
  );
};

export default Column;
