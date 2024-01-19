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
  let refresh = 0;
  const [searchedValue, setSearchedValue] = useState("");
  // const [searchedData, setSearchedData] = useState("");
  const [sortedValue, setSortedValue] = useState("");
  const [filteredValue, setFilteredValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const dispatch = useDispatch();

  const [resultData, setResultData] = useState([]);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  let data = useSelector((state) => state.product.data);

  // SEARCH START

  useEffect(() => {
    setResultData(() => {
      if (searchedValue) {
        const copyArr = [...data];
        const Search = [...copyArr].filter((elem) =>
          elem.name.toLowerCase().includes(searchedValue.toLowerCase())
        );
        return Search;
      }
      if (sortedValue == "name") {
        const copyArr = [...data];
        console.log("test case!", copyArr);
        const sortByName = [
          ...copyArr.sort((a, b) => a.name.localeCompare(b.name)),
        ];

        console.log("test updated - ", sortByName);
        return sortByName;
      }
      if (sortedValue == "price") {
        const copyArr = [...data];
        const sortByPrice = [...copyArr.sort((a, b) => a.price - b.price)];
        return sortByPrice;
      }
    });
  }, [sortedValue]);

  useEffect(() => {
    setResultData(data);
    console.log("DATAA", data);
  }, [data]);

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
            onClick={() => {
              setFilteredValue("price");
            }}
          >
            Filter by PRICE
          </Button>
          <Button
            variant="contained"
            color="success"
            style={{ marginRight: "20px" }}
            onClick={() => {
              setSortedValue("name");
            }}
          >
            Sort by NAME
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              console.log("sorted");
              setSortedValue("price");
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
          {resultData &&
            resultData.map((row) => (
              <StyledTableRow key={row._id}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.name}</StyledTableCell>
                <StyledTableCell align="right">{row.price}</StyledTableCell>
                <StyledTableCell align="right">
                  {row.description}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Button
                    variant="outlined"
                    color="error"
                    id={row._id}
                    onClick={(e) => {
                      console.log(e.target.id);
                      dispatch(deleteProduct(e.target.id));
                      console.log("before", refresh);
                      refresh = 1;
                      console.log("after", refresh);
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
