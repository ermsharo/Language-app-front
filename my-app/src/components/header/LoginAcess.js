import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";
import { isLogged, getUserInfo } from "../../Services/getLoginStatus";
import { Typography } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { logout } from "../../Services/getLoginStatus";
import {
  HeaderColor,
  DarkFontColor,
  LightFontColor,
  BackgroundColor,
  SecundaryBackgroundColor,
  GenerateWordColor,
} from "./../../Styles/StyleFunctions";

const LoginBox = styled.div`
  padding: 4px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  color: white;
  button {
    font-family: "Varela Round", sans-serif;
    font-weight: 700;
    background-color: ${HeaderColor};
    border-radius: 20px;

    &:hover {
      background-color: ${HeaderColor};
      opacity: 0.9;
    }
  }
`;

const LoginButton = styled.div`
  color: white;
  button {
    font-family: "Varela Round", sans-serif;
    font-weight: 700;
    background-color: ${LightFontColor};
    border-radius: 20px;
    color: ${DarkFontColor};

    &:hover {
      background-color: ${LightFontColor};
      opacity: 0.9;
    }
  }
`;

const UserTitle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-transform: capitalize;
  font-family: "Varela Round", sans-serif;
  font-weight: 400;
  font-size: 20px;
`;

const BoardBox = styled.div`
  padding-top: 32px;
`;

export default function LoginAccess() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const userLogout = () => {
    logout();
    setAnchorEl(null);
    navigate("/login");
  };

  if (isLogged())
    return (
      <LoginBox>
        <UserTitle>{getUserInfo().user}</UserTitle>

        <div>
          <Tooltip title="Open settings">
            <IconButton
              sx={{ p: 0 }}
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <Avatar
                style={{
                  backgroundColor: GenerateWordColor(getUserInfo().user),
                  color: DarkFontColor,
                }}
                alt={getUserInfo().user}
              >
                {getUserInfo().user[0].toUpperCase()}
              </Avatar>
            </IconButton>
          </Tooltip>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              onClick={() => {
                handleClose();
                userLogout();
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </div>
      </LoginBox>
    );

  return (
    <UserTitle>
      {" "}
      <LoginButton>
        <Button
          onClick={() => {
            navigate("/login");
          }}
          fullWidth
          variant="contained"
        >
          Login
        </Button>
      </LoginButton>
    </UserTitle>
  );
}
