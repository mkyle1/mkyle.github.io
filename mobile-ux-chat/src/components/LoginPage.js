import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

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
    <p>Don't have an account? 
      <Link to="/register">
        <Button variant="text">Sign Up</Button>
      </Link> 
    </p>
    <Link to="/chat">Chat</Link>
    </div>
    );
}