import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar,
  Badge,
  Box,
  Avatar,
  Hidden,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Tooltip
} from '@mui/material';
import {
  MenuOutlined,
  Notifications,
  LogoutOutlined,
  ChatBubble,
  Help,
  PersonOutline,
  SettingsOutlined,
  AccountBalanceWalletOutlined,
  NotificationsOutlined,
  ChatBubbleOutline,
  HelpOutline
} from '@mui/icons-material';
import { Box as BoxIcon } from 'react-feather';
import { deepOrange } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: theme.bottomShadows.second
  }
}));

const DashboardNavbar = ({ onMobileNavOpen, ...rest }) => {
  const classes = useStyles();
  const [notifications] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    window.sessionStorage.clear();
    window.location.reload();
  };

  return (
    <AppBar
      className={classes.root}
      elevation={0}
      {...rest}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar variant="dense" sx={{ height: 60 }}>
        <Hidden lgDown>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={1}
            sx={{ cursor: 'pointer' }}
            onClick={() => navigate('/')}
          >
            <BoxIcon color="white" />
            <Typography variant="h5" component="div">
              BRIX
            </Typography>
          </Stack>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit" size="large" onClick={handleClick}>
            <Avatar
              alt="User Avatar"
              sx={{
                width: 30,
                height: 30,
                bgcolor: deepOrange[500],
                fontSize: 12
              }}
            >
              CPS
            </Avatar>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
          >
            <MenuItem>
              <ListItemIcon>
                <PersonOutline fontSize="small" />
                <ListItemText sx={{ marginLeft: 1 }}>My Account</ListItemText>
              </ListItemIcon>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <AccountBalanceWalletOutlined fontSize="small" />
                <ListItemText sx={{ marginLeft: 1 }}>Billing</ListItemText>
              </ListItemIcon>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <SettingsOutlined fontSize="small" />
                <ListItemText sx={{ marginLeft: 1 }}>Settings</ListItemText>
              </ListItemIcon>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <LogoutOutlined fontSize="small" />
                <ListItemText sx={{ marginLeft: 1 }}>Logout</ListItemText>
              </ListItemIcon>
            </MenuItem>
          </Menu>
          <IconButton color="inherit" size="medium">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <Notifications fontSize="small" />
            </Badge>
          </IconButton>
          <IconButton color="inherit" size="medium">
            <ChatBubble fontSize="small" />
          </IconButton>
          <Tooltip title="Help" onClick={() => navigate('/app/help')}>
            <IconButton color="inherit" size="medium">
              <Help fontSize="small" />
            </IconButton>
          </Tooltip>
        </Hidden>
        {/* ----------------------------------------------------------------------------- */}
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onMobileNavOpen} size="medium">
            <MenuOutlined />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Stack direction="row">
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={1}
              sx={{ cursor: 'pointer' }}
              onClick={() => navigate('/')}
            >
              <BoxIcon color="white" />
              <Typography variant="h5" component="div">
                BRIX
              </Typography>
            </Stack>
          </Stack>
          <Box sx={{ flexGrow: 1 }} />

          <IconButton color="inherit" size="large" onClick={handleClick}>
            <Avatar
              alt="User Avatar"
              sx={{
                width: 30,
                height: 30,
                bgcolor: deepOrange[500],
                fontSize: 12
              }}
            >
              CPS
            </Avatar>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            onClick={handleClose}
          >
            <MenuItem>
              <ListItemIcon>
                <PersonOutline fontSize="small" />
                <ListItemText sx={{ marginLeft: 1 }}>My Account</ListItemText>
              </ListItemIcon>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <AccountBalanceWalletOutlined fontSize="small" />
                <ListItemText sx={{ marginLeft: 1 }}>Billing</ListItemText>
              </ListItemIcon>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <SettingsOutlined fontSize="small" />
                <ListItemText sx={{ marginLeft: 1 }}>Settings</ListItemText>
              </ListItemIcon>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <Badge
                  badgeContent={notifications.length}
                  color="primary"
                  variant="dot"
                >
                  <NotificationsOutlined fontSize="small" />
                </Badge>
                <ListItemText sx={{ marginLeft: 1 }}>Alarm</ListItemText>
              </ListItemIcon>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ChatBubbleOutline fontSize="small" />
                <ListItemText sx={{ marginLeft: 1 }}>Message</ListItemText>
              </ListItemIcon>
            </MenuItem>
            <MenuItem onClick={() => navigate('/app/help')}>
              <ListItemIcon>
                <HelpOutline fontSize="small" />
                <ListItemText sx={{ marginLeft: 1 }}>Help</ListItemText>
              </ListItemIcon>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <LogoutOutlined fontSize="small" />
                <ListItemText sx={{ marginLeft: 1 }}>Logout</ListItemText>
              </ListItemIcon>
            </MenuItem>
          </Menu>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

DashboardNavbar.prototypes = {
  onMobileNavOpen: PropTypes.func
};

export default DashboardNavbar;
