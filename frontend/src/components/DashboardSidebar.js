import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Avatar, Box, Divider, Drawer, List, Typography } from '@mui/material';
// import {
//   DashboardCustomizeOutlined,
//   AccountTreeOutlined,
//   TaskOutlined,
//   AnalyticsOutlined,
//   GroupWorkOutlined,
//   SettingsOutlined,
//   DesignServicesOutlined
// } from '@mui/icons-material';
import NavItem from './NavItem';

import {
  AiOutlineDesktop,
  AiOutlineCodepen,
  // AiOutlineProject,
  AiOutlineCheckCircle,
  AiOutlinePartition,
  AiOutlineDeploymentUnit,
  AiOutlineTeam,
  AiOutlineSetting
} from 'react-icons/ai';

const user = {
  avatar: '/static/images/logo.png',
  jobTitle: 'For your Develope',
  name: 'CPS'
};

const items = [
  {
    href: '/app/dashboard',
    icon: <AiOutlineDesktop />,
    title: 'Dashboard'
  },
  // {
  //   href: '/app/workspace',
  //   icon: <DashboardCustomizeOutlined />,
  //   title: 'WorkSpace'
  // },
  {
    href: '/app/virtualization',
    icon: <AiOutlineCodepen />,
    title: 'Virtualization'
  },
  // {
  //   href: '/app/project',
  //   icon: <AiOutlineProject />,
  //   title: 'Project'
  // },
  {
    href: '/app/tasks',
    icon: <AiOutlineCheckCircle />,
    title: 'Tasks'
  },
  {
    href: '/app/workflow',
    icon: <AiOutlinePartition />,
    title: 'WorkFlow'
  },
  {
    href: '/app/analysis',
    icon: <AiOutlineDeploymentUnit />,
    title: 'Analysis'
  },
  {
    href: '/app/team',
    icon: <AiOutlineTeam />,
    title: 'Team'
  },
  {
    href: '/app/settings',
    icon: <AiOutlineSetting />,
    title: 'Settings'
  }
];

const DashboardSidebar = ({ onMobileClose, openMobile }) => {
  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          p: 2
        }}
      >
        <Avatar
          component={RouterLink}
          src={user.avatar}
          sx={{
            cursor: 'pointer',
            width: 64,
            height: 64
          }}
          to="/app/account"
        />
        <Typography color="textPrimary" variant="h5">
          {user.name}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {user.jobTitle}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
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
      <Box sx={{ flexGrow: 1 }} />
    </Box>
  );

  return (
    <>
      {/* <Hidden lgUp> */}
      <Drawer
        anchor="left"
        onClose={onMobileClose}
        open={openMobile}
        variant="temporary"
        PaperProps={{
          sx: {
            pt: '64px',
            width: 256
          }
        }}
      >
        {content}
      </Drawer>
      {/* </Hidden> */}
      {/* <Hidden lgDown>
        <Drawer
          anchor="left"
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: 256,
              top: appNavBarHeight + navBarHeight,
              height: `calc(100% - ${appNavBarHeight}px - ${navBarHeight}px)`
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden> */}
    </>
  );
};

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

DashboardSidebar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false
};

export default DashboardSidebar;
