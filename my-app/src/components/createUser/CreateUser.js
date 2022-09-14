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

const FormBox = styled.div`
  padding-top: 32px;
  grid-column: 2/6;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 16px;

  input {
    font-family: "Varela Round", sans-serif;
  }
  button {
    font-family: "Varela Round", sans-serif;
    font-weight: 700;
  }
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
  }

  const createUser = async () => {
    await axios
      .post("http://localhost:5000/auth/singup", {
        formInputs,
      })
      .then((response) => {
        setRequestAwnser(response.data);
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
          <FormBox>
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
            <Feedback status="aaa" success={true} display={true} />

            <Button
              onClick={() => {
                createUser();
              }}
              fullWidth
              variant="contained"
            >
              Create user
            </Button>
          </FormBox>
        </Grid>
      </BoardBox>
    </>
  );
}
