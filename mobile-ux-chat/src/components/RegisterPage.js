import React, { useState } from "react";
import HttpService from "../services/HttpService";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

export default function RegisterPage() {

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [nickname, setNickname] = useState("");
  const [realname, setRealname] = useState("");

  const handleRegister = () => {
    if (password === passwordConfirm) {
      HttpService.register(userId, password, nickname, realname)
        .then((response) => {
          console.dir(response);
        })
    }
    
  }

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
            label="Nickname"
            onChange={(event) => {setNickname(event.target.value)}}
          />
          <TextField
            required
            label="Real Name"
            onChange={(event) => {setRealname(event.target.value)}}
          />
          <TextField
            required
            label="Username"
            onChange={(event) => {setUserId(event.target.value)}}
          />
          <TextField
            required
            label="Password"
            onChange={(event) => {setPassword(event.target.value)}}
          />
          <TextField
            required
            label="Password Confirm"
            onChange={(event) => {setPasswordConfirm(event.target.value)}}
          />
      </Box>
      <Button variant="contained" onClick={handleRegister}>Register</Button>
      <Link to="/chat">Chat</Link>
      </div>
    );
}