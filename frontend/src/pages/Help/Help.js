import { useState } from 'react';

import Main from 'src/components/AppSiders/Main';
import AppSider from 'src/components/AppSiders/AppSider';

const items = [];

const Help = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppSider open={open} setOpen={setOpen} items={items} />
      <Main open={open}>
        <h1>Help</h1>
      </Main>
    </>
  );
};

export default Help;
