import 'react-perfect-scrollbar/dist/css/styles.css';
import { RecoilRoot } from 'recoil';
import { useRoutes } from 'react-router-dom';
import {
  ThemeProvider,
  StyledEngineProvider,
  CssBaseline
} from '@mui/material';
import routes from './routes';
import Theme1 from './theme/Theme1';

const App = () => {
  const content = useRoutes(routes);

  return (
    <RecoilRoot>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={Theme1}>
          <CssBaseline />
          {content}
        </ThemeProvider>
      </StyledEngineProvider>
    </RecoilRoot>
  );
};

export default App;
