import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./ButtonsFrame.css";

const ButtonsFrame: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonsButtonClick = useCallback(() => {
    navigate("/start-game");
  }, [navigate]);

  const onButtonsButton1Click = useCallback(() => {
    navigate("/leaderboard");
  }, [navigate]);

  const onButtonsButton2Click = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onButtonsButton3Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="buttons-frame">
      <div className="hint-frame">
        <div className="label-frame1">
          <div className="label9" />
          <div className="hint-text8" />
        </div>
        <div className="logout-button">
          <Button
            className="buttonsbutton8"
            startIcon={
              <img width="30px" height="30px" src="/mdoutlinenotstarted.svg" />
            }
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "32",
              background: "#c53030",
              borderRadius: "8px",
              "&:hover": { background: "#c53030" },
            }}
            onClick={onButtonsButtonClick}
          >
            Start Game
          </Button>
        </div>
      </div>
      <Button
        className="buttonsbutton9"
        startIcon={
          <img width="30px" height="30px" src="/iostatschartoutline.svg" />
        }
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
        onClick={onButtonsButton1Click}
      >
        Leaderboard
      </Button>
      <Button
        className="buttonsbutton10"
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
        onClick={onButtonsButton2Click}
      >
        My Profile
      </Button>
      <Button
        className="buttonsbutton11"
        startIcon={<img width="30px" height="30px" src="/mdsettings-1.svg" />}
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
        onClick={onButtonsButton3Click}
      >
        Logout
      </Button>
    </div>
  );
};

export default ButtonsFrame;
