import { faker } from "@faker-js/faker";

// Helper function to generate a unique ID for each item
function generateUniqueId(): number {
  return Math.floor(Math.random() * 1000); // Generate a random number as ID
}

// Helper function to generate mock data for coin information
export async function GET() {
  // Define the list of items with predefined values
  const items = [
    {
      id: generateUniqueId(),
      coinName: "Gold",
      type: "Mesqal",
      price: faker.finance.amount({ min: 20000, max: 30000, dec: 0 }), // Random price within a specific range
      isBull: faker.datatype.boolean(),
    },
    {
      id: generateUniqueId(),
      coinName: "Gold",
      type: "Ounce",
      price: faker.finance.amount({ min: 200000, max: 220000, dec: 0 }), // Random price within a specific range
      isBull: faker.datatype.boolean(),
    },
    {
      id: generateUniqueId(),
      coinName: "Gold",
      type: "Geram",
      price: faker.finance.amount({ min: 200000, max: 220000, dec: 0 }), // Random price within a specific range
      isBull: faker.datatype.boolean(),
    },
    {
      id: generateUniqueId(),
      coinName: "Bitcoin",
      type: "",
      price: faker.finance.amount({ min: 2000000, max: 2500000, dec: 0 }), // Random price within a specific range
      isBull: faker.datatype.boolean(),
    },
  ];

  // Return the list of items in JSON format
  return new Response(JSON.stringify(items), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
