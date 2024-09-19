type Props = {
  currencies: Currency[];
  loading: boolean;
};
import React, { useState, useEffect } from "react";
import Flag from "react-world-flags";
import { Currency } from "@/types";
import { FaCaretRight } from "react-icons/fa";
import {
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";

type Order = "asc" | "desc";

const CurrencyTable: React.FC<Props> = ({ currencies, loading }) => {
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
    <TableContainer className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
      <Table className="min-w-full" aria-label="a dense table">
        <TableHead className="bg-gray-200 border-b border-gray-300">
          <TableRow>
            <TableCell className="text-light-black-color font-semibold !py-1">
              <TableSortLabel
                active={orderBy === "code"}
                direction={orderBy === "code" ? order : "asc"}
                onClick={() => handleRequestSort("code")}
                className="text-light-black-color text-[12px] font-semibold"
              >
                Code
              </TableSortLabel>
            </TableCell>
            <TableCell className="text-light-black-color font-semibold !py-1">
              <TableSortLabel
                active={orderBy === "name"}
                direction={orderBy === "name" ? order : "asc"}
                onClick={() => handleRequestSort("name")}
                className="text-light-black-color text-[12px] font-semibold"
              >
                Currency
              </TableSortLabel>
            </TableCell>
            <TableCell className="!py-1">
              <span className="text-light-black-color text-[12px] font-semibold">
                Sell Price
              </span>
            </TableCell>
            <TableCell className="!py-1">
              <span className="text-light-black-color text-[12px] font-semibold">
                Buy Price
              </span>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loading
            ? Array.from(new Array(10)).map((_, index) => (
                <TableRow
                  className={`transition-colors duration-300 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-200`}
                  key={index}
                >
                  <TableCell className="text-light-black-color font-semibold !py-2">
                    <Skeleton variant="text" width="60%" />
                  </TableCell>
                  <TableCell className="text-light-black-color font-semibold !py-2">
                    <Skeleton variant="text" width="80%" />
                  </TableCell>
                  <TableCell className="text-light-black-color font-semibold !py-2">
                    <Skeleton variant="text" width="40%" />
                  </TableCell>
                  <TableCell className="text-light-black-color font-semibold !py-2">
                    <Skeleton variant="text" width="40%" />
                  </TableCell>
                </TableRow>
              ))
            : sortedCurrencies.map((currency, index) => (
                <TableRow
                  key={currency.name}
                  className={`transition-colors duration-300 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-200`}
                >
                  <TableCell className="!py-2 text-gray-700">
                    <div className="flex items-center text-sm font-semibold whitespace-nowrap">
                      <Flag
                        code={currency.countryCode}
                        width={15}
                        height={15}
                        className="mr-2"
                      />
                      {currency.code}
                    </div>
                  </TableCell>
                  <TableCell className="!py-2 text-gray-700 !text-sm !font-medium whitespace-nowrap">
                    {currency.name}
                  </TableCell>
                  <TableCell className="!py-2 text-gray-700">
                    <div className="flex items-center text-sm font-medium">
                      <FaCaretRight
                        size={14}
                        className={
                          currency.isBull ? "text-green-600" : "text-red-600"
                        }
                      />
                      <span className="ml-2">
                        {Intl.NumberFormat().format(parseFloat(currency.price))}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="!py-2 text-gray-700">
                    <div className="flex items-center font-medium">
                      <FaCaretRight
                        size={14}
                        className={
                          currency.isBull ? "text-green-600" : "text-red-600"
                        }
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
