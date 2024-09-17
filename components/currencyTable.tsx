import React from "react";

import { Currency } from "@/types";

type Props = {
  currencies: Currency[];
};

// CurrencyTable component to display a table of currencies
const CurrencyTable: React.FC<Props> = ({ currencies }) => {
  return (
    <section className="container mx-auto md:px-4">
      {/* Table heading */}
      <h2 className="text-lg font-medium text-gray-800">Currency List</h2>

      <div className="flex flex-col mt-6">
        {/* Responsive container for the table */}
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {/* Column headers */}
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left text-gray-500"
                    >
                      Code
                    </th>
                    <th
                      scope="col"
                      className="px-12 py-3.5 text-sm font-normal text-left text-gray-500"
                    >
                      Currency
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left text-gray-500"
                    >
                      Sell Price
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left text-gray-500"
                    >
                      Buy Price
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {/* Render rows for each currency */}
                  {currencies.map((currency, index) => (
                    <tr key={currency.code + `${index}`}>
                      {/* Currency name */}
                      <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                        <div className="flex items-center">
                          <h2 className="font-medium text-gray-800">
                            {currency.name}
                          </h2>
                        </div>
                      </td>
                      {/* Currency code with styling */}
                      <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                        <span className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 bg-emerald-100/60">
                          {currency.code}
                        </span>
                      </td>
                      {/* Sell price */}
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <h4 className="text-gray-700">{currency.price}</h4>
                      </td>
                      {/* Buy price, formatted */}
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <h4 className="text-gray-700">
                          {Number(currency.price).toFixed(0)}
                        </h4>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrencyTable;
