export async function fetchGolds() {
  const response = await fetch("/api/gold");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
}
