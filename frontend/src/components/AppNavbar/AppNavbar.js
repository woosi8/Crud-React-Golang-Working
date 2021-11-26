import PropTypes from 'prop-types';
import { AppBar, Box, Toolbar, Hidden } from '@mui/material';
// import {
//   DashboardCustomizeOutlined,
//   AccountTreeOutlined,
//   TaskOutlined,
//   AnalyticsOutlined,
//   GroupWorkOutlined,
//   SettingsOutlined,
//   DesignServicesOutlined
// } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import {
  useLocation,
  matchPath,
  NavLink as RouterLink
} from 'react-router-dom';

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
import SquareButton from '../SquareComponents/Button/Button';

const items = [
  {
    href: '/app/team',
    icon: <AiOutlineTeam />,
    title: 'CRUD'
  },
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
    href: '/app/settings',
    icon: <AiOutlineSetting />,
    title: 'Settings'
  }
];

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'white',
    // color: theme.palette.primary.main
    color: theme.palette.grey.main,
    boxShadow: theme.bottomShadows.first
  }
}));

const AppNavbar = ({ onMobileNavOpen, ...rest }) => {
  const location = useLocation();
  const classes = useStyles();

  return (
    <AppBar
      className={classes.root}
      elevation={0}
      sx={{
        mt: '60px',
        zIndex: (theme) => theme.zIndex.drawer + 1
      }}
      {...rest}
    >
      <Hidden lgDown>
        <Toolbar variant="dense">
          {items.map((item, index) => {
            const active = item.href
              ? !!matchPath(
                  {
                    path: item.href,
                    end: false
                  },
                  location.pathname
                )
              : false;

            return (
              <Box key={index} sx={{ flexGrow: 0.1 }}>
                <SquareButton
                  component={RouterLink}
                  to={item.href}
                  variant="text"
                  color="inherit"
                  startIcon={item.icon}
                  sx={{
                    textTransform: 'none',
                    ...(active && {
                      color: 'primary.main'
                    })
                  }}
                >
                  {item.title}
                </SquareButton>
              </Box>
            );
          })}
        </Toolbar>
      </Hidden>
    </AppBar>
  );
};

AppNavbar.prototypes = {
  onMobileNavOpen: PropTypes.func
};

export default AppNavbar;
