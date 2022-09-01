import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import LoginAcess from "./LoginAcess";
import styled from "styled-components";

const HeaderBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

const Header = () => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <HeaderBox>
            <LoginAcess />
          </HeaderBox>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
