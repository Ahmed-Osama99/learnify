import { Link } from "react-router-dom";

const FilterAside = ({ categoryData, urlCategory }) => {
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
      </div>
    </aside>
  );
};

export default FilterAside;
