import { AddOutlined } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useState } from 'react';
import AppMainCard from 'src/components/AppMainCard/AppMainCard';
import AppToolCard from 'src/components/AppToolCard/AppToolCard';
import WorkSpaceCreateModal from 'src/components/WorkSpaceCreateModal/WorkSpaceCreateModal';
import WorkSpaceListTable from 'src/components/WorkSpaceListTable/WorkSpaceListTable';

// const workspace_item = [
//   {
//     id: 0,
//     name: 'WorkSpace Name',
//     icon: <CreateOutlined />
//   },
//   {
//     id: 1,
//     name: 'WorkSpace Name',
//     icon: <CreateOutlined />
//   },
//   {
//     id: 2,
//     name: 'WorkSpace Name',
//     icon: <CreateOutlined />
//   },
//   {
//     id: 3,
//     name: 'WorkSpace Name',
//     icon: <CreateOutlined />
//   },
//   {
//     id: 4,
//     name: 'WorkSpace Name',
//     icon: <CreateOutlined />
//   },
//   {
//     id: 5,
//     name: 'WorkSpace Name',
//     icon: <CreateOutlined />
//   }
// ];

const WorkSpaces = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <AppMainCard title={'WorkSpaces'} />
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
      <WorkSpaceListTable />
      <WorkSpaceCreateModal open={open} handleClose={handleClose} />
    </>
  );
};

export default WorkSpaces;
