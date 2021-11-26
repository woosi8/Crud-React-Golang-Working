import { styled, Button } from '@mui/material';

const StyledButton = styled(Button)(({ theme }) => ({
  '&:hover': {
    // backgroundColor: theme.palette.grey[200]
  }
}));

export default function SquareButton(props) {
  return <StyledButton {...props} />;
}
