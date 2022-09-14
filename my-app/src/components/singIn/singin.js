import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { Grid } from "../../Styles/GridSystem";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../logo/logo";
import React, { useState, useEffect } from "react";
import Feedback from "./../Feedback/FeedBack";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  HeaderColor,
  DarkFontColor,
  LightFontColor,
  BackgroundColor,
  SecundaryBackgroundColor,
  GenerateWordColor,
} from "./../../Styles/StyleFunctions";

const BoardBox = styled.div`
  padding-top: 32px;
  width: 100%;
  font-family: "Varela Round", sans-serif;
  font-weight: 400;
  height: 100%;
`;

const LoginBox = styled.div`
  padding-top: 32px;
  grid-column: 2/6;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 16px;
`;

const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
`;

export default function SingIn() {
  const [formInputs, setFormInputs] = useState({
    email: "",
    password: "",
  });

  const [requestErrorAwnser, setRequestErrorAwnser] = useState(false);

  const navigate = useNavigate();

  function handleChange(evt) {
    const value = evt.target.value;
    setFormInputs({
      ...formInputs,
      [evt.target.name]: value,
    });
  }

  const saveUserInfo = (id, token, user) => {
    localStorage.setItem("id", id);
    localStorage.setItem("user", user);
    localStorage.setItem("token", token);
    localStorage.setItem("logged", true);
  };

  const singIn = async () => {
    await axios
      .post("http://localhost:5000/auth/singin", {
        formInputs,
      })
      .then((response) => {
        setRequestErrorAwnser(false);
        saveUserInfo(response.data.id, response.data.token, response.data.name);
        navigate("/");
      })
      .catch((error) => {
        setRequestErrorAwnser(error.response.data);
      });
  };

  return (
    <>
      <BoardBox>
        <LogoBox>
          <Logo color="#00008b" size="6vw" />
        </LogoBox>
        <Grid>
          <LoginBox>
            <TextField
              fullWidth
              id="outlined-name"
              label="Email"
              name="email"
              value={formInputs.email}
              onChange={handleChange}
            />
            <TextField
              type="password"
              fullWidth
              id="outlined-name"
              label="Password"
              name="password"
              value={formInputs.password}
              onChange={handleChange}
            />
            <Feedback
              status={requestErrorAwnser}
              success={false}
              display={requestErrorAwnser}
            />

            <Button
              onClick={() => {
                singIn();
              }}
              fullWidth
              variant="contained"
            >
              Login
            </Button>
            <Link to="/login/create-account">
              <Typography>Create account</Typography>
            </Link>
          </LoginBox>
        </Grid>
      </BoardBox>
    </>
  );
}
