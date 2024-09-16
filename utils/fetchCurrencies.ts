// utils/fetchCurrencies.js
export async function fetchCurrencies() {
  const response = await fetch("/api/currencies");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
}
