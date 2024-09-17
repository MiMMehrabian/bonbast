type Props = {
  currencies: Currency[];
};
import React, { useState, useEffect } from "react";
import Flag from "react-world-flags";
import Paper from "@mui/material/Paper";
import { Currency } from "@/types";
import { FaCaretRight } from "react-icons/fa";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";

type Order = "asc" | "desc";

const CurrencyTable: React.FC<Props> = ({ currencies }) => {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof Currency>("code");

  // Load sorting state from localStorage when component mounts
  useEffect(() => {
    const savedOrder = localStorage.getItem("order") as Order | null;
    const savedOrderBy = localStorage.getItem("orderBy") as
      | keyof Currency
      | null;

    // Ensure the saved values are valid
    if (savedOrder && (savedOrder === "asc" || savedOrder === "desc")) {
      setOrder(savedOrder);
    }
    if (savedOrderBy && (savedOrderBy === "code" || savedOrderBy === "name")) {
      setOrderBy(savedOrderBy);
    }
  }, []);

  // Save sorting state to localStorage whenever it changes
  useEffect(() => {
    // localStorage.setItem("order", order);
    // localStorage.setItem("orderBy", orderBy);
  }, [order, orderBy]);

  const handleRequestSort = (property: keyof Currency) => {
    const isAscending = orderBy === property && order === "asc";
    setOrder(isAscending ? "desc" : "asc");
    setOrderBy(property);
  };

  const sortedCurrencies = [...currencies].sort((a, b) => {
    if (orderBy === "price") {
      return order === "asc"
        ? parseFloat(a.price) - parseFloat(b.price)
        : parseFloat(b.price) - parseFloat(a.price);
    } else {
      return order === "asc"
        ? (a[orderBy] as string).localeCompare(b[orderBy] as string)
        : (b[orderBy] as string).localeCompare(a[orderBy] as string);
    }
  });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>
              <TableSortLabel
                active={orderBy === "code"}
                direction={orderBy === "code" ? order : "asc"}
                onClick={() => handleRequestSort("code")}
              >
                Code
              </TableSortLabel>
            </TableCell>
            <TableCell align="left">
              <TableSortLabel
                active={orderBy === "name"}
                direction={orderBy === "name" ? order : "asc"}
                onClick={() => handleRequestSort("name")}
              >
                Currency
              </TableSortLabel>
            </TableCell>
            <TableCell align="left">Sell Price</TableCell>
            <TableCell align="left">Buy Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedCurrencies.map((currency) => (
            <TableRow
              key={currency.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <div className="flex gap-x-2">
                  <Flag code={currency.countryCode} width={15} height={15} />
                  {currency.code}
                </div>
              </TableCell>
              <TableCell align="left">{currency.name}</TableCell>
              <TableCell align="left">
                <div className="flex items-center">
                  <FaCaretRight
                    size={14}
                    color={currency.isBull ? "#58dd68" : "red"}
                  />
                  <span className="ml-2">
                    {Intl.NumberFormat().format(parseFloat(currency.price))}
                  </span>
                </div>
              </TableCell>
              <TableCell align="left">
                <div className="flex items-center">
                  <FaCaretRight
                    size={14}
                    color={currency.isBull ? "#58dd68" : "red"}
                  />
                  <span className="ml-2">
                    {Intl.NumberFormat().format(parseFloat(currency.price))}
                  </span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CurrencyTable;
