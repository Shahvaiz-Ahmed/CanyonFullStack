import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(AvailableQuantity, LeadTimeToShip) {
  return { AvailableQuantity, LeadTimeToShip };
}



export default function BasicTable(props) {
  // // console.log(props.row);
 

  return (
    
    <TableContainer component={Paper} sx={{ minWidth: 500, maxWidth: 800 }}>
      <Table sx={{ minWidth: 500, maxWidth: 800 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Available Quantity</TableCell>
            <TableCell align="right">Lead Time to Ship</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         
            <TableRow
              key={ props.row.ItemNo}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {props.row.qnty}
              </TableCell>
              <TableCell align="right">{props.row.qnty ? "1 Day" : props.row.LeadTimeToShip   }</TableCell>
            
            </TableRow>
         
        </TableBody>
      </Table>
    </TableContainer>
  );
}