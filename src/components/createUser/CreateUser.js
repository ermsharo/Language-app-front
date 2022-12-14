import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { Grid } from "../../Styles/GridSystem";
import Button from "@mui/material/Button";
import Logo from "../logo/logo";
import React, { useState } from "react";
import Feedback from "./../Feedback/FeedBack";
import axios from "axios";
import { HeaderColor } from "./../../Styles/StyleFunctions";
import { useNavigate } from "react-router-dom";

const BoardBox = styled.div`
  padding-top: 32px;
  width: 100%;
  padding-bottom: 32px;
`;

const FormBox = styled.div`
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

export default function CreateUser() {
  const [formInputs, setFormInputs] = useState({
    user: "",
    email: "",
    password: "",
    passwordCheck: "",
  });
  const [requestErrorAwnser, setRequestErrorAwnser] = useState(false);
  const [requestAwnser, setRequestAwnser] = useState(false);
  const [validationErrors, setValidationErrors] = useState({
    isFormValid: true,
    errorArray: [],
  });

  const navigate = useNavigate();

  function handleChange(evt) {
    const value = evt.target.value;
    setFormInputs({
      ...formInputs,
      [evt.target.name]: value,
    });
  }

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const validadeInputs = () => {
    console.log("Form inputs", formInputs);
    let formErrors = [];
    if (!formInputs.user) {
      formErrors.push("You need to fill the user field ");
    }
    if (!formInputs.password) {
      formErrors.push("You need to fill the password field ");
    }
    if (!formInputs.passwordCheck) {
      formErrors.push("You need to fill the password check field ");
    }
    if (!formInputs.email) {
      formErrors.push("You need to fill the email field ");
    }

    if (!isValidEmail(formInputs.email)) {
      formErrors.push("Invalid email format");
    }

    if (
      formInputs.password &&
      formInputs.passwordCheck &&
      formInputs.password !== formInputs.passwordCheck
    ) {
      formErrors.push("Password check must be equals to Password ");
    }

    if (formErrors.length === 0) {
      setValidationErrors({ isFormValid: true, errorArray: [] });
    }
    setValidationErrors({ isFormValid: false, errorArray: formErrors });
  };

  const createUser = async () => {
    console.log(validadeInputs());

    if (validationErrors.isFormValid) {
      await axios
        .post("http://localhost:5000/auth/singup", {
          formInputs,
        })
        .then((response) => {
          setRequestAwnser(response.data);
          navigate("/")
        })
        .catch((error) => {
          setRequestErrorAwnser(error.response.data);
        });
    }
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

            {validationErrors.errorArray.length != 0 && (
              <Feedback
                status={validationErrors.errorArray[0]}
                success={false}
                display={!validationErrors.isFormValid}
              />
            )}

            <Feedback
              status={requestErrorAwnser}
              success={false}
              display={requestErrorAwnser}
            />
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
