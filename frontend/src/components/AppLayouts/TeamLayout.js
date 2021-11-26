import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AppSider from '../AppSiders/AppSider';
import Main from '../AppSiders/Main';

import { teamItems } from '../AppSiders/SiderItems';

const TeamLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppSider open={open} setOpen={setOpen} items={teamItems} />
      <Main open={open}>
        <Outlet />
      </Main>
    </>
  );
};

export default TeamLayout;
