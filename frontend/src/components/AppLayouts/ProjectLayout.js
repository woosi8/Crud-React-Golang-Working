import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AppSider from '../AppSiders/AppSider';
import Main from '../AppSiders/Main';

import { projectItems } from '../AppSiders/SiderItems';

const ProjectLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppSider open={open} setOpen={setOpen} items={projectItems} />
      <Main open={open}>
        <Outlet />
      </Main>
    </>
  );
};

export default ProjectLayout;
