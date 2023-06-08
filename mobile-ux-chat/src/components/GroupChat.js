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
  const currentUser = "Dario";

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
    <div style={{height: '110vh',
                 marginTop: '4vh',
                 paddingTop: '1vh',
                 paddingBottom: '100px',
                 justifyContent: 'center',
                 overflow: 'hidden',
                 display: "flex",
                 flexDirection: 'column'}}>
      <div className="messages" style={{overflowY: 'scroll', paddingBottom: '27vh'}}>
        {messages.map((message, index) =>
          <div key={index} sx={{ marginBottom: '30px'}}>
            <MessageCard
              usernickname={message.usernickname}
              time={message.time ? timeSort(message.time) : ""}
              text={message.text}
              isOwnMessage={message.usernickname === currentUser}
            >
            </MessageCard>
          </div>
        )}
      </div>
      <div className="inputs" style={{width: '100%',
                                      display: 'flex',
                                      justifyContent: 'center'}}>
        <div className="frosted-glass-panel" style={{display: 'flex', 
                                                    position: 'fixed',
                                                    justifyContent: 'center',
                                                    bottom: '0',
                                                    alignItems: 'center',
                                                    marginBottom: '30px',
                                                    padding: '5 5 0 0',}}>
          <IconButton color="primary" aria-label="upload picture" component="label">
            <input hidden accept="image/*" type="file" />
            <PhotoCamera />
          </IconButton>
            <TextField
              className="message-input"
              type="text"
              value={message}
              onChange={handleMessageChange}
              placeholder="Message"
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
    
    </div>
  );
}

export default GroupChat;
