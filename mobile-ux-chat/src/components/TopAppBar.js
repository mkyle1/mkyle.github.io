import React from "react";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import SettingsIcon from '@material-ui/icons/Settings';


const TopAppBar = () => {
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
          <IconButton
            color="inherit"
            aria-label="menu"
          >
            <SettingsIcon fontSize="large"/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Paper>
  );
};

export default TopAppBar;
