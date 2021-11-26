import { useForm, Form } from '../Custom/UserForm';
// import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
import ShadowPaper from '../SquareComponents/ShadowPaper/ShadowPaper';
import { RegisterTextField, FormButton } from '../SquareComponents';
import { Box, Stack, Typography } from '@mui/material';

// const useStyles = makeStyles((theme) => ({
//   '@global': {
//     body: {
//       backgroundColor: theme.palette.common.white
//     }
//   },
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center'
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(3)
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2)
//   }
// }));

const initialValues = {
  id: 0,
  user_id: '',
  password: '',
  passwordConfirm: '',
  username: '',
  email: ''
};

export default function RegisterComponent(props) {
  const navigate = useNavigate();
  // const classes = useStyles();

  const validate = () => {
    let temp = {};
    temp.email = /$^|.+@.+..+/.test(values.email) ? '' : 'Email is not valid.';
    temp.passwordConfirm =
      values.password === values.passwordConfirm ? '' : 'check your password.';
    setErrors({
      ...temp
    });

    return Object.values(temp).every((x) => x === '');
  };

  const { values, error, setErrors, handleInputChange } =
    useForm(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate('/home');
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
      <Typography textAlign="center" component="div" variant="subtitle1">
        Sign up
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
            <RegisterTextField
              required
              // fullWidth
              name="username"
              label="Username"
              type="username"
              value={values.username}
              onChange={handleInputChange}
            />
            <RegisterTextField
              required
              // fullWidth
              name="user_id"
              label="ID"
              type="user_id"
              value={values.user_id}
              onChange={handleInputChange}
            />
            <RegisterTextField
              required
              // fullWidth
              name="password"
              label="Password"
              type="password"
              value={values.password}
              onChange={handleInputChange}
            />
            <RegisterTextField
              required
              // fullWidth
              name="passwordConfirm"
              label="Confirm password"
              type="password"
              value={values.passwordConfirm}
              onChange={handleInputChange}
              error={error.passwordConfirm}
            />
            <RegisterTextField
              required
              // fullWidth
              name="email"
              label="E-mail"
              value={values.email}
              onChange={handleInputChange}
              error={error.email}
            />
            <FormButton
              type="submit"
              // fullWidth
              variant="outlined"
              color="primary"
              // onClick={() => history.push("/home")}
            >
              Register
            </FormButton>
          </Stack>
        </Form>
      </Box>
    </ShadowPaper>
  );
}
