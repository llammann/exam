import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getAllProducts, deleteProduct } from "./../redux/slices/ProductSlice";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
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

export default function CustomizedTables() {
  const [searchedValue, setSearchedValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  let data = useSelector((state) => state.product.data);

  //   SEARCH START
  const searchedData = data.filter((elem) =>
    elem.name.toLowerCase().includes(searchedValue.toLowerCase())
  );
    data = [...searchedData];

  // SEARCH FINISH
  return (
    <TableContainer component={Paper}>
      <div
        className="inputButtons"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <div className="left">
          <TextField
            id="outlined-basic"
            label="Search by name..."
            variant="outlined"
            onChange={(e) => {
              console.log(e.target.value);
              setSearchedValue(e.target.value);
            }}
          />
        </div>
        <div className="right">
          <Button
            variant="contained"
            color="success"
            style={{ marginRight: "20px" }}
          >
            Filter by PRICE
          </Button>
          <Button
            variant="contained"
            color="success"
            style={{ marginRight: "20px" }}
            onClick={() => {
              console.log("sorted");
              data.sort((a, b) => a.name.localeCompare(b.name));
            }}
          >
            Sort by NAME
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              console.log("sorted");
              data.sort((a, b) => a.price - b.price);
            }}
          >
            Sort by PRICE
          </Button>
        </div>
      </div>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Description</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
              <StyledTableCell align="right">{row.description}</StyledTableCell>
              <StyledTableCell align="right">
                <Button
                  variant="outlined"
                  color="error"
                  id={row._id}
                  onClick={(e) => {
                    console.log(e.target.id);
                    dispatch(deleteProduct(e.target.id));
                  }}
                >
                  Delete
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
