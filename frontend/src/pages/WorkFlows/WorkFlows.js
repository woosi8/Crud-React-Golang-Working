import { AddOutlined } from '@mui/icons-material';
import { Button } from '@mui/material';
// import { useState } from 'react';
import AppMainCard from 'src/components/AppMainCard/AppMainCard';
import AppToolCard from 'src/components/AppToolCard/AppToolCard';

const WorkFlows = () => {
  // const [open, setOpen] = useState(false);

  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  return (
    <>
      <AppMainCard title={'WorkFlows'} />
      <AppToolCard
        toolButton={
          <Button
            color="dodgerblue"
            variant="contained"
            // onClick={handleOpen}
            startIcon={<AddOutlined />}
          >
            Create
          </Button>
        }
      />
    </>
  );
};

export default WorkFlows;
