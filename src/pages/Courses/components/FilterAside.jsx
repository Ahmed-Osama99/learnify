import { Link } from "react-router-dom";
import PriceFilter from "./PriceFilter";
const LEVELS = ["beginner", "intermediate", "advanced"];

const FilterAside = ({
  categoryData,
  urlCategory,
  urlLevel,
  onPriceChange,
}) => {
  return (
    <aside className="py-4 lg:w-1/5">
      <div className="sticky top-24">
        {/* categories */}
        <h3 className="mb-2 text-lg font-bold">Categories</h3>
        <div className="flex flex-col gap-2">
          <Link
            to={`/courses`}
            className={`rounded-lg px-3 py-2 text-sm transition-all duration-300 ${!urlCategory ? "bg-primary-200 font-semibold text-primary-600 dark:bg-primary-900/30 dark:text-primary-500" : "text-gray-600 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800"}`}
          >
            All Categories
          </Link>
          {categoryData?.map((cat) => (
            <Link
              key={cat.name}
              to={`/courses?category=${encodeURIComponent(cat.name)}`}
              className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-all duration-300 ${urlCategory === cat.name ? "bg-primary-200 font-semibold text-primary-600 dark:bg-primary-900/30 dark:text-primary-500" : "text-gray-600 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800"}`}
            >
              {cat.name}
              <span>({cat.count})</span>
            </Link>
          ))}
        </div>
        {/* levels */}
        <h3 className="my-2 text-lg font-bold">Level</h3>
        <div className="flex flex-wrap gap-2">
          <Link
            to="/courses"
            className={`small-card ${!urlLevel && "!bg-primary-600 !text-white"}`}
          >
            All Levels
          </Link>
          {LEVELS.map((level) => (
            <Link
              key={level}
              to={`/courses?level=${level}`}
              className={`small-card capitalize ${urlLevel === level && "!bg-primary-600 !text-white"}`}
            >
              {level}
            </Link>
          ))}
        </div>
        <PriceFilter onPriceChange={onPriceChange} />
      </div>
    </aside>
  );
};

export default FilterAside;
