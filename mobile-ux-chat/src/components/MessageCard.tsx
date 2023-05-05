import { Box, Paper, styled } from '@mui/material';
import React, { PropsWithChildren } from 'react';

type Props = {
  text: String;
  usernickname: String;
  time: String;
}

const StyledBox = styled(Box)({
  backgroundColor: '#D6D6D6',
  width: 'auto',
});
    
function MessageCard({ usernickname, text, time }: PropsWithChildren<Props>): JSX.Element {
  const limitedText = text ?? ''; // use the entire text message
  return (
    <Box sx={{ display: 'inline-block', margin: '10px', textAlign: 'left' }}>
      <StyledBox sx={{ p: 1, textAlign: 'left', fontSize: '30px', fontWeight: 'bold' }}>{usernickname}</StyledBox>
      <Paper sx={{ fontSize: '25px', wordBreak: 'break-word' }}>{limitedText}</Paper>
      <Paper sx={{ textAlign: 'right', backgroundColor: 'lightgray' }}>{time}</Paper>
    </Box>
  );
}

export default MessageCard;