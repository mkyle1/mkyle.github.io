import React, { useState } from "react";
import Box from '@mui/material/Box';
import { Button, TextField, IconButton } from "@mui/material";
import PhotoCamera from '@mui/icons-material/PhotoCamera';

function GroupChat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    "Hi everyone, welcome to the group chat!",
    "Hey, how's it going?",
    "I'm doing well, thanks for asking!",
    "What's everyone up to today?",
    "Just working on some React projects",
    "I'm taking a break from work and catching up on some reading",
    "Sounds like a great way to spend the day!",
  ]);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, message]);
      setMessage("");
    }
  };

  return (
    <div style={{height: '90vh'}}>
      <Box
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          marginTop: "10vh",
          maxHeight: "90%",
          minHeight: "90%",
        }}
      >
        {messages.map((message, index) => (
          <div key={index} className="message">{message}</div>
        ))}
      </Box>
      
      <div className="input-and-send" style={{display: 'flex', alignItems: 'center', marginTop: '10px'}}>
        <IconButton color="primary" aria-label="upload picture" component="label">
          <input hidden accept="image/*" type="file" />
          <PhotoCamera />
        </IconButton>
        <TextField
          className="message-input"
          type="text"
          value={message}
          onChange={handleMessageChange}
          placeholder="Type your message here..."
        />
        <Button 
          variant="contained"
          onClick={handleSendMessage}
          color="primary"
          className="button"
        >
            Send
        </Button>
      </div>
    </div>
  );
}

export default GroupChat;
