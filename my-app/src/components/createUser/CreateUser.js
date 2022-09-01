import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { Grid } from "../../Styles/GridSystem";
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const BoardBox = styled.div`
  padding-top: 32px;
  width: 100%;
  border: 2px solid red;
`;

const LoginBox = styled.div`
  padding-top: 32px;
  grid-column: 2/6;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 16px;
`;

const ErrorFeedBack = styled.div`
  padding-top: 32px;
  grid-column: 2/6;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 16px;
`;

export default function CreateUser() {
  return (
    <>
      <BoardBox>
        <Grid>
          <LoginBox>
            <TextField fullWidth id="outlined-name" label="User" />
            <TextField fullWidth id="outlined-name" label="Email" />
            <TextField fullWidth id="outlined-name" label="Password" />
            <TextField fullWidth id="outlined-name" label="Password check" />

            <Button fullWidth variant="contained">Create user</Button>



          </LoginBox>
        </Grid>
      </BoardBox>
    </>
  );
}
