"use client";
import {
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

// Main Skeleton component
const SkeletonLoading: React.FC = () => {
  return (
    <div className="max-w-[1402px] mx-auto px-4">
      <TableContainer className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
        <Table className="min-w-full" aria-label="a dense table">
          <TableHead className="bg-gray-200 border-b border-gray-300">
            <TableRow>
              <TableCell className="text-light-black-color font-semibold !py-1">
                <span className="text-light-black-color text-[12px] font-semibold">
                  Code
                </span>
              </TableCell>
              <TableCell className="text-light-black-color font-semibold !py-1">
                <span className="text-light-black-color text-[12px] font-semibold">
                  Currency
                </span>
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
            {Array.from(new Array(5)).map((_, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Skeleton variant="text" width="60%" />
                </TableCell>
                <TableCell>
                  <Skeleton variant="text" width="80%" />
                </TableCell>
                <TableCell>
                  <Skeleton variant="text" width="40%" />
                </TableCell>
                <TableCell>
                  <Skeleton variant="text" width="40%" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default SkeletonLoading;
