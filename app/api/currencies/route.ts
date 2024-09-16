// app/api/users/route.js
import { Currency } from "@/types";
import { faker } from "@faker-js/faker";

export async function GET() {
  const currencies: Currency[] = Array.from({ length: 10 }, () => ({
    id: (Math.random() * 100).toFixed(0),
    code: faker.finance.currencyCode(),
    name: faker.finance.currencyName(),
    price: faker.finance.amount({ min: 0.5, max: 10000 }),
  }));

  return new Response(JSON.stringify(currencies), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
