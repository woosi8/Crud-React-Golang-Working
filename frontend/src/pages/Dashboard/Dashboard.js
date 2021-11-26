import { makeStyles } from '@mui/styles';

import { Hidden, Box } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  container: {
    // backgroundColor: theme.palette.primary.main,
    // paddingTop: theme.spacing(10),
    // paddingLeft: theme.spacing(3)
    marginLeft: '-256px'
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <>
      <Hidden lgUp>
        <Box sx={{ height: '100%', marginLeft: '256px' }} />
      </Hidden>
      <div className={classes.container}>
        <h1>Dashboard</h1>
      </div>
    </>
  );
};

export default Dashboard;
