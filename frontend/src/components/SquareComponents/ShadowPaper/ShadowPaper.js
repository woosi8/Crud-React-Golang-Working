import { styled, Paper } from '@mui/material';

const StyledPaper = styled(Paper)(({ theme }) => ({
  display: 'flex',
  position: 'absolute',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 400,
  // boxShadow: theme.bottomShadows.second,
  paddingTop: 30,
  paddingBottom: 45,
  border: '1px solid',
  borderColor: theme.palette.gainsboro.main
}));

export default function ShadowPaper(props) {
  return <StyledPaper elevation={0} {...props} />;
}
