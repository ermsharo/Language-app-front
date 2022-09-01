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
  border: 2px solid red;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 16px;
`;

export default function SingIn() {
  return (
    <>
      <BoardBox>
        <Grid>
          <LoginBox>
            <TextField fullWidth id="outlined-name" label="user" />
            <TextField fullWidth id="outlined-name" label="Password" />

            <Button fullWidth variant="contained">Login</Button>
            <Link to="/login/create-account"><Typography>Create account</Typography></Link>


          </LoginBox>
        </Grid>
      </BoardBox>
    </>
  );
}
