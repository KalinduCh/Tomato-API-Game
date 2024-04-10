import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./FrameComponent1.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <div className="frame-parent2">
      <div className="frame-wrapper1">
        <div className="label-parent4">
          <div className="label10" />
          <div className="hint-text9" />
        </div>
      </div>
      <div className="first-child-frame">
        {/* Wrap the Button in Link component */}
        <Link to="/easy" className="buttonsbutton13" style={{ textDecoration: 'none', flex: 1, display: 'flex' }}>
          <Button
            startIcon={
              <img
                width="30px"
                height="30px"
                src="/mdoutlinenotstarted.svg"
              />
            }
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "32",
              background: "#c53030",
              borderRadius: "8px",
              "&:hover": { background: "#c53030" },
              width: '100%', // Set width to 100% to match flexbox behavior
              height: 60,
            }}
          >
            Easy
          </Button>
        </Link>
      </div>
      <div className="first-child-frame1">
        <Button
          className="buttonsbutton14"
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "32",
            background: "#c53030",
            borderRadius: "8px",
            "&:hover": { background: "#c53030" },
            height: 62,
          }}
        >
          Intermediate
        </Button>
      </div>
      <Button
        className="buttonsbutton15"
        startIcon={<img width="30px" height="30px" src="/mdsettings.svg" />}
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "32",
          background: "#c53030",
          borderRadius: "8px",
          "&:hover": { background: "#c53030" },
          width: 320,
          height: 62,
        }}
      >
        Hard
      </Button>
      <button className="buttonsbutton16">
        <div className="text-container">
          <div className="text10">Tomato Time Wrap</div>
        </div>
        <img className="mdsettings-icon" alt="" />
        <img className="placeholder-icon6" alt="" src="/placeholder1.svg" />
      </button>
    </div>
  );
};

export default FrameComponent1;
