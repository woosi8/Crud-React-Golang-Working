import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
// import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { SearchOutlined } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { InputAdornment, InputBase } from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { Link as RouteLink } from 'react-router-dom';
import { Avatar } from '@mui/material';
import { IMaskInput } from 'react-imask';
import PhoneInput from 'mui-phone-input';
//npm i mui-phone-input
// import request from '../../axios';
import request from '../../../axios';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  // backgroundColor: theme.palette.primary.main,
  // color: '#fff',
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '50px'
}));

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
function createData(id, name, email, phonNumber, company, edit) {
  return {
    id,
    name,
    email,
    phonNumber,
    company,
    edit
  };
}

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: false,
    label: 'Name'
  },
  {
    id: 'email',
    numeric: false,
    disablePadding: false,
    label: 'Email'
  },
  {
    id: 'phonNumber',
    numeric: false,
    disablePadding: false,
    label: 'Phon-number'
  },
  {
    id: 'company',
    numeric: false,
    disablePadding: false,
    label: 'Company'
  },

  {
    id: 'edit',
    numeric: false,
    disablePadding: false,
    label: 'Edit'
  }
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox" sx={{ pl: 4 }}>
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts'
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
};

const EnhancedTableToolbar = (props) => {
  const navigate = useNavigate();
  let { numSelected } = props;
  const { selected } = props; //delte id
  const check = props.checkDel;
  const deleteRow = async (id) => {
    try {
      const response = await request('delete', `/delete_table/${id}`, {});
      if (response.status === 'ok') {
        alert('삭제완료.');
      }
    } catch (err) {
      console.log(err);
      alert(err);
    } finally {
      console.log('ggoodd');
      check([]);
      // navigate('/app/team/allusers/');
      // window.location.replace('/app/team/allusers/');

      // setSelected([]);
    }
  };

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            )
        })
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h3"
          id="tableTitle"
          component="div"
        >
          All Users
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete" onClick={() => deleteRow(selected)}>
          <IconButton>
            <DeleteIcon color="primary" />
          </IconButton>
        </Tooltip>
      ) : null}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired
};

export default function TeamManagers() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('project');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);

  const initialFormState = {
    ID: null,
    name: '',
    email: '',
    phonnumber: ``,
    company: ''
  };
  const [values, setValues] = useState(initialFormState);
  const checkDel = (ck) => {
    setSelected(ck);
  };

  const [getvalues, setGetValues] = useState([]);
  const [orows, setoRows] = useState([]);
  const handleChangeT = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
    console.log(values);
  };

  const getMessages = () => {
    axios
      .get('/get_table/')
      .then(function (response) {
        let data = response.data.result;
        setGetValues(data);
        setoRows(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getMessages();
    // }, []);
  }, [values, selected]);
  // }, [getvalues,order, orderBy, selected, page, rowsPerPage]);

  const handleAdd = async () => {
    try {
      const response = await request('post', `create_table`, values);
      // data(response.result);
      console.log(response.result);
      if (response.status === 'ok') {
        alert('팀이 생성되었습니다.');

        // history.push('/report')
      }
    } catch (err) {
      console.log(err);
      alert(err);
    } finally {
      console.log('ggoodd');
      setValues(initialFormState);
    }
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = getvalues.map((n) => n.ID);
      setSelected(newSelecteds);
      return;
    }
    // console.log(selected);
    setSelected([]);
  };

  const handleClick = (event, row) => {
    const selectedIndex = selected.indexOf(row.ID);
    // const selectedId = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, row.ID);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
    // console.log(selected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - getvalues.length) : 0;

  const handleChange = (event) => {
    const searchedval = event.target.value;
    const filteredRows = getvalues.filter((row) => {
      return row.name.toLowerCase().includes(searchedval.toLowerCase());
    });
    setGetValues(filteredRows);
    if (searchedval === '') {
      console.log('hlep');
      setGetValues(orows);
    }
    console.log(getvalues);
    console.log(orows);
  };

  // const cancelSearch = () => {
  //   setSearched('');
  //   requestSearch(searched);
  // };
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ width: '50%', margin: '0 auto', marginBottom: '30px' }}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          onChange={handleChangeT}
          required
          value={values.name}
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          onChange={handleChangeT}
          required
          value={values.email}
          variant="outlined"
        />
        <TextField
          fullWidth
          label="PhonNumber"
          name="phonnumber"
          value={values.phonnumber}
          // value={Number(values.phonnumber) || ``}
          onChange={handleChangeT}
          type="number"
          inputProps={{
            maxLength: 11,
            inputMode: 'numeric',
            pattern: '[0-9]*'
          }}
          required
          variant="outlined"
        />

        <TextField
          fullWidth
          label="Company"
          name="company"
          onChange={handleChangeT}
          required
          value={values.company}
          variant="outlined"
        />

        <Button
          color="primary"
          variant="contained"
          onClick={handleAdd}
          sx={{ width: '100%' }}
        >
          CREATE
        </Button>
      </Box>
      <StyledToolbar>
        <EnhancedTableToolbar
          numSelected={selected.length}
          selected={selected}
          checkDel={checkDel}
        />

        <Tooltip title="Filter list">
          {/* <FilterAltIcon /> */}
          {/* <SearchIcon /> */}
          <StyledSearchBox
            placeholder="Search..."
            name="name"
            onChange={handleChange}
            startAdornment={
              <InputAdornment position="start">
                <SearchOutlined />
              </InputAdornment>
            }
          />
        </Tooltip>
      </StyledToolbar>
      <Box sx={{ width: '85%', m: '0 auto' }}>
        <Paper sx={{ width: '100%', mb: 2 }}>
          <TableContainer>
            <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={getvalues.length}
              />
              <TableBody>
                {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
                {stableSort(getvalues, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.ID);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.ID}
                        selected={isItemSelected}
                        sx={{ height: '80px' }}
                      >
                        <TableCell padding="checkbox" sx={{ pl: 4 }}>
                          <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            inputProps={{
                              'aria-labelledby': labelId
                            }}
                          />
                        </TableCell>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          <Box display="flex" alignItems="center">
                            <Avatar
                              width="35"
                              sx={{
                                borderRadius: '100%',
                                marginRight: '10px',
                                ml: 1
                              }}
                            />
                            <Typography variant="h7" fontWeight="600">
                              {row.name}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>{row.email}</TableCell>
                        <TableCell>{row.phonnumber}</TableCell>
                        <TableCell>{row.company}</TableCell>
                        <TableCell sx={{ pl: 3, pr: 6 }}>
                          {/* <RouteLink
                            to={`usersAccount/${row.ID}`}
                            style={{ textDecoration: 'none' }}
                          > */}
                          <BorderColorIcon
                            style={{ cursor: 'pointer' }}
                            color="primary"
                            // onClick={() => navigate('usersAccount')}
                            onClick={() =>
                              navigate('usersAccount', {
                                state: { newId: row.ID }
                              })
                            }
                          />
                          {/* </RouteLink> */}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[20, 25, 30]}
            component="div"
            count={getvalues.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </>
  );
}
