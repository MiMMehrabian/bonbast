import { NextResponse } from "next/server";
import { readFileSync } from "fs";
import { join } from "path";

// Path to your JSON file
const filePath = join(process.cwd(), "data", "indexes.json");

// Handler function for the GET request
export async function GET() {
  try {
    // Read the JSON file
    const data = readFileSync(filePath, "utf8");
    const currencies = JSON.parse(data);

    // Return the list of currencies in JSON format
    return NextResponse.json(currencies);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch currency data" },
      { status: 500 }
    );
  }
}
