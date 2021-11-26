import { AddOutlined, MenuOutlined } from '@mui/icons-material';
import {
  Chip,
  LinearProgress,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
  IconButton
} from '@mui/material';
import { styled } from '@mui/styles';

const OnWorkChip = styled(Chip)(({ theme }) => ({
  backgroundColor: 'dodgerblue',
  borderRadius: '5px'
}));

function createData(status, name, progress, team, actions) {
  const status_chip = (
    <OnWorkChip size="small" label={status} color="primary" />
  );

  const progress_bar = (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '100%'
      }}
    >
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" value={progress} />
      </Box>
      <Typography variant="body2">{`${Math.round(progress)}%`}</Typography>
    </Box>
  );

  const actions_buttons = (
    <Stack direction="row" spacing={1}>
      <IconButton>
        <AddOutlined />
      </IconButton>
      <IconButton>
        <MenuOutlined />
      </IconButton>
    </Stack>
  );

  return { status_chip, name, progress_bar, team, actions_buttons };
}

const rows = [
  createData('On Work', 'WorkSpace Name', 50, 'Team', 'Actions'),
  createData('On Work', 'WorkSpace Name', 70, 'Team', 'Actions'),
  createData('On Work', 'WorkSpace Name', 35, 'Team', 'Actions'),
  createData('On Work', 'WorkSpace Name', 90, 'Team', 'Actions'),
  createData('On Work', 'WorkSpace Name', 20, 'Team', 'Actions')
];

const WorkSpaceListTable = () => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Status</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Progress</TableCell>
            <TableCell>Team</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{row.status_chip}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.progress_bar}</TableCell>
              <TableCell>{row.team}</TableCell>
              <TableCell>{row.actions_buttons}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default WorkSpaceListTable;
