import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { Grid } from "../../Styles/GridSystem";
import Button from "@mui/material/Button";
import Logo from "../logo/logo";
import React, { useState } from "react";
import Feedback from "./../Feedback/FeedBack";
import axios from "axios";

const BoardBox = styled.div`
  padding-top: 32px;
  width: 100%;
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

export default function CreateUser() {
  const [formInputs, setFormInputs] = useState({
    user: "",
    email: "",
    password: "",
    passwordCheck: "",
  });

  const [requestAwnser, setRequestAwnser] = useState(null);

  function handleChange(evt) {
    const value = evt.target.value;
    setFormInputs({
      ...formInputs,
      [evt.target.name]: value,
    });

    console.log(formInputs);
  }

  const createUser = async () => {
    console.log("chamado", formInputs);
    await axios
      .post("http://localhost:5000/auth/singup", {
        title: "Hello World!",
        body: "This is a new post."
      })
      .then((response) => {
        setRequestAwnser(response.data);
        console.log("post");
      })
      .catch((error) => {
        console.log(error.toJSON());
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
              label="User"
              name="user"
              value={formInputs.user}
              onChange={handleChange}
            />
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
            <TextField
              type="password"
              fullWidth
              id="outlined-name"
              label="Password check"
              name="passwordCheck"
              value={formInputs.passwordCheck}
              onChange={handleChange}
            />
            <Feedback status="aaa" success={true} display = {true}/>

            <Button
              onClick={() => {
                createUser();
              }}
              fullWidth
              variant="contained"
            >
              Create user
            </Button>
          </LoginBox>
        </Grid>
      </BoardBox>
    </>
  );
}
