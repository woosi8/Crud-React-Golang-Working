import { useState, useEffect } from 'react';
import Main from 'src/components/AppSiders/Main';
import AppSider from 'src/components/AppSiders/AppSider';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import TeamModal from 'src/components/Team/TeamModal';
import { Cards } from 'src/components/Team/Card';
import { teamItems } from 'src/components/AppSiders/SiderItems';
import axios from 'axios';
const useStyles = makeStyles((theme) => ({
  container: {
    // backgroundColor: theme1.palette.primary.main,
    // paddingTop: theme.spacing(16),
    // paddingLeft: theme.spacing(3),
    '&MuiGrid-root': {},
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {}
  },
  grids: {
    marginBottom: '55px'
    // textAlign: "center",
  },
  modalc: {
    textAlign: 'center',
    marginBottom: '55px'
  }
}));
const Team = ({ history }) => {
  // const [toggleDrawer, setToggleDrawer] = useState(false);
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const [msg, setMsg] = useState([]);
  const [prv, setPrv] = useState([]);
  const [del, setDel] = useState([]);
  const [up, setUp] = useState([]);

  const check = (ck) => {
    setPrv(ck);
  };
  const checkDel = (ck) => {
    setDel(ck);
  };
  const checkUp = (ck) => {
    setUp(ck);
  };
  useEffect(() => {
    getMessages();
  }, [prv, del, up]);

  const getMessages = () => {
    axios
      .get('/get_messages/')
      .then(function (response) {
        let data = response.data.result;
        setMsg(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <AppSider open={open} setOpen={setOpen} items={teamItems} />
      <Main open={open}>
        <div className={classes.container}>
          <Grid container sx={{ alignItems: 'center' }} spacing={3}>
            <Grid item md={4} sm={6} xs={2} className={classes.modalc}>
              <TeamModal check={check} />
            </Grid>

            {msg.map((row) => (
              <Grid
                item
                key={row.ID}
                md={4}
                sm={6}
                xs={10}
                className={classes.grids}
              >
                <Cards row={row} checkDel={checkDel} checkUp={checkUp} />
              </Grid>
            ))}
          </Grid>
          {/* <Divider /> */}
        </div>
      </Main>
    </>
  );
};

export default Team;
