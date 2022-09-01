import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";
import { isLogged, getUserInfo } from "../../Services/getLoginStatus";
import { Typography } from "@mui/material";

const LoginBox = styled.div`
  padding: 4px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const UserTitle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-transform: uppercase;
`;

const BoardBox = styled.div`
  padding-top: 32px;
`;

export default function LoginAccess() {
  const navigate = useNavigate();

  if (isLogged())
    return (
      <LoginBox>
        <UserTitle>
          <Typography>{getUserInfo().user}</Typography>
        </UserTitle>

        <Tooltip title="Open settings">
          <IconButton sx={{ p: 0 }}>
            <Avatar
              alt={getUserInfo().user.toUpperCase()}
              
            />
          </IconButton>
        </Tooltip>
      </LoginBox>
    );

  return (
    <UserTitle>
      {" "}
      <Typography onClick={navigate("/login")}>Login</Typography>
    </UserTitle>
  );
}
