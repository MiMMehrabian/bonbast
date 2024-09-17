"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Currency } from "@/types";
import { FaExchangeAlt } from "react-icons/fa";
import FromModal from "./fromModal";
import ToModal from "./toModal";

type Props = {
  currencies: Currency[];
};

const CalculatorSection: React.FC<Props> = ({ currencies }) => {
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

  const getCurrency = useCallback(
    (code: string): Currency | undefined =>
      currencies.find((currency) => currency.code === code),
    [currencies]
  );

  const [open, setOpen] = useState(false);
  const [openTo, setOpenTo] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleOpenTo = () => setOpenTo(true);
  const handleClose = () => setOpen(false);
  const handleCloseTo = () => setOpenTo(false);

  useEffect(() => {
    if (currencies.length > 1) {
      setCurrencyFrom(currencies[0].code);
      setCurrencyTo(currencies[1].code);
    }
  }, [currencies]);

  useEffect(() => {
    const fromCurrency = getCurrency(currencyFrom);
    const toCurrency = getCurrency(currencyTo);

    if (!fromCurrency || !toCurrency) {
      return;
    }

    const convertCurrency = (
      amount: number,
      fromPrice: number,
      toPrice: number
    ) => (amount * fromPrice) / toPrice;

    const amount = (
      whoChange === "fromChanged" ? amountFrom : amountTo
    ) as string;

    if (isNaN(Number(amount)) || Number(amount) <= 0) {
      console.error("Invalid amount");
      return;
    }

    const fromPrice = parseFloat(fromCurrency.price);
    const toPrice = parseFloat(toCurrency.price);

    const convertedAmount =
      whoChange === "fromChanged"
        ? convertCurrency(parseFloat(amount), fromPrice, toPrice)
        : convertCurrency(parseFloat(amount), toPrice, fromPrice);

    if (whoChange === "fromChanged") {
      setAmountTo(convertedAmount.toFixed(2));
    } else {
      setAmountFrom(convertedAmount.toFixed(2));
    }
  }, [amountFrom, amountTo, currencyFrom, currencyTo, getCurrency, whoChange]);

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
      <FromModal
        currencies={currencies}
        setCurrencyFrom={setCurrencyFrom}
        open={open}
        handleClose={handleClose}
        currencyFrom={currencyFrom}
      />
      <ToModal
        currencies={currencies}
        currencyTo={currencyTo}
        openTo={openTo}
        handleClose={handleCloseTo}
        setCurrencyTo={setCurrencyTo}
      />
      <div className="rounded-2xl">
        <h1 className="bg-gray-100 py-2 px-5 rounded-t-2xl text-light-black-color">
          Currency Converter
        </h1>
        <div className="flex flex-col md:flex-row mt-5 gap-x-5 gap-y-5">
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
              <button
                value={currencyFrom}
                onClick={handleOpen}
                className=" join-item bg-gray-100 text-light-black-color flex justify-center place-items-center pr-3 hover:outline-none focus-within:outline-none"
              >
                <option value={currencyFrom}>{currencyFrom}</option>
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <FaExchangeAlt
              size={30}
              className="text-light-black-color rotate-90 md:rotate-0"
            />
          </div>
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
              <button
                value={currencyTo}
                onClick={handleOpenTo}
                className=" join-item bg-gray-100 text-light-black-color flex justify-center place-items-center pr-3 hover:outline-none focus-within:outline-none"
              >
                <option value={currencyTo}>{currencyTo}</option>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorSection;
