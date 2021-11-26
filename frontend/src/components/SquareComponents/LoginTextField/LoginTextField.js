import { styled, TextField } from '@mui/material';

const StyledTextField = styled(TextField)(({ theme }) => ({}));

export default function LoginTextField(props) {
  return <StyledTextField {...props} />;
}
