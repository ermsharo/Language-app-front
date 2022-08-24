
import { Grid } from "../../Styles/GridSystem";
import styled from 'styled-components'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useState} from "react";

export default function CreateUser() {

  const CreateUserBox = styled.div`
    grid-column: 1/8;


    `
  const PageBox = styled.div`
padding-top: 32px;

`

const [user, setUser] = useState("");
const [password, setPassword] = useState("");

const onUserChange = (e) => setUser(e.target.value);

  return (
    <PageBox> <Grid><CreateUserBox>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            error
            id="outlined-error"
            label="User"
            value={user}
            onChange={onUserChange}
            
          />
    <TextField
            error
            id="outlined-error"
            label="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>


      </Box>

    </CreateUserBox></Grid></PageBox>


  );
}


