import { useState } from 'react';
import {
  Stack,
  IconButton,
  Button,
  Menu,
  MenuItem,
  ListItemText
} from '@mui/material';
import { ExpandMore, Folder, Label } from '@mui/icons-material';
import { styled } from '@mui/material';

const StyledMoreButton = styled(Button)(({ theme }) => ({
  color: theme.palette.darkgrey.main,
  fontWeight: 400,
  textTransform: 'none'
}));

const AppToolCard = ({ toolButton }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Stack
      pt={2}
      pb={2}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <IconButton>
          <Folder />
        </IconButton>
        <IconButton>
          <Label />
        </IconButton>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
      >
        <StyledMoreButton onClick={handleClick} endIcon={<ExpandMore />}>
          More
        </StyledMoreButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          onClick={handleClose}
        >
          <MenuItem>
            <ListItemText>More</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText>More</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText>More</ListItemText>
          </MenuItem>
        </Menu>
        {toolButton}
      </Stack>
    </Stack>
  );
};

export default AppToolCard;
