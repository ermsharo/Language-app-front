import { Grid } from "../../Styles/GridSystem";
import styled from 'styled-components'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from "react";

export default function PasswordInput() {




    const [inputState, setInputState] = useState('');
    const handleChange = (event) => {
        setInputState(event.target.value);
    };

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
        >
            <TextField
                fullWidth
                id="outlined-name"
                label="Password"
                value={inputState}
                onChange={handleChange}
            />

        </Box>
    );
}


