import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";
import { isLogged, getUserInfo } from "../../Services/getLoginStatus";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
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

  if (isLogged())
    return (
      <LoginBox>
        <UserTitle>{getUserInfo().user}</UserTitle>

        <Tooltip title="Open settings">
          <IconButton sx={{ p: 0 }}>
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
      </LoginBox>
    );

  return (
    <UserTitle>
      {" "}
      <Link to="/login/">
        <Typography color="white">Login</Typography>
      </Link>
    </UserTitle>
  );
}
