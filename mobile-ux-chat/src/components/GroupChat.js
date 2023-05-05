import React, { useEffect, useState } from "react";
import { Button, TextField, IconButton } from "@mui/material";
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import HttpService from "../services/HttpService";
import MessageCard from './MessageCard.tsx';

function GroupChat() {
  useEffect(() => {
    HttpService.getMessages().then((response) => {
      setMessages(response.data.messages);
      console.dir(response);
    })
  }, []);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

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

  function timeSort(time){
    const timeArray = time.split(/-|_/);
    let timeString = timeArray[2] + "." + timeArray[1] + "." + timeArray[0] + " " + timeArray[3] + ":" + timeArray[4];
    return timeString;
  }

  return (
    <div style={{height: '90vh', paddingBottom: '100px'}}>
      {messages.map((message, index) =>
        <div key={index} sx={{ marginBottom: '30px'}}>
        <MessageCard
          usernickname={message.usernickname}
          time={message.time ? timeSort(message.time) : ""}
          text={message.text}
        >
        </MessageCard>
        </div>
      )}
      <div className="input-and-send" style={{display: 'flex', position: 'fixed', bottom: '0', alignItems: 'center', marginBottom: '30px'}}>
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
          sx={{width: 'auto'}}
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
