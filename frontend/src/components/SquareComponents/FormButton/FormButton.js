import { styled, Button } from '@mui/material';

const StyledFormButton = styled(Button)(({ theme }) => ({
  textTransform: 'none'
}));

export default function FormButton(props) {
  return <StyledFormButton {...props} />;
}
