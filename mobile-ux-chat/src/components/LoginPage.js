import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link, useNavigate } from "react-router-dom";
import HttpService from "../services/HttpService";

export default function LoginPage() {

  const [userId, setUserId] = useState(".");
  const [password, setPassword] = useState(".");
  const [loginFail, setLoginFail] = useState(false);
  const [remember, setRemember] = useState("off");
  const navigate = useNavigate();

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("loginToken"));
        if (token !== null) {
          navigate('/chat');
        }
    }, []);

  const handleLoginPressed = () => {
    HttpService.login(userId, password, remember)
    .then((response) => {
      console.log(response);
      navigate('/chat');
    })
    .catch((error) => {
      console.dir(error);
      setLoginFail(true);
    })
  }

    return(
    <div>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        marginTop: "30vh",
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
          label="Username"
          onChange={(event) => {setUserId(event.target.value)}}
          error={userId === ""}
          helperText={userId === "" ? 'Username required' : ' '}
        />
        <TextField
          required
          label="Password"
          type="password"
          onChange={(event) => {setPassword(event.target.value)}}
          error={password === ""}
          helperText={password === "" ? 'Password required' : ' '}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Remember Login"
          onChange={(event) => {setRemember(event.target.value)}}
          labelPlacement="start"
        />
    </Box>
    {loginFail === true ? <p style = {{color: "red"}}>Invalid username or password</p> : null}
      <Button variant="contained" onClick={handleLoginPressed}>Login</Button>
    <p>Don't have an account? 
      <Link to="/register">
        <Button variant="text">Sign Up</Button>
      </Link> 
    </p>
    </div>
    );
}