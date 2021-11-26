import { Box, Drawer, Hidden, List } from '@mui/material';

import { ChevronLeft, ChevronRight } from '@mui/icons-material';

import AppDrawerButton from './AppDrawerButton';
import NavItem from '../NavItem';

const AppSider = ({ open, setOpen, items, test }) => {
  return (
    <>
      <Hidden lgDown>
        <Drawer
          anchor="left"
          open
          variant="permanent"
          PaperProps={{
            sx: {
              pt: '94px',
              width: 256,
              flexShrink: 0
            }
          }}
        >
          <Box sx={{ p: 2, pt: 4 }}>
            <List>
              {items.map((item, index) => (
                <NavItem
                  href={item.href}
                  key={index}
                  title={item.title}
                  icon={item.icon}
                />
              ))}
            </List>
          </Box>
        </Drawer>
      </Hidden>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          open={open}
          variant="persistent"
          PaperProps={{
            sx: {
              pt: '46px',
              width: 256,
              flexShrink: 0
            }
          }}
        >
          <Box sx={{ p: 2, pt: 4 }}>
            <List>
              {items.map((item, index) => (
                <NavItem
                  href={item.href}
                  key={index}
                  title={item.title}
                  icon={item.icon}
                />
              ))}
            </List>
          </Box>
        </Drawer>
        <AppDrawerButton
          open={open}
          onClick={() => setOpen((prev) => !prev, console.log('asdf'))}
        >
          {open ? <ChevronLeft /> : <ChevronRight />}
        </AppDrawerButton>
      </Hidden>
    </>
  );
};

export default AppSider;
