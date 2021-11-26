import { Container, Fab, Modal, Snackbar, Tooltip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import AddIcon from '@mui/icons-material/Add';
import { useState, useEffect } from 'react';

// import MuiAlert from "@mui/lab/Alert";
import Theme from 'src/theme/Theme1';
import TeamCreate from './TeamCreate';

const useStyles = makeStyles((theme) => ({
  fab: {
    // position: "fixed",
    // bottom: 1,
    // left: 20,
  },
  container: {
    width: 800,
    // height: 550,
    height: '72vh',
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto',
    padding: 0,
    [Theme.breakpoints.up('lg')]: {
      height: '55vh'
    },
    [Theme.breakpoints.down('md')]: {
      width: '80vw',
      height: '65vh'
    },

    border: '1px solid black',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  form: {
    // padding: Theme.spacing(),
    padding: '0 38px',
    height: '80%',
    overflow: 'overlay',
    '&Typography': {
      marginBottom: '0'
    }
  },
  item: {
    marginBottom: Theme.spacing(1),
    marginTop: Theme.spacing(1),
    display: 'flex',
    alignItems: 'center'
  },
  itemBtn: {
    marginBottom: Theme.spacing(1),
    marginTop: Theme.spacing(1),
    display: 'flex',
    // alignItems: "center",
    justifyContent: 'center',
    // position: "absolute",
    // bottom: "3%",
    [Theme.breakpoints.down('lg')]: {
      // bottom: 25,
      // right: 50,
      // position: "inherit",
    },
    [Theme.breakpoints.down('md')]: {
      // position: "inherit",
      // position: "absoulte",
    }
  },
  typo: {
    width: '15%',
    marginBottom: '0',
    [Theme.breakpoints.down('md')]: {
      width: '20%'
    }
  },
  subtypo: {
    backgroundColor: '#b2ebf2',
    padding: '15px 10px',
    textAlign: 'center',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px'
  }
}));

const TeamModal = ({ check }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [datas, setDatas] = useState([]);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    setOpenAlert(false);
  };

  const getOpen = (open) => {
    setOpen(open);
  };

  const data = (data) => {
    setDatas(data);
  };

  useEffect(() => {
    // console.log(datas);
    check(datas);
  }, [datas, check]);

  return (
    <>
      <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
        <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open} onClose={handleClose}>
        <Container className={classes.container}>
          <TeamCreate getOpen={getOpen} data={data} />
        </Container>
      </Modal>
      <Snackbar
        open={openAlert}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      ></Snackbar>
    </>
  );
};

export default TeamModal;
