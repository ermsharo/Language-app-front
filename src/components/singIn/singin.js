import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { Grid } from "../../Styles/GridSystem";
import Button from "@mui/material/Button";
import Logo from "../logo/logo";
import React, { useState } from "react";
import Feedback from "./../Feedback/FeedBack";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { HeaderColor } from "./../../Styles/StyleFunctions";

const BoardBox = styled.div`
  width: 100%;
  font-family: "Varela Round", sans-serif;
  font-weight: 400;
  height: 100%;
`;

const LoginBox = styled.div`
  padding-top: 32px;
  grid-column: 2/8;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 16px;
  @media (min-width: 992px) {
    grid-column: 3/7;
  }

  input {
    font-family: "Varela Round", sans-serif;
  }
  button {
    font-family: "Varela Round", sans-serif;
    font-weight: 700;
    background-color: ${HeaderColor};
    border-radius: 20px;
    margin-top: 16px;

    &:hover {
      background-color: ${HeaderColor};
      opacity: 0.9;
    }
  }
`;

const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
`;

const CreateAccountButton = styled.div`
  font-family: "Varela Round", sans-serif;
  font-weight: 600;
  cursor: pointer;
  margin-top: 16px;
  padding-left: 8px;
  &:hover {
    opacity: 0.7;
  }
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

            <CreateAccountButton
              onClick={() => {
                navigate("create-account");
              }}
            >
              Create account
            </CreateAccountButton>
          </LoginBox>
        </Grid>
      </BoardBox>
    </>
  );
}
