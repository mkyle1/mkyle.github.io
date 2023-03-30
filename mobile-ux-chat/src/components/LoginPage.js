import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function LoginPage() {

    return(
    <div>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        marginTop: "30vh",
      }}
      noValidate
      autoComplete="off"
    >
        <TextField
          required
          label="Username"
        />
        <TextField
          required
          label="Password"
        />
    </Box>
    <Button variant="contained">Login</Button>
    <p>Don't have an account? <Button variant="text">Sign Up</Button> </p>
    </div>
    );
}