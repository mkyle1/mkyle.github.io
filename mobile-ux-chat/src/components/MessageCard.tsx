import { Box, styled } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import HttpService from '../services/HttpService';

type Props = {
  text: String;
  photoid: String;
  usernickname: String;
  time: String;
  isOwnMessage: boolean,
}

const StyledBox = styled(Box)({
  backgroundColor: '#D6D6D6',
  width: '80vw',
});

const MessageBox = styled(Box)({
  backgroundColor: 'white',
  width: '80vw',
  borderRightStyle: 'solid',
  borderLeftStyle: 'solid',
  borderColor: '#D6D6D6',
})

    
function MessageCard({ usernickname, text, photoid, time, isOwnMessage }: PropsWithChildren<Props>): JSX.Element {
  let limitedText = text ?? ''; // use the entire text message
  if (limitedText.length === 0) {
    //return <></>; // don't render anything if there's no text
  }
  const rightLeft = isOwnMessage ? 'right' : 'left';
  const boxMargin = isOwnMessage ? '5px 10px 5px 10px': '10px';
  const imageSrc = "https://www2.hs-esslingen.de/~melcher/map/chat/api/?request=getphoto&token=" + localStorage.getItem("loginToken") + "&photoid=" + photoid;
  let image;
  if (photoid) {
    image = <img src={imageSrc} alt="" style={{maxWidth: '100%',
                                               maxHeight: '100%',
                                              borderRadius: '8px'}}/>;
  }

  return (
    <Box className="frosted-glass-panel" sx={{ display: 'inline-block',
               margin: boxMargin,
               padding: '0',
               textAlign: 'left',
               float: rightLeft ,
               maxWidth: '80%'}}>
        <div className='username' style={{fontWeight: 'bold',
                                          borderBottom: '1px solid grey',
                                          padding: '0 0.4em 0.1em 0.4em'}}>
          {usernickname}
        </div>
        <div className='message-text' style={{fontWeight: 'normal',
                                              paddingBottom: '0.2em',
                                              wordBreak: 'break-word',
                                              padding: '0 0.4em 0 0.4em'}}>
          {limitedText}
        </div>
        <div className='message-image'>
          {image}
        </div>
        <div className='message-date' style={{fontWeight: 'lighter',
                                              borderTop: '1px solid grey',
                                              padding: '0 0.4em 0 0.4em'}}>
          {time}
        </div>
      {/* <StyledBox sx={{ textAlign: 'left',
                       fontSize: '20px',
                       fontWeight: 'bold',
                       borderRadius: '10px 10px 0px 0px' }}>
        {usernickname}
      </StyledBox>
      <MessageBox sx={{ fontSize: '20px',
                        wordBreak: 'break-word' }}>
        {limitedText}
      </MessageBox>
      <MessageBox sx={{ fontSize: '20px',
                        wordBreak: 'break-word' }}>
        {image}
      </MessageBox>
      <StyledBox sx={{ textAlign: 'right',
                       padding: '0px 5px 0px 5px',
                       backgroundColor: "white",
                       borderTop: "1px solid gray",
                       borderRadius: '0px 0px 10px 10px' }}>
        {time}
      </StyledBox> */}
    </Box>
  );
}

export default MessageCard;