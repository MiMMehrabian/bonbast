import React from "react";

import { Gold } from "@/types";
import { FaCaretRight } from "react-icons/fa";

type Props = {
  golds: Gold[];
};

// GoldsTable component to display a table of golds
const GoldsTable: React.FC<Props> = ({ golds }) => {
  return (
    <section className="container mx-auto px-4 py-6">
      {/* Table heading */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Golds List</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                Coins
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                Sell Price
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                Buy Price
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Render rows for each gold */}
            {golds.map((gold, index) => (
              <tr
                key={gold.type + `${index}`}
                className={`transition-colors duration-300 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100`}
              >
                {/* gold name */}
                <td className="px-6 py-2 text-sm text-gray-800">
                  <div className="flex whitespace-nowrap gap-x-2">{gold.type}</div>
                </td>
                {/* Buy price */}
                <td className="px-6 py-2 text-sm text-gray-800">
                  <div className="flex items-center">
                    <FaCaretRight
                      size={14}
                      color={gold.isBull ? "#58dd68" : "red"}
                    />
                    <span className="ml-2">
                      {Intl.NumberFormat().format(parseFloat(gold.price))}
                    </span>
                  </div>
                </td>
                {/* Sell price */}
                <td className="px-6 py-2 text-sm text-gray-800">
                  <div className="flex items-center">
                    <FaCaretRight
                      size={14}
                      color={gold.isBull ? "#58dd68" : "red"}
                    />
                    <span className="ml-2">
                      {Intl.NumberFormat().format(
                        parseFloat(gold.price) - 100000
                      )}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default GoldsTable;
