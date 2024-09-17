import React from "react";

import { Gold } from "@/types";
import { FaCaretRight } from "react-icons/fa";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";

type Props = {
  golds: Gold[];
};

// GoldsTable component to display a table of golds
const GoldsTable: React.FC<Props> = ({ golds }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Coins</TableCell>
            <TableCell align="left">Sell Price</TableCell>
            <TableCell align="left">Buy Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {golds.map((gold) => (
            <TableRow
              key={gold.type}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <div className="flex gap-x-2">{gold.type}</div>
              </TableCell>
              <TableCell align="left">
                <div className="flex items-center">
                  <FaCaretRight
                    size={14}
                    color={gold.isBull ? "#58dd68" : "red"}
                  />
                  <span className="ml-2">
                    {Intl.NumberFormat().format(parseFloat(gold.price))}
                  </span>
                </div>
              </TableCell>
              <TableCell align="left">
                <div className="flex items-center">
                  <FaCaretRight
                    size={14}
                    color={gold.isBull ? "#58dd68" : "red"}
                  />
                  <span className="ml-2">
                    {Intl.NumberFormat().format(
                      parseFloat(parseFloat(gold.price).toFixed(0))
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

export default GoldsTable;
