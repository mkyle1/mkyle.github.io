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
  const [deleteWarning, setDeleteWarning] = React.useState(false);

  
  const handleShowWarning = () => {
    setDeleteWarning(true);
  };
  const handleHideWarning = () => {
    setDeleteWarning(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Profile</DialogTitle>
        <DialogContent sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    }}>
        {!deleteWarning && (        
        <Button 
            component={Link} to="/" 
            onClick={() => {onClose(); localStorage.removeItem("loginToken"); HttpService.logout()}} 
            variant="outlined" sx={{marginBottom: "10px", marginTop: "10px", textTransform: "unset !important"}}>
                View Media
        </Button>
        )}
        {!deleteWarning && (
        <Button 
            component={Link} to="/" 
            onClick={() => {onClose(); localStorage.removeItem("loginToken"); HttpService.logout()}} 
            variant="outlined" sx={{marginBottom: "10px", textTransform: "unset !important"}}>
                Log Out
        </Button>
        )}
        {!deleteWarning && (        
        <Button 
            onClick={handleShowWarning} 
            variant="outlined" color="warning" size='small' sx={{ marginTop: "10px" , textTransform: "unset !important"}}>
                Delete Account
        </Button>
        )}
        {deleteWarning && (
            <div>
                <p> Are you sure you want to permanently delete your account?  </p>
                   <Button component={Link} to="/" size='small' variant="outlined"  color="warning" onClick={() => {onClose(); localStorage.removeItem("loginToken"); HttpService.deregister()}}>Delete permanent</Button> 
                   <Button variant="outlined" size='small' sx={{marginLeft: "5px"}} onClick={handleHideWarning}>Cancel</Button>                
            </div>    
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default Profile;