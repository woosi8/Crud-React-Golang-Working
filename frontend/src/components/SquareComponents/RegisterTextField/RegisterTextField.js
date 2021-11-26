import { styled, TextField } from '@mui/material';

const StyledTextField = styled(TextField)(({ theme }) => ({}));

export default function RegisterTextField(props) {
  return <StyledTextField {...props} />;
}
