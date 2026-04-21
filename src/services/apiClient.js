const BASE_URL = "/data"; //points to public/data/
const SIMULATED_DELAY = 1000; // ms - feels like real network

// this delay func for practicing loading state
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const apiGet = async (endpoint) => {
  await delay(SIMULATED_DELAY); // REMEMBER: THIS FOR TEST REAL NETWORK LATENCY

  const response = await fetch(`${BASE_URL}/${endpoint}.json`);

  if (!response.ok) {
    throw new Error(`Failed to fetch ${endpoint} - Status: ${response.status}`);
  }

  return response.json();
};
