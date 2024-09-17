import React from "react";

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

type Props = {
  currencies: Currency[];
};

// CurrencyTable component to display a table of currencies
const CurrencyTable: React.FC<Props> = ({ currencies }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>
              <TableSortLabel>Code</TableSortLabel>
            </TableCell>
            <TableCell align="left">
              <TableSortLabel>Currency</TableSortLabel>
            </TableCell>
            <TableCell align="left">
              <TableSortLabel>Sell Price </TableSortLabel>
            </TableCell>
            <TableCell align="left">
              <TableSortLabel>Buy Price</TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currencies.map((currency) => (
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
                    {Intl.NumberFormat().format(
                      parseFloat(parseFloat(currency.price).toFixed(0))
                    )}
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
