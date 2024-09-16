"use client";
import { useEffect, useState } from "react";

import { Currency } from "@/types";
import { fetchCurrencies } from "@/utils/fetchCurrencies";

import CurrencyTable from "@/components/currencyTable";
import CalculatorSection from "@/components/calculatorSection";

export default function Home() {
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  //load currency list from faker-js and setState
  useEffect(() => {
    const loadCurrencies = async () => {
      try {
        const data = await fetchCurrencies();
        setCurrencies(data);
      } catch (error) {
        setError("something went wrong");
      } finally {
        setLoading(false);
      }
    };

    loadCurrencies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto md:p-10 p-6">
      <CurrencyTable currencies={currencies} />
      <CalculatorSection currencies={currencies} />
    </div>
  );
}
