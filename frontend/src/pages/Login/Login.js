import Box from '@mui/material/Box';

// import { LoginComponent } from "../../Components/Login/Login";
import LoginComponent from 'src/components/Login/Login';

export default function Login(props) {
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
      <LoginComponent
        history={props.history}
        user_id={props.user_id}
        user_password={props.user_password}
        handleChange={props.handleChange}
        handleSubmit={props.handleSubmit}
      />
    </Box>
  );
}
