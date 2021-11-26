// import { Breadcrumbs, Link } from '@mui/material';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AppSider from '../AppSiders/AppSider';
import Main from '../AppSiders/Main';

import { workspaceItems } from '../AppSiders/SiderItems';

const WorkSpaceLayout = () => {
  const [open, setOpen] = useState(false);
  // const location = useLocation();
  // const navigate = useNavigate();

  return (
    <>
      <AppSider open={open} setOpen={setOpen} items={workspaceItems} />
      <Main open={open}>
        {/* <Breadcrumbs>
          <Link underline="hover" color="inherit" onClick={() => navigate('')}>
            WORKSPACE
          </Link>
          <Link
            underline="hover"
            color="inherit"
            onClick={() => navigate(location.pathname.split('/')[3])}
          >
            Dashboard
          </Link>
        </Breadcrumbs> */}
        <Outlet />
        {/* {location.pathname.split('/')[3]} */}
      </Main>
    </>
  );
};

export default WorkSpaceLayout;
