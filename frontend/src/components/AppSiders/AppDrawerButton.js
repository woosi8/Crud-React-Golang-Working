import { IconButton } from '@mui/material';
import { styled } from '@mui/styles';

const AppDrawerButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  color: theme.palette.primary.main,
  left: 0,
  position: 'fixed',
  width: '25px',
  height: '40px',
  marginTop: '30%',
  borderRadius: '1px',
  boxShadow: '0 0 6px 0 rgba(0, 0, 0, 0.12)',
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  marginLeft: 0,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: '256px'
  })
}));

export default AppDrawerButton;
