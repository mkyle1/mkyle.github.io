import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import { Button, TextField, IconButton } from "@mui/material";
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import HttpService from "../services/HttpService";

function GroupChat() {
  useEffect(() => {
    HttpService.getMessages().then((response) => {
      setMessages(response.data.messages);
      console.dir(response);
    })
  }, []);
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
      HttpService.sendMessage(message)
        .then(() => {
          setMessages([...messages, message]);
          setMessage("");
        });
      
    }
  };

  return (
    <div style={{height: '90vh'}}>
      <div className="messages-container">
        {messages.map((message, index) => (
          <div key={index} className="message">
            {message.text}
            <div className="nickname">
              {message.usernickname}
            </div>
          </div>
        ))}
      </div>
      
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
          sx={{marginLeft: '10px'}}
        >
            Send
        </Button>
      </div>
    </div>
  );
}

export default GroupChat;
