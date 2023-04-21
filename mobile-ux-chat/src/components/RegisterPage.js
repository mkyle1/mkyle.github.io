import React, { useState, useEffect } from "react";
import HttpService from "../services/HttpService";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link, useLocation } from "react-router-dom";

const RegisterPage = (props) => {

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

  const location = useLocation();

  useEffect(() => {
    props.setPath(location.pathname);
  }, [location]);

    return(
      <div>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          marginTop: "15vh",
          marginBottom: "2vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column"
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
            type="password"
            onChange={(event) => {setPassword(event.target.value)}}
          />
          <TextField
            required
            label="Password Confirm"
            type="password"
            onChange={(event) => {setPasswordConfirm(event.target.value)}}
          />
      </Box>
      <Button variant="contained" onClick={handleRegister} sx={{marginBottom: "2vh"}}>Register</Button>
        <div>
          <Link to="/chat">Chat</Link>
        </div>
      </div>
    );
}

export default RegisterPage;