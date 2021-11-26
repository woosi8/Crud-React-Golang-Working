import {
  Backdrop,
  Fade,
  Modal,
  Box,
  Typography,
  Stack,
  IconButton,
  InputBase,
  Button
} from '@mui/material';
import { X } from 'react-feather';
import { styled } from '@mui/styles';

const StyledModalBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: 'white',
  boxShadow: 24,
  padding: 20,
  borderRadius: '5px'
}));

const StyledTitleBox = styled(InputBase)(({ theme }) => ({
  borderRadius: '5px',
  padding: '0 1rem 0 1rem',
  border: '2px solid',
  borderColor: theme.palette.grey.A200,
  width: '100%',
  height: '3rem',
  fontSize: '1rem',
  transition: theme.transitions.create('border', {
    duration: theme.transitions.duration.search
  }),
  '&.Mui-focused': {
    border: '2px solid',
    borderColor: theme.palette.primary.main
  }
}));

const WorkSpaceCreateModal = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <Fade in={open}>
        <StyledModalBox>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="h5" color="#505050">
              New WorkSpace
            </Typography>
            <IconButton onClick={handleClose}>
              <X />
            </IconButton>
          </Stack>
          <Box sx={{ margin: '2rem 0 2rem 0' }}>
            <Typography mb={1} variant="body2">
              WorkSpace Name
            </Typography>
            <StyledTitleBox />
          </Box>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="right"
            spacing={2}
          >
            <Button onClick={handleClose}>Cancel</Button>
            <Button variant="contained" onClick={handleClose}>
              Create
            </Button>
          </Stack>
        </StyledModalBox>
      </Fade>
    </Modal>
  );
};

export default WorkSpaceCreateModal;
