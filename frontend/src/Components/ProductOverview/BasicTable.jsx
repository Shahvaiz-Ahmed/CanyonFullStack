import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(AvailableQuantity, LeadTimeToShip) {
  return { AvailableQuantity, LeadTimeToShip };
}

export default function BasicTable(props) {
  // // console.log(props.row);
  console.log(props.rows, "now");

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
            key={props.rows ? props.rows.data[0].id : ""}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell>{props.rows ? props.rows.data[0].qnty : ""}</TableCell>

            <TableCell align="right">
              {props.rows ? (props.rows.data[0].qnty ? "1 Day" : "") : ""}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
