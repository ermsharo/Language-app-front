import { Grid } from "../../Styles/GridSystem";
import styled from 'styled-components'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from "react";
export default function UserInput({ setUser , user }) {




    const [inputState, setInputState] = useState('');
    const handleChange = (event) => {
        setUser(event.target.value);
    };

    const InputBox = styled.div`
    padding-top: 16px;
    
    `

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
        >
            <TextField
                fullWidth
                id="outlined-name"
                label="User"
                value={user}
                onChange={handleChange}
            />
        </Box>
    );
}


