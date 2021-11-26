import { Navigate } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import MainLayout from './components/MainLayout';

import Dashboard from './pages/Dashboard/Dashboard';
import NotFound from './pages/NotFound/NotFound';

import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Team from './pages/Team/Team';

import Count from './pages/Count/Count';
import Contact from './pages/Contact/Contact';

import TableMaking from './pages/TableMaking/TableMaking';
import Tasks from './pages/Tasks/Tasks';
import WorkFlow from './pages/WorkFlow/WorkFlow';
import Analysis from './pages/Analysis/Analysis';
import Settings from './pages/Settings/Settings';
import Help from './pages/Help/Help';
import TeamSpecification from './pages/Team/TeamSpecification';
import WorkSpaces from './pages/WorkSpaces/WorkSpaces';
import WorkSpaceLayout from './components/AppLayouts/WorkSpaceLayout';
import WorkSpace from './pages/WorkSpace/WorkSpace';
import TeamLayout from './components/AppLayouts/TeamLayout';
import ProjectLayout from './components/AppLayouts/ProjectLayout';
import TasksLayout from './components/AppLayouts/TasksLayout';
import WorkFlowLayout from './components/AppLayouts/WorkFlowLayout';
import AnalysisLayout from './components/AppLayouts/AnalysisLayout';
import SettingsLayout from './components/AppLayouts/SettingsLayout';
import Projects from './pages/Projects/Projects';
import WorkFlows from './pages/WorkFlows/WorkFlows';
import Virtualization from './pages/Virtualization/Virtualization';
import VirtualizationLayout from './components/AppLayouts/VirtualizationLayout';
import VirtualDashboard from './pages/VirtualDashboard/VirtualDashboard';
import AllUsers from './pages/Team/AllUsers';
import UsersAccount from './pages/Team/Account';
import Managers from './pages/Team/Managers';
import CheckSquare from './pages/CheckSquare/CheckSquare';
const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: '', element: <Navigate to="/app/team" /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'count', element: <Count /> },
      { path: 'contact', element: <Contact /> },
      { path: 'tableMaking', element: <TableMaking /> },
      { path: 'team', element: <Team /> },
      {
        path: 'virtualization',
        element: <VirtualizationLayout />,
        children: [
          {
            path: '',
            element: <Navigate to="/app/virtualization/virtualdashboard" />
          },
          { path: 'dashboard', element: <Virtualization /> },
          { path: 'virtualdashboard', element: <VirtualDashboard /> }
        ]
      },
      {
        path: 'workspace',
        element: <WorkSpaceLayout />,
        children: [
          { path: '', element: <Navigate to="/app/workspace/workspaces" /> },
          { path: 'dashboard', element: <WorkSpace /> },
          { path: 'workspaces', element: <WorkSpaces /> }
        ]
      },
      // {
      //   path: 'project',
      //   element: <ProjectLayout />,
      //   children: [
      //     { path: '', element: <Navigate to="/app/project/projects" /> },
      //     { path: 'dashboard', element: <Project /> },
      //     { path: 'projects', element: <Projects /> }
      //   ]
      // },
      {
        path: 'tasks',
        element: <TasksLayout />,
        children: [
          { path: '', element: <Navigate to="/app/tasks/dashboard" /> },
          { path: 'dashboard', element: <Tasks /> }
        ]
      },
      {
        path: 'workflow',
        element: <WorkFlowLayout />,
        children: [
          { path: '', element: <Navigate to="/app/workflow/workflows" /> },
          { path: 'dashboard', element: <WorkFlow /> },
          { path: 'workflows', element: <WorkFlows /> }
        ]
      },
      {
        path: 'analysis',
        element: <AnalysisLayout />,
        children: [
          { path: '', element: <Navigate to="/app/analysis/dashboard" /> },
          { path: 'dashboard', element: <Analysis /> }
        ]
      },
      {
        path: 'team',
        element: <TeamLayout />,
        children: [
          { path: '', element: <Navigate to="/app/team/allusers" /> },
          { path: 'allusers', element: <AllUsers /> },
          { path: 'managers', element: <Managers /> },
          { path: 'dashboard', element: <Team /> },
          { path: 'teamSpecification', element: <TeamSpecification /> },
          { path: 'allusers/usersAccount/', element: <UsersAccount /> }
        ]
      },
      {
        path: 'settings',
        element: <SettingsLayout />,
        children: [
          { path: '', element: <Navigate to="/app/settings/dashboard" /> },
          { path: 'dashboard', element: <Settings /> }
        ]
      },

      { path: 'help', element: <Help /> }

      // { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      // { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      {
        path: 'checksquare',
        element: <Navigate to="/app/team/dashboard" />
      },
      // { path: 'checksquare', element: <CheckSquare /> },
      // { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> }
      // { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
