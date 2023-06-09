import * as React from 'react';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Link } from "react-router-dom";
import HttpService from '../services/HttpService';

const Settings = (props, {setNewTheme}) => {
  const {open, onClose} = props;  

  const [value, setValue] = React.useState(localStorage.getItem("theme") !== null ? localStorage.getItem("theme") : "light");

  const handleChange = (event) => {
    setValue(event.target.value);
    props.setTheme(event.target.value);
    localStorage.setItem("theme", event.target.value);
  };

  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Settings</DialogTitle>
        <DialogContent sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    }}>
          <FormControlLabel
          control={<Checkbox />}
          label="Mute Chat"
          labelPlacement="start"
        />
        <Button variant="outlined" sx={{marginBottom: "20px"}}>Leave Chat</Button>

        <FormControl sx={{paddingTop: "10px", borderTop: "2px solid black", borderBottom: "2px solid black"}}>
            <FormLabel>Theme</FormLabel>
                <RadioGroup
                    value={value}
                    onChange={handleChange}
                >
        <FormControlLabel value="light"  control={<Radio />} label="Light Mode" />
        <FormControlLabel value="dark"  control={<Radio />} label="Dark Mode" />
        </RadioGroup>
        </FormControl>
        
        <Button component={Link} to="/" onClick={() => {onClose(); localStorage.removeItem("loginToken"); HttpService.logout()}} variant="outlined" sx={{marginBottom: "10px", marginTop: "20px"}}>Log Out</Button>
        <Button component={Link} to="/" onClick={onClose} variant="outlined" color="warning" sx={{marginBottom: "10px"}}>Delete Account</Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={onClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default Settings;