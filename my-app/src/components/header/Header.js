import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import LoginAcess from "./LoginAcess";
import styled from "styled-components";
import Logo from "./../logo/logo";
import { Link } from "react-router-dom";
import {
  HeaderColor,
  DarkFontColor,
  LightFontColor,
  BackgroundColor,
  SecundaryBackgroundColor,
} from "./../../Styles/StyleFunctions";

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${HeaderColor};
  padding: 16px 32px;
  border: 6px;
`;

const Header = () => {
  return (
    <header>
      {" "}
      <HeaderBox>
        <Link to="/">
          <Logo color="white" size="32px" />
        </Link>

        <LoginAcess />
      </HeaderBox>
    </header>
  );
};
export default Header;
