import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import LoginAcess from "./LoginAcess";
import styled from "styled-components";
import Logo from "./../logo/logo";
import { Link } from "react-router-dom";

const HeaderBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <header>    <AppBar position="static">
      <Container>
        <Toolbar>
          <HeaderBox>
            <Link to="/">
              <Logo color="white" size="32px" />
            </Link>

            <LoginAcess />
          </HeaderBox>
        </Toolbar>
      </Container>
    </AppBar></header>

  );
};
export default Header;
