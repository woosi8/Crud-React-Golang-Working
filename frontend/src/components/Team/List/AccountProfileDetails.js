import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@mui/material';
import { styled } from '@mui/material';
import { logDOM } from '@testing-library/dom';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const StyledCardHeader = styled(CardHeader)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  contrastText: theme.palette.primary.main,
  span: {
    color: '#fff'
  },
  '&.MuiCardHeader-title': {
    color: theme.palette.primary.main,
    contrastText: theme.palette.primary.main
  },
  '&.MuiCardHeader-subheader': {
    color: theme.palette.primary.main,
    contrastText: theme.palette.primary.main
  }
}));
const AccountProfileDetails = (props) => {
  const [values, setValues] = useState({
    name: '',
    company: '',
    email: '',
    phonnumber: ''
  });
  const navigate = useNavigate();

  const [getvalues, setGetValues] = useState([]);
  const handleChange = (event) => {
    setGetValues({
      ...getvalues,
      [event.target.name]: event.target.value
    });
  };
  const userId = window.location.pathname.substring(32, 35);
  const location = useLocation();
  let { newId } = useParams();
  console.log(props.getid);
  const getMessages = () => {
    axios
      .get(`/get_tables/${props.getid}`)
      // .get(`/get_table/1`)
      .then(function (response) {
        console.log(response);
        let data = response.data.result;
        setGetValues(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const updateUser = (userId) => {
    axios
      .put(`/update_table/${props.getid}`, getvalues)
      .then(function (response) {
        console.log(response);
        navigate('/app/team/allusers');
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getMessages();
    // console.log(props.location.state.newId);
  }, []);
  // console.log(getvalues);
  // var index = getvalues.findIndex((i) => i.ID === userId);
  // console.log(index);

  return (
    <form autoComplete="off" noValidate {...props}>
      <Card>
        <StyledCardHeader
          subheader="The information can be edited"
          title="Profile"
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="First name"
                name="name"
                onChange={handleChange}
                required
                value={getvalues.name || ''}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Company"
                name="company"
                onChange={handleChange}
                required
                value={getvalues.company || ''}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                onChange={handleChange}
                required
                value={getvalues.email || ''}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phonnumber"
                onChange={handleChange}
                type="number"
                value={getvalues.phonnumber || ''}
                variant="outlined"
              />
            </Grid>

            {/* <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Select State"
                name="state"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.state}
                variant="outlined"
              >
                {states.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid> */}
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={() => updateUser(userId)}
          >
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default AccountProfileDetails;
