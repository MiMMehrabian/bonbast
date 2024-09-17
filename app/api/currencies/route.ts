import { faker } from "@faker-js/faker";
import { Currency } from "@/types";

// Mapping of currency codes to ISO country codes
const currencyToCountryCode: Record<string, string> = {
  USD: "US",
  EUR: "EU", // Note: EUR does not have a specific country flag
  JPY: "JP",
  GBP: "GB",
  AUD: "AU",
  CAD: "CA",
  CHF: "CH",
  CNY: "CN",
  SEK: "SE",
  NZD: "NZ",
};

// Mapping of currency codes to their names
const currencyCodeToName: Record<string, string> = {
  USD: "Dollar",
  EUR: "Euro",
  JPY: "Yen",
  GBP: "Pound Sterling",
  AUD: "Australian Dollar",
  CAD: "Canadian Dollar",
  CHF: "Swiss Franc",
  CNY: "Chinese Yuan",
  SEK: "Swedish Krona",
  NZD: "New Zealand Dollar",
};

// Helper function to generate a unique ID for the currency
function generateUniqueId(): string {
  return (Math.random() * 10000).toFixed(0); // Generate a random number and convert to string
}

// Handler function for the GET request
export async function GET() {
  // Generate a list of currency objects with mock data
  const currencies: Currency[] = Array.from({ length: 10 }, () => {
    // Select a random currency code from the predefined set
    const code = faker.helpers.arrayElement(Object.keys(currencyToCountryCode));

    return {
      id: generateUniqueId(), // Unique ID for each currency
      code, // Random currency code from the predefined set
      name: currencyCodeToName[code] || "Unknown Currency", // Set name based on code
      price: faker.finance.amount({ min: 0.5, max: 10000, dec: 2 }), // Random currency price with two decimal places
      isBull: faker.datatype.boolean(), // Random boolean for market direction
      countryCode: currencyToCountryCode[code], // Country code from the predefined set
    };
  });

  // Return the list of currencies in JSON format
  return new Response(JSON.stringify(currencies), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
