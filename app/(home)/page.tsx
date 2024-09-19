"use client";
import { useEffect, useState } from "react";

import { Coins, Currency, Gold } from "@/types";

import { fetchCurrencies } from "@/utils/fetchCurrencies";

import CurrencyTable from "@/components/currencyTable";
import CalculatorSection from "@/components/calculatorSection";
import ErrorDisplay from "@/components/errorDisplay";
import { fetchGolds } from "@/utils/fetchGolds";
import GoldsTable from "@/components/goldsTable";
import GoldPriceCard from "@/components/goldPriceCard";
import { fetchCoins } from "@/utils/fetchCoins";
import { styled, Tab, Tabs } from "@mui/material";
import Footer from "@/components/footer";

interface StyledTabProps {
  label: string;
}

const Home: React.FC = () => {
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [golds, setGolds] = useState<Gold[]>([]);
  const [coins, setCoins] = useState<Coins[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const AntTab = styled((props: StyledTabProps) => (
    <Tab disableRipple {...props} />
  ))(({ theme }) => ({
    textTransform: "none",
    minWidth: 0,
    [theme.breakpoints.up("sm")]: {
      minWidth: 0,
    },
    padding: "0 10px",
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    color: "rgba(0, 0, 0, 0.85)",
    transition:
      "background-color 0.3s ease, color 0.3s ease, border-radius 0.3s ease, transform 0.3s ease", // Add transform to transition
    "&.Mui-selected": {
      color: "#000",
      transition:
        "background-color 0.3s ease, color 0.3s ease, border-radius 0.3s ease, transform 0.3s ease",
      backgroundColor: "#f8f8f8",
      border: "none",
      borderRadius: "10px",
      fontWeight: theme.typography.fontWeightMedium,
      boxShadow: "inset 0 1px 2px rgba(0, 0, 0, 0.2)", // Inner shadow effect
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#d1eaff",
    },
    "&.Mui-selected:before": {
      display: "none", // Hide any default underline
    },
  }));
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

  // Render error state
  if (error) {
    return <ErrorDisplay error={error} />;
  }

  // Render main content
  return (
    <>
      <div className="max-w-[1402px] mx-auto px-4">
        <div>
          <p className="text-2xl font-semibold text-light-black-color my-4">
            Today&apos;s Currency Prices by Bonbast
          </p>
        </div>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons={false}
          aria-label="scrollable prevent tabs example"
        >
          <AntTab label="Currency" />
          <AntTab label="Gold" />
          <AntTab label="Indexes" />
        </Tabs>
        {value === 0 && (
          <div className="flex flex-col gap-10 my-5">
            <CurrencyTable currencies={currencies} loading={loading} />
            <div className="grid md:grid-cols-2 grid-cols-1">
              <CalculatorSection currencies={currencies} />
            </div>
          </div>
        )}
        {value === 1 && (
          <div className="flex flex-col my-5">
            <GoldsTable golds={golds} />
          </div>
        )}
        {value === 2 && (
          <div className="grid grid-cols-2 gap-3 mt-5">
            {coins.map((coin) => (
              <GoldPriceCard key={coin.id} coin={coin} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;
