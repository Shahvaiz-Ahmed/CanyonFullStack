import React from "react";
import { Container, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TablePagination from "@mui/material/TablePagination";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Layout from "../Layout/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#182E49",
    color: theme.palette.common.white,
    fontSize: "16px",
    whiteSpace: "nowrap",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: "8px 16px", // Adjust the padding here (vertical: 8px, horizontal: 16px)
    whiteSpace: "nowrap",
  },
}));

const TableContainerWrapper = styled(TableContainer)(({ theme }) => ({
  width: "100%",
  minHeight: 600,
  position: "relative",
  overflowX: "auto",
}));

const PaginationWrapper = styled(TablePagination)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  right: 0,
  background: "#f0f0f0", // Set a background color for pagination
  padding: theme.spacing(1), // Add some padding for better appearance
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },

  // hide last border

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  orderno,
  OrderDate,
  CustomerName,
  Address,
  cellToAddressLine,
  status,
  email
) {
  return {
    orderno,
    OrderDate,
    CustomerName,
    Address,
    cellToAddressLine,
    status,
    email,
  };
}

const OrderHistory = () => {
  const accessToken =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FwaS5idXNpbmVzc2NlbnRyYWwuZHluYW1pY3MuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNGU5NGYwNmYtZGIwMS00N2ViLWFmZjMtN2EyODRiMDFkZDg0LyIsImlhdCI6MTY5MDI2NjAzOCwibmJmIjoxNjkwMjY2MDM4LCJleHAiOjE2OTAyNjk5MzgsImFpbyI6IkUyRmdZTkRsU1c4dHpJZzBEZDE5ODhMOHlhMExBUT09IiwiYXBwaWQiOiI2ODE0N2NmZS1kNDcyLTQ3ODgtYTlhYy03YWE4MDQyNDlhOTYiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC80ZTk0ZjA2Zi1kYjAxLTQ3ZWItYWZmMy03YTI4NGIwMWRkODQvIiwiaWR0eXAiOiJhcHAiLCJvaWQiOiI3YTA2ZjFjYi0xOGMyLTRkY2ItOTQ3OS1kOTU4YTk4YzM0MWUiLCJyaCI6IjAuQVVZQWJfQ1VUZ0hiNjBldjgzb29Td0hkaEQzdmJabHNzMU5CaGdlbV9Ud0J1SjlHQUFBLiIsInJvbGVzIjpbIkF1dG9tYXRpb24uUmVhZFdyaXRlLkFsbCIsImFwcF9hY2Nlc3MiLCJBZG1pbkNlbnRlci5SZWFkV3JpdGUuQWxsIiwiQVBJLlJlYWRXcml0ZS5BbGwiXSwic3ViIjoiN2EwNmYxY2ItMThjMi00ZGNiLTk0NzktZDk1OGE5OGMzNDFlIiwidGlkIjoiNGU5NGYwNmYtZGIwMS00N2ViLWFmZjMtN2EyODRiMDFkZDg0IiwidXRpIjoiYkZQZXo1LW96a2lCTEc1OE9ueHlBQSIsInZlciI6IjEuMCJ9.JcUzwL8vDulJne7WddXXU5R0OvpNiBGHyBS5dvuveJuM1dEeYM_t6DUCThhFM8v_BCLYts6eX0r3at_Bg1jicKwp2jr6rL4AT1rXM9r8FF3s_ajO_tnz48OAfQJERJqNHHEaG6aiN9MfgTOOqtk5nf7FfhKlEkiTKGdLOVLOMDPNJrrL1fft8cFZ7K6aNAb-fKpcPugM5xnf-vSzPdhUytMxPxlE0THiC3lPPyTmPrJ1RV6yI5ybr-rfcUQuGFSpdJaHDePqCiZ5ElY1hcFrtvZbPR7bpQuPYjKabxT92a5QUcJS-SC6oqUuJqsnxzuLQCfmYxzxWRr5hp1BOpK3mg";
  const [salesOrders, setSalesOrders] = useState([]);
  const { userNo } = useParams();
  // // console.log(userNo);
  useEffect(() => {
    const url = `https://api.businesscentral.dynamics.com/v2.0/4e94f06f-db01-47eb-aff3-7a284b01dd84/Sandbox/api/v2.0/companies(2bd1cda4-091c-ec11-bb76-000d3a22055d)/salesOrders`;

axios
  .get(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    params: {
      $filter: `customerNumber eq '${userNo}' and status eq 'Open'`,
    },
  })
  .then((response) => {
    setSalesOrders(response.data.value);
    // // console.log(response.data.value); // Assuming the response data is an array of sales orders
  })
  .catch((error) => {
    // Handle any errors that occurred during the request
    console.error("Error fetching sales orders:", error);
  });  

  }, [userNo]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [searchQuery, setSearchQuery] = useState("");
  const filteredOrders = salesOrders.filter((order) =>
    order.number.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
      <Layout>
        <div style={{ marginLeft: "2rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h1>Order</h1>

            <Container maxWidth="md" style={{ marginLeft: " 32rem" }}>
              <TextField
                type="search"
                id="search"
                label="Search Order"
                onChange={(e) => setSearchQuery(e.target.value)}
                sx={{ width: 400 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Container>
          </div>

          {/* Table Below */}

          <TableContainer
            component={Paper}
            className="table-main"
            style={{ width: "100%" }}
          >
            <Table
              sx={{ width: 1450, minHeight: 600, Height: 1200 }}
              aria-label="customized table"
            >
              <TableHead>
                <TableRow>
                  <StyledTableCell style={{ width: "10%" }}>
                    OrderNo
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    OrderDate
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    Customer Name
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    Address
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    Status
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    Email
                  </StyledTableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {filteredOrders
                  ? filteredOrders
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row) => (
                        <>
                          <StyledTableRow key={row.orderId}>
                            <StyledTableCell component="th" scope="row">
                              {row.number}
                            </StyledTableCell>

                            <StyledTableCell align="left">
                              {row.orderDate}
                            </StyledTableCell>

                            <StyledTableCell align="left">
                              {row.customerName}
                            </StyledTableCell>

                            <StyledTableCell align="left">
                              {row.sellToAddressLine1} {row.sellToAddressLine2}
                            </StyledTableCell>

                            <StyledTableCell align="left">
                              {row.status}
                            </StyledTableCell>

                            <StyledTableCell align="left">
                              {row.email}
                            </StyledTableCell>
                          </StyledTableRow>
                        </>
                      ))
                  : salesOrders.map((row) => (
                      <>
                        <StyledTableRow key={row.orderId}>
                          <StyledTableCell component="th" scope="row">
                            {row.number}
                          </StyledTableCell>

                          <StyledTableCell align="right">
                            {row.orderDate}
                          </StyledTableCell>

                          <StyledTableCell align="right">
                            {row.customerName}
                          </StyledTableCell>

                          <StyledTableCell align="right">
                            {row.sellToAddressLine1} {row.sellToAddressLine2}
                          </StyledTableCell>

                          <StyledTableCell align="right">
                            {row.status}
                          </StyledTableCell>

                          <StyledTableCell align="right">
                            {row.email}
                          </StyledTableCell>
                        </StyledTableRow>
                      </>
                    ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 50]}
            component="div"
            count={salesOrders.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
      </Layout>
    </>
  );
};

export default OrderHistory;
