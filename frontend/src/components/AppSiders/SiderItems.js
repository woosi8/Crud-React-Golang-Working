import {
  DesktopWindowsOutlined,
  GridViewOutlined,
  ListOutlined
} from '@mui/icons-material';
import AddCardIcon from '@mui/icons-material/AddCard';
export const workspaceItems = [
  // {
  //   href: '/app/workspace/dashboard',
  //   icon: <DesktopWindowsOutlined />,
  //   title: 'Dashboard'
  // },
  {
    href: '/app/workspace/workspaces',
    icon: <GridViewOutlined />,
    title: 'WorkSpaces'
  }
];

export const virtualizationItems = [
  {
    href: '/app/virtualization/virtualdashboard',
    icon: <GridViewOutlined />,
    title: 'VirtualDashboard'
  }
];

export const projectItems = [
  // {
  //   href: '/app/project/dashboard',
  //   icon: <DesktopWindowsOutlined />,
  //   title: 'Dashboard'
  // },
  {
    href: '/app/project/projects',
    icon: <GridViewOutlined />,
    title: 'Projects'
  }
];

export const tasksItems = [
  {
    href: '/app/tasks/dashboard',
    icon: <DesktopWindowsOutlined />,
    title: 'Dashboard'
  }
];

export const workflowItems = [
  // {
  //   href: '/app/workflow/dashboard',
  //   icon: <DesktopWindowsOutlined />,
  //   title: 'Dashboard'
  // },
  {
    href: '/app/workflow/workflows',
    icon: <GridViewOutlined />,
    title: 'WorkFlows'
  }
];

export const analysisItems = [
  {
    href: '/app/analysis/dashboard',
    icon: <DesktopWindowsOutlined />,
    title: 'Dashboard'
  }
];

export const teamItems = [
  {
    href: '/app/team/dashboard',
    icon: <AddCardIcon />,
    title: 'Make_Cards_Modal'
  },
  {
    href: '/app/team/allusers',
    icon: <ListOutlined />,
    title: 'Make_Table_User'
  },

  {
    href: '/app/team/managers',
    icon: <ListOutlined />,
    title: 'Managers'
  },

  {
    href: '/app/team/teamSpecification',
    icon: <ListOutlined />,
    title: 'TeamMake'
  }
];

export const settingsItems = [
  {
    href: '/app/settings/dashboard',
    icon: <DesktopWindowsOutlined />,
    title: 'Dashboard'
  }
];
