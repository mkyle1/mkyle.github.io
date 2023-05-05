import { Box, Paper, styled } from '@mui/material';
import React, { PropsWithChildren } from 'react';

type Props = {
  text: String;
  usernickname: String;
  time: String;
}

const StyledBox = styled(Box)({
  backgroundColor: '#D2D2D2',
  width: 'auto',
});
    
function MessageCard({ usernickname, text, time }: PropsWithChildren<Props>): JSX.Element {
  return (
    <Box sx={{ display: 'inline-block', margin: '10px', textAlign: 'left' }}>
      <StyledBox sx={{ p: 1, textAlign: 'left' }}>{usernickname}</StyledBox>
      <Paper>{text}</Paper>
      <Paper sx={{ textAlign: 'right' }}>{time}</Paper>
    </Box>
  );
}

export default MessageCard;