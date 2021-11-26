import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import { Form } from '../Custom/UserForm';
import { Link as RouteLink } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { loginState } from 'src/pages/Login/Atom';
// import axiosRequest from 'src/utils/axios';
import { useNavigate } from 'react-router';

// import { Paper, styled } from '@mui/material';
import { FormButton, LoginTextField, ShadowPaper } from '../SquareComponents';

// const StyledPaper = styled(Paper)(({ theme }) => ({
//   display: 'flex',
//   position: 'absolute',
//   flexDirection: 'column',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: '40%',
//   boxShadow: theme.bottomShadows.third,
//   paddingTop: 30,
//   paddingBottom: 45
// }));

const LoginComponent = () => {
  const navigate = useNavigate();
  const [values, setValues] = useRecoilState(loginState);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      // const result = await axiosRequest('post', '/api/go/brix/signin', values);
      // window.sessionStorage.setItem('ID', result.result.ID);
      // navigate('/app/dashboard');
      window.sessionStorage.setItem('ID', 'admin');
      navigate('/checksquare');
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  const handleSubmitEnter = (e) => {
    if (e.key === 'Enter') {
      if (!values.login_id || !values.password) {
        alert('Please enter your ID and password');
        return;
      }
      handleSubmit();
    }
  };

  return (
    <ShadowPaper sx={{ width: 400 }}>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}
      >
        <img src="/static/images/logo.png" alt="corplogo" />
      </Box>
      <Typography textAlign="center" component="div" variant="h4">
        Sign in
      </Typography>
      <Typography textAlign="center" component="div" variant="body1" mt={2}>
        Welecome to AI Square
      </Typography>
      <Box
        component="div"
        sx={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          '& > :not(style)': { m: 1, width: '25ch' }
        }}
        noValidate
        autoComplete="off"
      >
        <Form onSubmit={handleSubmit}>
          <Stack direction="column" spacing={4}>
            <LoginTextField
              // required
              name="login_id"
              label="Id"
              // variant="standard"
              value={values.user_id}
              onChange={handleChange}
            />
            <LoginTextField
              // required
              name="password"
              label="Password"
              // variant="standard"
              // type="password"
              value={values.password}
              onChange={handleChange}
              onKeyPress={handleSubmitEnter}
            />
            <FormButton
              variant="contained"
              size="large"
              onClick={handleSubmit}
              // type="button"
            >
              Login
            </FormButton>
          </Stack>
        </Form>
      </Box>
      <Box
        sx={{
          display: 'flex',
          height: '20%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}
      >
        <Typography variant="h8" noWrap component="div" color="gray" mt={1}>
          Don't have an account?&nbsp;
          <RouteLink to="/register">
            <Link underline="hover">{'Sign Up'}</Link>
          </RouteLink>
        </Typography>
      </Box>
    </ShadowPaper>
  );
};

export default LoginComponent;
