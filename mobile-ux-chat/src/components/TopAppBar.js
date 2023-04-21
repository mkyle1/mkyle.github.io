import React, {useState, useEffect} from "react";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SettingsIcon from '@material-ui/icons/Settings';
import Settings from "./Settings";
import { Link } from "react-router-dom";


const TopAppBar = (props) => {
  const [backButton, setBackButton] = useState(false);
  const [settingsButton, setSettingsButton] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    const currentPath = props.path;
    setBackButton(currentPath === "/register");
    setSettingsButton(currentPath === "/chat");
}, []);

  const handleClickOpen = () => {
    setSettingsOpen(true);
  };
  const settingsClose = () => {
    setSettingsOpen(false);
  };

  return (
    <Paper
      sx={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: "20" }}
      elevation={1}
    >
      <AppBar position="static" sx={{ fontSize: 72, backgroundColor: "#007ACC" }}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1}}>
            Chat App
          </Typography>
          {backButton && (
          <IconButton component={Link} to="/"
            color="inherit"
            aria-label="back"
          >
            <ArrowBackIcon fontSize="large"/>
          </IconButton>)}
          {settingsButton && (
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={handleClickOpen}
          >
            <SettingsIcon fontSize="large"/>
          </IconButton>)}
          <Settings open={settingsOpen} onClose={settingsClose}/>
        </Toolbar>
      </AppBar>
    </Paper>
  );
};

export default TopAppBar;
