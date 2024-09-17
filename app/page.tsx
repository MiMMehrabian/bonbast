"use client";
import { useEffect, useState } from "react";

import { Coins, Currency, Gold } from "@/types";

import { fetchCurrencies } from "@/utils/fetchCurrencies";

import CurrencyTable from "@/components/currencyTable";
import CalculatorSection from "@/components/calculatorSection";
import Skeleton from "@/components/skeleton";
import ErrorDisplay from "@/components/errorDisplay";
import { fetchGolds } from "@/utils/fetchGolds";
import GoldsTable from "@/components/goldsTable";
import GoldPriceCard from "@/components/goldPriceCard";
import { fetchCoins } from "@/utils/fetchCoins";

const Home: React.FC = () => {
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [golds, setGolds] = useState<Gold[]>([]);
  const [coins, setCoins] = useState<Coins[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  // Fetch currencies on component mount
  useEffect(() => {
    const loadCurrencies = async () => {
      try {
        const data = await fetchCurrencies();
        setCurrencies(data);
      } catch (error) {
        setError("OOPS! Something went wrong while fetching currencies.");
      } finally {
        setLoading(false);
      }
    };

    loadCurrencies();
  }, []);
  // Fetch coins on component mount
  useEffect(() => {
    const loadCoins = async () => {
      try {
        const data = await fetchCoins();
        setCoins(data);
      } catch (error) {
        setError("OOPS! Something went wrong while fetching currencies.");
      } finally {
        setLoading(false);
      }
    };

    loadCoins();
  }, []);
  // Fetch golds on component mount
  useEffect(() => {
    const loadGolds = async () => {
      try {
        const data = await fetchGolds();
        setGolds(data);
      } catch (error) {
        setError("OOPS! Something went wrong while fetching golds.");
      } finally {
        setLoading(false);
      }
    };

    loadGolds();
  }, []);

  // Render loading state
  if (loading) {
    return <Skeleton />;
  }

  // Render error state
  if (error) {
    return <ErrorDisplay error={error} />;
  }

  // Render main content
  return (
    <div className="container mx-auto p-6 md:p-10">
      <div className="flex flex-col lg:flex-row">
        <CurrencyTable currencies={currencies} />
        <div className="flex flex-col">
          <GoldsTable golds={golds} />
          <div className="grid grid-cols-2 gap-3 px-4">
            {coins.map((coin) => (
              <GoldPriceCard key={coin.id} coin={coin} />
            ))}
          </div>
        </div>
      </div>
      <CalculatorSection currencies={currencies} />
    </div>
  );
};

export default Home;
