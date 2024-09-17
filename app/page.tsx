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
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineDiscord, AiOutlineYoutube } from "react-icons/ai";
import { Input, TextField } from "@mui/material";

const ariaLabel = { "aria-label": "Email" };

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
    <>
      <div className="container mx-auto p-6 md:p-10">
        <div className="flex flex-col lg:flex-row gap-10">
          <CurrencyTable currencies={currencies} />
          <div className="flex flex-col">
            <GoldsTable golds={golds} />
            <div className="grid grid-cols-2 gap-3 mt-5">
              {coins.map((coin) => (
                <GoldPriceCard key={coin.id} coin={coin} />
              ))}
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1">
          <CalculatorSection currencies={currencies} />
        </div>
      </div>
      <footer className="bg-light-black-color gap-y-5 p-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        <div>
          <h1 className="text-4xl font-bold">BonBast</h1>
          <div className="flex gap-4 mt-5  place-items-center">
            <FaFacebookF size={22} />
            <FaXTwitter size={22} />
            <AiOutlineYoutube size={30} />
            <AiOutlineDiscord size={30} />
          </div>
        </div>
        <div>
          <h1 className="text-xl">Support</h1>
          <ul className="mt-5">
            <li className="my-1">Contact Us</li>
            <li className="my-1">FAQ</li>
            <li className="my-1">About Us</li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl">API</h1>
          <ul className="mt-5">
            <li className="my-1">API key</li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl mb-5">Always be aware of up-to-date prices</h1>
          <div className="flex justify-start place-items-center">
            <input
              type="email"
              placeholder="Your email Address"
              className="border-b border-white p-2 bg-light-black-color w-full outline-none"
            />
            <button className="bg-gray-50 text-light-black-color rounded-r-2xl p-2">
              Subscribe
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
