import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AppSider from '../AppSiders/AppSider';
import Main from '../AppSiders/Main';

import { settingsItems } from '../AppSiders/SiderItems';

const SettingsLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppSider open={open} setOpen={setOpen} items={settingsItems} />
      <Main open={open}>
        <Outlet />
      </Main>
    </>
  );
};

export default SettingsLayout;
