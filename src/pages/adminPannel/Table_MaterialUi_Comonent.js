import React ,{useState}from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      { date: '2020-01-05', customerId: '11091700', amount: 300,FAT:300,protein:"joker" },
 
    ],
  };

}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();


  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <br></br>
           <h1>Form</h1>
           <br></br>
           <br></br>
            <div className="box">
               <div className="col col-1">
               <div className="row_border">Name</div>
                 <div className="row_border" >Hospital</div>
                 <div className="row_border">Previous Disease</div>
                 <div className="row_border">Age</div>
               </div>

               <div className="col col-2">
               <div className="row_border">subhan</div>
                 <div  className="row_border">AGHA KHAN</div>
                 <div className="row_border">No Record</div>
                 <div className="row_border">21</div>
               </div>

               {/* <div className="col col-3">
               <div>name</div>
                 <div hospital></div>
                 <div>previous disease</div>
                 <div>age</div>
               </div>


               <div className="col col-4">
               <div>name</div>
                 <div hospital></div>
                 <div>previous disease</div>
                 <div>age</div>
               </div>
              
               <div className="col col-5">
               <div>name</div>
                 <div hospital></div>
                 <div>previous disease</div>
                 <div>age</div>
               </div> */}
            </div>
            <br></br>
         <div className="btn_group">   
                    <div className="btn_div"><button className="btn" 
                    // onClick={()=>{setResult("POSITIVE")}}
                    >POSITIVE</button></div><div className="btn_div">
                      <button className="btn" 
                      // onClick={()=>{setResult("POSITIVE")}}
                      >
                        NEGATIVE</button></div>
          </div>
            {/* <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                FORM
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>FORM</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">{historyRow.protein}</TableCell>
                      <TableCell align="right">{historyRow.fat}</TableCell>
                     
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box> */}
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};


export default function CollapsibleTable() {
   
  const result=useState("none")
  console.log(result)
  const rows = [
    createData('suban akram', 1, result[0]),
    createData("hassan", 1, result[0]),
  
  ];
 
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>User Name </TableCell>
            <TableCell align="right">id</TableCell>
            <TableCell align="right">check result</TableCell>
            <TableCell align="right" style={{color:"white"}}>Carbs</TableCell>
            {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row  key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
