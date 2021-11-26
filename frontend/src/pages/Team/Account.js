import { AddOutlined } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useState } from 'react';
import AppMainCard from 'src/components/AppMainCard/AppMainCard';
import AppToolCard from 'src/components/AppToolCard/AppToolCard';
// import AccountProfileDetails from 'src/components/AccountTest/AccountProfileDetails';
import AccountProfileDetails from 'src/components/Team/List/AccountProfileDetails';
import Container from '@mui/material/Container';
import { useLocation } from 'react-router-dom';
// import { useParams } from 'react-router';

const UsersAccount = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const location = useLocation();
  // let { userID } = useParams();
  // console.log(userID);
  console.log(location.state.newId);
  // const newId = location.state.userID;
  return (
    <>
      <AppMainCard title={'Detail Account'} />
      <AppToolCard
        toolButton={
          <Button
            color="dodgerblue"
            variant="contained"
            onClick={handleOpen}
            startIcon={<AddOutlined />}
          >
            Add
          </Button>
        }
      />
      <Container maxWidth="md">
        {/* <AccountProfile sx={{ marginBottom: '30px' }} /> */}
        <AccountProfileDetails color="primary" getid={location.state.newId} />
      </Container>
    </>
  );
};

export default UsersAccount;
