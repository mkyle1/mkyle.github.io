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
  const limitedText = text ?? ''; // use the entire text message
  const rightLeft = isOwnMessage ? 'right' : 'left';
  const boxMargin = isOwnMessage ? '5px 10px 5px 10px': '10px';
  const imageSrc = "https://www2.hs-esslingen.de/~melcher/map/chat/api/?request=getphoto&token=" + localStorage.getItem("loginToken") + "&photoid=" + photoid;
  let image;
  if (photoid) {
    image = <img src={imageSrc} alt="" style={{maxWidth: '100%', maxHeight: '100%'}}/>;
  }

  return (
    <Box sx={{ display: 'inline-block', margin: boxMargin, textAlign: 'left', float: rightLeft , maxWidth: '80%'}}>
      <StyledBox sx={{ textAlign: 'left', padding: '0px 5px 0px 5px', fontSize: '20px', fontWeight: 'bold', borderRadius: '10px 10px 0px 0px' }}>{usernickname}</StyledBox>
      <MessageBox sx={{ fontSize: '20px', wordBreak: 'break-word' }}>{limitedText}</MessageBox>
      <MessageBox sx={{ fontSize: '20px', wordBreak: 'break-word' }}>{image}</MessageBox>
      <StyledBox sx={{ textAlign: 'right', padding: '0px 5px 0px 5px',backgroundColor: "white", borderTop: "1px solid gray", borderRadius: '0px 0px 10px 10px' }}> {time} </StyledBox>
    </Box>
  );
}

export default MessageCard;