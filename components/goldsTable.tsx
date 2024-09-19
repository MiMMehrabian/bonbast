import React from "react";

import { Gold } from "@/types";
import { FaCaretRight } from "react-icons/fa";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

type Props = {
  golds: Gold[];
};

// GoldsTable component to display a table of golds
const GoldsTable: React.FC<Props> = ({ golds }) => {
  return (
    <TableContainer className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
      <Table className="min-w-full" aria-label="a dense table">
        <TableHead className="bg-gray-200 border-b border-gray-300">
          <TableRow>
            <TableCell className="text-light-black-color !py-1">
              <span className=" text-[12px] font-semibold">Coins</span>
            </TableCell>
            <TableCell className="text-light-black-color !py-1 text-[12px] font-semibold">
              <span className=" text-[12px] font-semibold"> Sell Price</span>
            </TableCell>
            <TableCell className="text-light-black-color !py-1 text-[12px] font-semibold">
              <span className=" text-[12px] font-semibold"> Buy Price</span>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {golds.map((gold, index) => (
            <TableRow
              key={gold.type}
              className={`transition-colors duration-300 ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-gray-200`}
            >
              <TableCell className="!py-2  text-gray-700 !text-sm !font-semibold">
                <div className="flex items-center whitespace-nowrap">{gold.type}</div>
              </TableCell>
              <TableCell className="!py-2  text-gray-700 !text-sm !font-medium">
                <div className="flex items-center">
                  <FaCaretRight
                    size={14}
                    className={gold.isBull ? "text-green-600" : "text-red-600"}
                  />
                  <span className="ml-2">
                    {Intl.NumberFormat().format(parseFloat(gold.price))}
                  </span>
                </div>
              </TableCell>
              <TableCell className="!py-2  text-gray-700 !text-sm !font-medium">
                <div className="flex items-center   text-gray-700 !text-sm !font-medium">
                  <FaCaretRight
                    size={14}
                    className={gold.isBull ? "text-green-600" : "text-red-600"}
                  />
                  <span className="ml-2">
                    {Intl.NumberFormat().format(parseFloat(gold.price))}
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
