import { faker } from "@faker-js/faker";

// Mapping of gold types to names
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
  // Generate a list of gold price objects with mock data
  const goldPrices = Array.from({ length: 5 }, () => {
    // Select a random gold type from the predefined list
    const type = faker.helpers.arrayElement(goldTypes);

    return {
      id: generateUniqueId(), // Unique ID for each gold type
      type, // Random gold type from the predefined list
      price: faker.finance.amount({ min: 50, max: 5000, dec: 2 }), // Random gold price with two decimal places
    };
  });

  // Return the list of gold prices in JSON format
  return new Response(JSON.stringify(goldPrices), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
