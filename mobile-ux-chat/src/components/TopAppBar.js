import React, {useState, useEffect} from "react";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SettingsIcon from '@material-ui/icons/Settings';
import Settings from "./Settings";
import { Link, useLocation } from "react-router-dom";

const TopAppBar = (props) => {
  const [backButton, setBackButton] = useState(false);
  const [settingsButton, setSettingsButton] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setBackButton(location.pathname === "/register");
    setSettingsButton(location.pathname === "/chat");
}, [location.pathname]);

  const handleBackClick = () => {
    props.setPath("/");
  };

  const handleSettingsOpen = () => {
    setSettingsOpen(true);
  };

  const handleSettingsClose = () => {
    setSettingsOpen(false);
  };

  return (
    <Paper sx={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: "20" }} elevation={1}>
      <AppBar position="static" sx={{ fontSize: 72, backgroundColor: "#007ACC" }}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1}}>
            Chat App
          </Typography>
          {backButton && (
            <IconButton component={Link} to="/" color="inherit" aria-label="back" onClick={handleBackClick}>
              <ArrowBackIcon fontSize="large"/>
            </IconButton>
          )}
          {settingsButton && (
            <IconButton color="inherit" aria-label="menu" onClick={handleSettingsOpen}>
              <SettingsIcon fontSize="large"/>
            </IconButton>
          )}
          <Settings open={settingsOpen} onClose={handleSettingsClose}/>
        </Toolbar>
      </AppBar>
    </Paper>
  );
};

export default TopAppBar;
