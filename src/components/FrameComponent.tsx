import { FunctionComponent, useCallback, useState } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./FrameComponent.css";

const FrameComponent: FunctionComponent = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onRegisterClick = useCallback(() => {
    // Validate email and password, and confirm password
    if (!email || !password || !confirmPassword) {
      alert("Please fill in all fields");
    } else if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      // Perform registration logic here
      // For now, just navigate to the login page
      navigate("/home");
    }
  }, [email, password, confirmPassword, navigate]);

  

  return (
    <div className="frame-parent1">
      <div className="frame-input-with-label-parent">
        <div className="frame-input-with-label">
          <div className="input-with-label1">
            <div className="label7" />
            <TextField
              className="input3"
              placeholder="Username"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <img width="20px" height="20px" src="/fiuser.svg" />
                ),
              }}
              sx={{
                "& fieldset": { borderColor: "#d0d5dd" },
                "& .MuiInputBase-root": {
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                },
                "& .MuiInputBase-input": { color: "#000" },
              }}
            />
          </div>
        </div>
        <div className="input-field2">
          <div className="input-with-label2">
            <div className="label8" />
            <TextField
              className="input4"
              placeholder="Email"
              variant="outlined"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                "& fieldset": { borderColor: "#d0d5dd" },
                "& .MuiInputBase-root": {
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                },
                "& .MuiInputBase-input": { color: "#000" },
              }}
            />
          </div>
          <div className="hint-text7" />
        </div>
        <div className="input-field2">
          <div className="input-with-label2">
            <div className="label8" />
            <TextField
              className="input4"
              placeholder="Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                "& fieldset": { borderColor: "#d0d5dd" },
                "& .MuiInputBase-root": {
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                },
                "& .MuiInputBase-input": { color: "#000" },
              }}
            />
          </div>
          <div className="hint-text7" />
        </div>
        <div className="input-field2">
          <div className="input-with-label2">
            <div className="label8" />
            <TextField
              className="input4"
              placeholder="Confirm Password"
              variant="outlined"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              sx={{
                "& fieldset": { borderColor: "#d0d5dd" },
                "& .MuiInputBase-root": {
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                },
                "& .MuiInputBase-input": { color: "#000" },
              }}
            />
          </div>
          <div className="hint-text7" />
        </div>
      </div>
      <Button
        className="buttonsbutton7"
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "24",
          background: "#c53030",
          borderRadius: "8px",
          "&:hover": { background: "#c53030" },
          height: 60,
        }}
        onClick={onRegisterClick}
      >
        Register
      </Button>
    </div>
  );
};

export default FrameComponent;
