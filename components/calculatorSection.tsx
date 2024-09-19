"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Currency } from "@/types";
import FromModal from "./fromModal";
import ToModal from "./toModal";
import { Box, TextField, Button, Typography } from "@mui/material";
import { TbExchange } from "react-icons/tb";

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

    const amount = whoChange === "fromChanged" ? amountFrom : amountTo;

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
    <Box sx={{ maxWidth: "100%" }}>
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
      <Box
        sx={{
          borderRadius: 2,
          boxShadow: 1,
          bgcolor: "background.paper",
          p: 3,
          width: "100%",
        }}
      >
        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
          Currency Converter
        </Typography>
        <Box width={"100%"} className="flex flex-col sm:flex-row" gap={2}>
          <Box width={"100%"} display="flex" alignItems="center">
            <TextField
              variant="outlined"
              type="text"
              value={amountFrom}
              onChange={handleAmountChange(setAmountFrom, "fromChanged")}
              placeholder="Currency I have"
              fullWidth
              sx={{ mr: 1, width: "100%" }}
            />
            <Button
              onClick={handleOpen}
              variant="outlined"
              className="!text-light-black-color !border-gray-300"
            >
              {currencyFrom}
            </Button>
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <TbExchange size={30} className="text-gray-700 rotate-45" />
          </Box>
          <Box width={"100%"} display="flex" alignItems="center">
            <TextField
              variant="outlined"
              type="text"
              value={amountTo}
              onChange={handleAmountChange(setAmountTo, "toChanged")}
              placeholder="Currency I want"
              fullWidth
              sx={{ mr: 1 }}
            />
            <Button
              onClick={handleOpenTo}
              variant="outlined"
              className="!text-light-black-color !border-gray-300"
            >
              {currencyTo}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CalculatorSection;
