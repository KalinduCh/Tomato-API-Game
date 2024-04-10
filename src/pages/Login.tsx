import React, { FunctionComponent, useCallback, useState } from "react";
import { TextField, Button } from "@mui/material";
import ButtonsButton from "../components/ButtonsButton";
import { useNavigate } from "react-router-dom";
import "./CSS/Login.css";

const Login: FunctionComponent = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLoginClick = useCallback(() => {
    // Check if email and password match the required credentials
    if (email === "test@123" && password === "1234") {
      navigate("/home");
    } else {
      // Handle invalid credentials
      alert("Invalid email or password");
    }
  }, [email, password, navigate]);

  const onRegisterClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  const inputStyle = {
    "& fieldset": { borderColor: "#d0d5dd" },
    "& .MuiInputBase-root": {
      height: "60px",
      backgroundColor: "#fff",
      paddingLeft: "12px",
      borderRadius: "8px",
    },
    "& .MuiInputBase-input": {
      paddingLeft: "8px",
      color: "#000",
    },
  };

  return (
    <div className="login">
      <main className="main-frame">
        <img className="main-frame-child" alt="" src="/root-frame@2x.png" />
        <section className="main-frame-item" />
      </main>
      <div className="buttonsbutton-parent">
        <ButtonsButton />
        <div className="label-frame">
          <form className="frame-parent">
            <div className="input-field-parent">
              <div className="input-field">
                <div className="input-with-label">
                  <div className="label" />
                  <TextField
                    className="input"
                    placeholder="Email/Username"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <img width="20px" height="20px" src="/fiuser.svg" />
                      ),
                    }}
                    sx={inputStyle}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="hint-text" />
              </div>
              <div className="input-field">
                <div className="input-with-label">
                  <div className="label" />
                  <TextField
                    className="input"
                    placeholder="Password"
                    variant="outlined"
                    type="password"
                    sx={inputStyle}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="hint-text" />
              </div>
            </div>
            <div className="buttons-with-text">
              <Button
                className="buttonsbutton"
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "32",
                  background: "#c53030",
                  borderRadius: "8px",
                  "&:hover": { background: "#c53030" },
                }}
                onClick={onLoginClick}
              >
                Login
              </Button>
              <Button
                className="buttonsbutton1"
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "32",
                  background: "#c53030",
                  borderRadius: "8px",
                  "&:hover": { background: "#c53030" },
                }}
                onClick={onRegisterClick}
              >
                Signup
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
