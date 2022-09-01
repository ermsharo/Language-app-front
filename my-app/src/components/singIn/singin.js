import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { Grid } from "../../Styles/GridSystem";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../logo/logo";
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

export default function SingIn() {
  return (
    <>
      <BoardBox>
        <LogoBox><Logo color="#00008b" size="6vw" /></LogoBox>
        <Grid>
          <LoginBox>
            <TextField fullWidth id="outlined-name" label="user" />
            <TextField fullWidth id="outlined-name" label="Password" />

            <Button fullWidth variant="contained">
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
