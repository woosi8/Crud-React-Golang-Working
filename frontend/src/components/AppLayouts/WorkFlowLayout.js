import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AppSider from '../AppSiders/AppSider';
import Main from '../AppSiders/Main';

import { workflowItems } from '../AppSiders/SiderItems';

const WorkFlowLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppSider open={open} setOpen={setOpen} items={workflowItems} />
      <Main open={open}>
        <Outlet />
      </Main>
    </>
  );
};

export default WorkFlowLayout;
