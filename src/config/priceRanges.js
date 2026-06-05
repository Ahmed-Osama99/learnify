export const PRICE_RANGE = [
  { id: "free", label: "Free" },
  { id: "un50", label: "Under $50" },
  { id: "mid", label: "$50 - $100" },
  { id: "high", label: "$100+" },
];

export const PRICE_MAP = new Map([
  ["free", (p) => p === 0],
  ["un50", (p) => p > 0 && p < 50],
  ["mid", (p) => p >= 50 && p <= 100],
  ["high", (p) => p >= 100],
]);
