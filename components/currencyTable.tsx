import React from "react";

import Flag from "react-world-flags";

import { Currency } from "@/types";
import { FaCaretRight } from "react-icons/fa";

type Props = {
  currencies: Currency[];
};

// CurrencyTable component to display a table of currencies
const CurrencyTable: React.FC<Props> = ({ currencies }) => {
  return (
    <section className="container mx-auto px-4 py-6">
      {/* Table heading */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Currency List
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {/* Column headers */}
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                Code
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">
                Currency
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
            {/* Render rows for each currency */}
            {currencies.map((currency, index) => (
              <tr
                key={currency.code + `${index}`}
                className={`transition-colors duration-300 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100`}
              >
                {/* Currency name */}
                <td className="px-6 py-4 text-sm text-gray-800">
                  <div className="flex gap-x-2">
                    <Flag code={currency.countryCode} width={15} />
                    {currency.name}
                  </div>
                </td>
                {/* Currency code with styling */}
                <td className="px-6 py-4 text-sm text-gray-700">
                  <span className="inline px-2 py-1 text-sm font-medium text-gray-800">
                    {currency.code}
                  </span>
                </td>
                {/* Sell price */}
                <td className="px-6 py-4 text-sm text-gray-800">
                  <div className="flex items-center">
                    <FaCaretRight
                      size={14}
                      color={currency.isBull ? "#58dd68" : "red"}
                    />
                    <span className="ml-2">{currency.price}</span>
                  </div>
                </td>
                {/* Buy price, formatted */}
                <td className="px-6 py-4 text-sm text-gray-800">
                  <div className="flex items-center">
                    <FaCaretRight
                      size={14}
                      color={currency.isBull ? "#58dd68" : "red"}
                    />
                    <span className="ml-2">
                      {Number(currency.price).toFixed(0)}
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

export default CurrencyTable;
