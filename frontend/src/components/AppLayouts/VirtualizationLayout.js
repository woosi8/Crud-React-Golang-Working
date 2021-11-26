import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AppSider from '../AppSiders/AppSider';
import Main from '../AppSiders/Main';

import { virtualizationItems } from '../AppSiders/SiderItems';

const VirtualizationLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppSider open={open} setOpen={setOpen} items={virtualizationItems} />
      <Main open={open}>
        <Outlet />
      </Main>
    </>
  );
};

export default VirtualizationLayout;
