import { faker } from "@faker-js/faker";

// Mapping of gold types
const goldTypes: string[] = [
  "Azadi",
  "Emami",
  "1/2 Azadi",
  "1/4 Azadi",
  "Gerami",
];

// Helper function to generate a unique ID for the gold type
function generateUniqueId(): string {
  return (Math.random() * 10000).toFixed(0); // Generate a random number and convert to string
}

// Handler function for the GET request
export async function GET() {
  // Generate a list of gold price objects with predefined gold types
  const goldPrices = goldTypes.map((type) => ({
    id: generateUniqueId(), // Unique ID for each gold type
    type, // Use each gold type from the predefined list
    price: faker.finance.amount({ min: 10000000, max: 50000000, dec: 0 }), // Random gold price
    isBull: faker.datatype.boolean(), // Random boolean for market direction
  }));

  // Return the list of gold prices in JSON format
  return new Response(JSON.stringify(goldPrices), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
