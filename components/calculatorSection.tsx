"use client";
import React, { useState } from "react";

import { Currency } from "@/types";
import { FaExchangeAlt } from "react-icons/fa";

type Props = {
  currencies: Currency[];
};
function CalculatorSection(props: Props) {
  const [amountFrom, setAmountFrom] = useState("");
  const [amountTo, setAmountTo] = useState("");
  const [currencyFrom, setCurrencyFrom] = useState(props.currencies[0].code);
  const [currencyTo, setCurrencyTo] = useState(props.currencies[1].code);
  const [whoChange, setWhoChange] = useState<"toChanged" | "fromChanged">(
    "fromChanged"
  );

  const getCurrency = (code: string): Currency | undefined =>
    props.currencies.find((currency) => currency.code === code);

  const validateAmount = (amount: string) => {
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
      console.error("Invalid amount");
      return NaN;
    }
    return parsedAmount;
  };

  const convert = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fromCurrency = getCurrency(currencyFrom);
    const toCurrency = getCurrency(currencyTo);

    if (!fromCurrency || !toCurrency) {
      console.error("Invalid currencies");
      return;
    }

    let amount: number;
    let convertedAmount: number;

    if (whoChange === "fromChanged") {
      amount = validateAmount(amountFrom);
      if (isNaN(amount)) return;

      convertedAmount =
        (amount * parseFloat(fromCurrency.price)) /
        parseFloat(toCurrency.price);

      setAmountTo(convertedAmount.toFixed(2));
    } else {
      amount = validateAmount(amountTo);
      if (isNaN(amount)) return;

      convertedAmount =
        (amount * parseFloat(toCurrency.price)) /
        parseFloat(fromCurrency.price);
      setAmountFrom(convertedAmount.toFixed(2));
    }
  };

  const handleFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWhoChange("fromChanged");
    setAmountFrom(e.target.value);
  };

  const handleToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWhoChange("toChanged");
    setAmountTo(e.target.value);
  };
  return (
    <div className="mt-10 w-full mx-auto">
      <div className="rounded-2xl">
        <h1 className="bg-gray-200 py-2 px-5 rounded-t-2xl text-light-black-color">
          Currency Converter
        </h1>
        <form
          onSubmit={(e) => convert(e)}
          className="flex flex-col md:flex-row mt-5 gap-x-5 gap-y-5"
        >
          <div className=" w-full justify-end flex">
            <div className="join w-full">
              <input
                onChange={(e) => handleFromChange(e)}
                value={amountFrom}
                className="input w-full input-bordered join-item bg-gray-200 hover:outline-none focus-within:outline-none"
                placeholder="Currency I have"
              />
              <select
                defaultValue={currencyFrom}
                onChange={(e) => setCurrencyFrom(e.target.value)}
                className="select select-bordered join-item bg-gray-200 text-light-black-color hover:outline-none focus-within:outline-none"
              >
                {props.currencies.map((currency) => {
                  return (
                    <option
                      key={`${currency.code}-${currency.price}`}
                      value={currency.code}
                    >
                      {currency.code}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="justify-center flex place-items-center">
            <button type="submit">
              <FaExchangeAlt
                size={30}
                className="text-light-black-color rotate-90 md:rotate-0"
              />
            </button>
          </div>
          <div className=" w-full justify-start flex">
            <div className="join w-full">
              <input
                onChange={(e) => handleToChange(e)}
                value={amountTo}
                className="input w-full input-bordered join-item bg-gray-200 hover:outline-none focus-within:outline-none"
                placeholder="Currency I want"
              />
              <select
                defaultValue={currencyTo}
                onChange={(e) => setCurrencyTo(e.target.value)}
                className="select select-bordered join-item bg-gray-200 text-light-black-color hover:outline-none focus-within:outline-none"
              >
                {props.currencies.map((currency) => {
                  return (
                    <option
                      key={`${currency.code}-${currency.price}`}
                      value={currency.code}
                    >
                      {currency.code}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CalculatorSection;
