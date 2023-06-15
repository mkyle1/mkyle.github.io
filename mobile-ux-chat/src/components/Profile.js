import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from "react-router-dom";
import HttpService from '../services/HttpService';

const Profile = (props) => {
  const {open, onClose} = props;  

  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Profile Options</DialogTitle>
        <DialogContent sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    }}>
        
        <Button component={Link} to="/" onClick={() => {onClose(); localStorage.removeItem("loginToken"); HttpService.logout()}} variant="outlined" sx={{marginBottom: "10px", marginTop: "20px"}}>Log Out</Button>
        <Button component={Link} to="/" onClick={onClose} variant="outlined" color="warning" sx={{marginBottom: "10px"}}>Delete Account</Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default Profile;