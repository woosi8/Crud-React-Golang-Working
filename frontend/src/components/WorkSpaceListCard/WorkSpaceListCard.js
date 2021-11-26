import { Box, Stack, Typography } from '@mui/material';
import { styled } from '@mui/styles';

const StyledWorkSpaceCardBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '50%',
  height: '10vh',
  borderRadius: '5px',
  backgroundColor: 'darkblue',
  paddingLeft: 20,
  paddingRight: 20
}));

const WorkSpaceListCard = ({ name, icon }) => {
  return (
    <StyledWorkSpaceCardBox>
      <Stack direction="row" spacing={2} alignItems="center">
        <Box>{icon}</Box>
        <Typography variant="h6">{name}</Typography>
      </Stack>
    </StyledWorkSpaceCardBox>
  );
};

export default WorkSpaceListCard;
