import Box from '@mui/material/Box';

import RegisterComponent from 'src/components/Register/Register';

export default function Register(props) {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        maxWidth: '100%',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <RegisterComponent
        history={props.history}
        // user_id={props.user_id}
        // user_password={props.user_password}
        // handleChange={props.handleChange}
        // handleSubmit={props.handleSubmit}
      />
    </Box>
  );
}
