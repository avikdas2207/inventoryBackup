import React,{useState,useEffect}  from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import CloseIcon from '@material-ui/icons/Close';
import GlobalSearch from '../../../components/GlobalSearch/GlobalSearch.jsx';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CustomizedDialogsBillSundries from '../dialog_bill/dialog_bill.jsx';
import DeleteDialog from '../../delete_dialog/delete_dialog';
import PersonIcon from '@material-ui/icons/Person';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import './bill_sundries_table.scss';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
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

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
  { id: 'calories', numeric: true, disablePadding: false, label: 'Type' },
  { id: 'fat', numeric: true, disablePadding: false, label: 'Default Value' },
  
];

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <>
        <NewReleasesIcon />
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          Bill Sundries
        </Typography>
        </>
      )}

      {numSelected > 0 ? (<>
          
        <Tooltip title="Delete">
          <IconButton aria-label="delete" onClick={handleClickOpen} >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Uncheck">
          <IconButton aria-label="delete">
            <CloseIcon />
          </IconButton>
        </Tooltip>
        <DeleteDialog open={open} handleClickOpen={handleClickOpen} handleClose={handleClose} />
        </>
      ) : (
          <>
          
          <GlobalSearch />
        <Tooltip title="Refresh list">
          <IconButton aria-label="filter list">
            <AutorenewIcon />
          </IconButton>
        </Tooltip>
        </>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(100);
  const [open, setOpen] = React.useState(false);
  const [data,setData]=useState([])

  useEffect(() => {
          axios
      .get(`http://inv.letseduvate.com/api/billsundries/?ordering=-id&page=1&page_size=10`)
      .then((res) => {
        console.log(res.data,"search")
        // console.log(res.data.results[0].gst_treatment.name)
        setData(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      });    

  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = data.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    //console.log(name,"requireditem")
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
  //console.log(rowsPerPage,"rowsPerPage")
  return (
    <div className={classes.root} id="table-container" >
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} open={open} handleClickOpen={()=>handleClickOpen()} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            // size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
            size="small"
          >
             <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
               rowCount={data.length}
            /> 
            <TableBody>
              {
              stableSort(data, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((item, index) => {
                  //console.log(item.gst_treatment.name, "hey")
                   const isItemSelected = isSelected(item.name);
                   console.log(isItemSelected, "selected item")
                   const labelId = `enhanced-table-checkbox-${index}`;
                   const name=item.name;
                  return (
                    <TableRow
                      hover
                      onClick={(event) => {handleClick(event, data.name)
                        console.log(item, "itemed")
                        }}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={data.name}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {item.name}
                      </TableCell>
                      <TableCell align="right">{item.type}</TableCell>
                      <TableCell align="right">{item.default_value}</TableCell>
                      {/* <TableCell align="right">{item.mobile_number}</TableCell> */}
                      {/* <TableCell align="right">{item.company_name}</TableCell> */}
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[ 100, 500 , 1000]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <CustomizedDialogsBillSundries open={open} handleClickOpen={()=>handleClickOpen()} handleClose={()=>handleClose()} />
    </div>
  );
}
