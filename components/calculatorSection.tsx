"use client";
import React, { useCallback, useEffect, useState } from "react";

import { Currency } from "@/types";

import { FaExchangeAlt } from "react-icons/fa";

type Props = {
  currencies: Currency[];
};

const CalculatorSection: React.FC<Props> = ({ currencies }) => {
  // State variables for the amounts and selected currencies
  const [amountFrom, setAmountFrom] = useState<string>("1");
  const [amountTo, setAmountTo] = useState<string>("");
  const [currencyFrom, setCurrencyFrom] = useState<string>(
    currencies[0]?.code || ""
  );
  const [currencyTo, setCurrencyTo] = useState<string>(
    currencies[1]?.code || ""
  );
  const [whoChange, setWhoChange] = useState<"toChanged" | "fromChanged">(
    "fromChanged"
  );

  // Function to find a currency by its code
  const getCurrency = useCallback(
    (code: string): Currency | undefined =>
      currencies.find((currency) => currency.code === code),
    [currencies]
  );

  // Effect to initialize currency selection when currencies are updated
  useEffect(() => {
    if (currencies.length > 1) {
      setCurrencyFrom(currencies[0].code);
      setCurrencyTo(currencies[1].code);
    }
  }, [currencies]);

  // Effect to handle currency conversion based on user input
  useEffect(() => {
    const fromCurrency = getCurrency(currencyFrom);
    const toCurrency = getCurrency(currencyTo);

    // Validate if the selected currencies are valid
    if (!fromCurrency || !toCurrency) {
      return;
    }

    // Function to convert currency amounts
    const convertCurrency = (
      amount: number,
      fromPrice: number,
      toPrice: number
    ) => (amount * fromPrice) / toPrice;

    // Determine which field changed and perform conversion
    const amount = (
      whoChange === "fromChanged" ? amountFrom : amountTo
    ) as string;

    // Validate the amount input
    if (isNaN(Number(amount)) || Number(amount) <= 0) {
      console.error("Invalid amount");
      return;
    }

    const fromPrice = parseFloat(fromCurrency.price);
    const toPrice = parseFloat(toCurrency.price);

    // Perform the conversion based on which field changed
    const convertedAmount =
      whoChange === "fromChanged"
        ? convertCurrency(parseFloat(amount), fromPrice, toPrice)
        : convertCurrency(parseFloat(amount), toPrice, fromPrice);

    // Update the state based on the changed field
    if (whoChange === "fromChanged") {
      setAmountTo(convertedAmount.toFixed(2));
    } else {
      setAmountFrom(convertedAmount.toFixed(2));
    }
  }, [amountFrom, amountTo, currencyFrom, currencyTo, getCurrency, whoChange]);

  // Handler function for input field changes
  const handleAmountChange =
    (
      setter: React.Dispatch<React.SetStateAction<string>>,
      changeType: "fromChanged" | "toChanged"
    ) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setWhoChange(changeType);
      setter(e.target.value);
    };

  return (
    <div className="mt-10 w-full mx-auto">
      <div className="rounded-2xl">
        <h1 className="bg-gray-100 py-2 px-5 rounded-t-2xl text-light-black-color">
          Currency Converter
        </h1>
        <div className="flex flex-col md:flex-row mt-5 gap-x-5 gap-y-5">
          {/* Currency input and selection for the 'from' currency */}
          <div className="w-full flex justify-end">
            <div className="join w-full">
              <input
                type="text"
                inputMode="numeric"
                value={amountFrom}
                onChange={handleAmountChange(setAmountFrom, "fromChanged")}
                className="input w-full input-bordered join-item bg-gray-100 hover:outline-none text-light-black-color focus-within:outline-none"
                placeholder="Currency I have"
              />
              <select
                value={currencyFrom}
                onChange={(e) => setCurrencyFrom(e.target.value)}
                className="select select-bordered join-item bg-gray-100 text-light-black-color hover:outline-none focus-within:outline-none"
              >
                {currencies.map((currency, index) => (
                  <option
                    key={currency.code + `${index}`}
                    value={currency.code}
                  >
                    {currency.code}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* Currency exchange icon */}
          <div className="flex justify-center items-center">
            <FaExchangeAlt
              size={30}
              className="text-light-black-color rotate-90 md:rotate-0"
            />
          </div>
          {/* Currency input and selection for the 'to' currency */}
          <div className="w-full flex justify-start">
            <div className="join w-full">
              <input
                type="text"
                inputMode="numeric"
                value={amountTo}
                onChange={handleAmountChange(setAmountTo, "toChanged")}
                className="input w-full input-bordered join-item bg-gray-100 hover:outline-none text-light-black-color focus-within:outline-none"
                placeholder="Currency I want"
              />
              <select
                value={currencyTo}
                onChange={(e) => setCurrencyTo(e.target.value)}
                className="select select-bordered join-item bg-gray-100 text-light-black-color hover:outline-none focus-within:outline-none"
              >
                {currencies.map((currency, index) => (
                  <option
                    key={currency.code + `${index}`}
                    value={currency.code}
                  >
                    {currency.code}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorSection;
