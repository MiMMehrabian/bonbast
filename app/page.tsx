"use client";
import { useEffect, useState } from "react";
import { Currency } from "@/types";
import { fetchCurrencies } from "@/utils/fetchCurrencies";
import CurrencyTable from "@/components/currencyTable";
import CalculatorSection from "@/components/calculatorSection";
import Skeleton from "@/components/skeleton";

const Home: React.FC = () => {
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  // Fetch currencies on component mount
  useEffect(() => {
    const loadCurrencies = async () => {
      try {
        const data = await fetchCurrencies();
        setCurrencies(data);
      } catch (error) {
        console.error("Failed to fetch currencies:", error);
        setError("Something went wrong while fetching currencies.");
      } finally {
        setLoading(false);
      }
    };

    loadCurrencies();
  }, []);

  // Render loading state
  if (loading) {
    return <Skeleton />;
  }

  // Render error state
  if (error) {
    return <div className="text-red-600">Error: {error}</div>;
  }

  // Render main content
  return (
    <div className="container mx-auto p-6 md:p-10">
      <CurrencyTable currencies={currencies} />
      <CalculatorSection currencies={currencies} />
    </div>
  );
};

export default Home;
