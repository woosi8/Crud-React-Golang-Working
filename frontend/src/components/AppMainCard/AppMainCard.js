import {
  Stack,
  Typography,
  InputAdornment,
  InputBase,
  Hidden
} from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import { styled } from '@mui/styles';

const StyledSearchBox = styled(InputBase)(({ theme }) => ({
  backgroundColor: theme.palette.grey.A200,
  borderRadius: '50px',
  padding: '0 10px 0 10px',
  border: '1px solid',
  borderColor: theme.palette.grey.A200,
  transition: theme.transitions.create(['background-color', 'border'], {
    duration: theme.transitions.duration.search
  }),
  '&.Mui-focused': {
    backgroundColor: 'white',
    border: '1px solid',
    borderColor: theme.palette.primary.main
  }
}));

const AppMainCard = ({ title }) => {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Hidden lgDown>
        <Typography component="h4" variant="h4">
          {title}
        </Typography>
      </Hidden>
      <Hidden lgUp>
        <Typography component="h5" variant="h5">
          {title}
        </Typography>
      </Hidden>
      <StyledSearchBox
        placeholder="Search..."
        startAdornment={
          <InputAdornment position="start">
            <SearchOutlined />
          </InputAdornment>
        }
      />
    </Stack>
  );
};

export default AppMainCard;
