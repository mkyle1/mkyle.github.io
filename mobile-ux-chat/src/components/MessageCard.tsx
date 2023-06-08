import { Box, styled } from '@mui/material';
import React, { PropsWithChildren } from 'react';

type Props = {
  text: String;
  usernickname: String;
  time: String;
  isOwnMessage: boolean,
}

const StyledBox = styled(Box)({
  backgroundColor: '#D6D6D6',
  width: 'auto',
});

const MessageBox = styled(Box)({
  backgroundColor: 'white',
  width: 'auto',
  borderRightStyle: 'solid',
  borderLeftStyle: 'solid',
  borderColor: '#D6D6D6',
})

    
function MessageCard({ usernickname, text, time, isOwnMessage }: PropsWithChildren<Props>): JSX.Element {
  const limitedText = text ?? ''; // use the entire text message
  const rightLeft = isOwnMessage ? 'right' : 'left';
  const boxMargin = isOwnMessage ? '5px 10px 5px 10px': '10px';

  return (
    <Box sx={{ display: 'inline-block', margin: boxMargin, textAlign: 'left', float: rightLeft , maxWidth: '80%'}}>
      <StyledBox sx={{ textAlign: 'left', padding: '0px 5px 0px 5px', fontSize: '20px', fontWeight: 'bold', borderRadius: '10px 10px 0px 0px' }}>{usernickname}</StyledBox>
      <MessageBox sx={{ fontSize: '20px', wordBreak: 'break-word' }}>{limitedText}</MessageBox>
      <StyledBox sx={{ textAlign: 'right', padding: '0px 5px 0px 5px', backgroundColor: 'lightgray', borderRadius: '0px 0px 10px 10px' }}> {time} </StyledBox>
    </Box>
  );
}

export default MessageCard;