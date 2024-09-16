// app/api/users/route.js

import { Currency } from "@/types";
import { faker } from "@faker-js/faker";

// Handler function for the GET request
export async function GET() {
  // Generate a list of currency objects with mock data
  const currencies: Currency[] = Array.from({ length: 10 }, () => ({
    id: generateUniqueId(), // Unique ID for each currency
    code: faker.finance.currencyCode(), // Random currency code
    name: faker.finance.currencyName(), // Random currency name
    price: faker.finance.amount({ min: 0.5, max: 10000, dec: 2 }), // Random currency price with two decimal places
  }));

  // Return the list of currencies in JSON format
  return new Response(JSON.stringify(currencies), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

// Helper function to generate a unique ID for the currency
function generateUniqueId(): string {
  return (Math.random() * 100).toFixed(0); // Generate a random number and convert to string
}
