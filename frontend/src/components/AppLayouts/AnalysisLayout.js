import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AppSider from '../AppSiders/AppSider';
import Main from '../AppSiders/Main';

import { analysisItems } from '../AppSiders/SiderItems';

const AnalysisLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppSider open={open} setOpen={setOpen} items={analysisItems} />
      <Main open={open}>
        <Outlet />
      </Main>
    </>
  );
};

export default AnalysisLayout;
