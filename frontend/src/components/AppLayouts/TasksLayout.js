import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AppSider from '../AppSiders/AppSider';
import Main from '../AppSiders/Main';

import { tasksItems } from '../AppSiders/SiderItems';

const TasksLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppSider open={open} setOpen={setOpen} items={tasksItems} />
      <Main open={open}>
        <Outlet />
      </Main>
    </>
  );
};

export default TasksLayout;
