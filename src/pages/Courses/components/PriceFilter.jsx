import { useState } from "react";
import { PRICE_RANGE, PRICE_MAP } from "/src/config/priceRanges";

const PriceFilter = ({ onPriceChange }) => {
  const [selected, setSelected] = useState([]);

  const toggle = (id) => {
    const newIds = selected.includes(id)
      ? selected.filter((s) => s !== id)
      : [...selected, id];

    setSelected(newIds);
    onPriceChange?.(newIds);
  };

  return (
    <div className="space-y-1.5">
      <h3 className="my-2 text-lg font-bold">Price</h3>{" "}
      {PRICE_RANGE.map((range) => (
        <label
          key={range.id}
          htmlFor={range.id}
          className="flex items-center gap-2"
        >
          <input
            type="checkbox"
            name={range.label}
            id={range.id}
            checked={selected.includes(range.id)}
            onChange={() => toggle(range.id)}
          />
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {range.label}
          </span>
        </label>
      ))}
    </div>
  );
};

export default PriceFilter;
