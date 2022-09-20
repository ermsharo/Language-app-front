import * as React from "react";
import LoginAcess from "./LoginAcess";
import styled from "styled-components";
import Logo from "./../logo/logo";
import { HeaderColor } from "./../../Styles/StyleFunctions";
import { useNavigate } from "react-router-dom";

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${HeaderColor};
  padding: 16px 32px;
  border: 6px;
  margin-bottom: 16px;
  -webkit-box-shadow: 0px -1px 8px 5px rgba(0, 0, 0, 0.17);
  box-shadow: 0px -1px 8px 5px rgba(0, 0, 0, 0.17);
`;

const LogoBox = styled.div`
  cursor: pointer;
`;

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <HeaderBox>
        <LogoBox
          onClick={() => {
            navigate("/words");
          }}
        >
          <Logo color="white" size="32px" />
        </LogoBox>

        <LoginAcess />
      </HeaderBox>
    </header>
  );
};
export default Header;
