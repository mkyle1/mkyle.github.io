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
  const currentUser = localStorage.getItem("userhash");

  const bottomRef = React.useRef();

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, message]);
      setMessage("");
      HttpService.sendMessage(message)
        .then(() => {
        });
    }
  };

  function timeSort(time){
    const timeArray = time.split(/-|_/);
    let timeString = timeArray[2] + "." + timeArray[1] + "." + timeArray[0] + " " + timeArray[3] + ":" + timeArray[4];
    return timeString;
  }

  function messageLeftOrRight(usernickname){
    if(usernickname === currentUser){
      return "right";
    } else {
      return "left";
    }
  }

  useEffect(() => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  console.dir(messages);
  console.dir(localStorage.getItem("loginToken"));

  return (
    <div style={{height: '110vh',
                 marginTop: '4vh',
                 paddingTop: '1vh',
                 justifyContent: 'center',
                 overflow: 'hidden',
                 display: "flex",
                 flexDirection: 'column'}}>
      <div className="messages" style={{overflowY: 'scroll',
                                        paddingBottom: '20vh',
                                        paddingTop: '20vh',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        //marginBottom: '15vh',
                                        }}>
        {messages.map((message, index) =>
          <div key={index} sx={{ marginBottom: '30px', float: messageLeftOrRight(message)}}>
            <MessageCard
              usernickname={message.usernickname}
              time={message.time ? timeSort(message.time) : ""}
              text={message.text}
              image={message.photoid ? message.photoid : ""}
              isOwnMessage={message.userhash === currentUser}
            >
            </MessageCard>
          </div>
        )}
        <div ref={bottomRef}></div>
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
