import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const CategoryCard = ({ icon, title, desc, courseNum, iconStyle }) => {
  return (
    <Link
      to="/"
      className="group rounded-xl border border-gray-300 p-6 transition-all hover:border-primary-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-primary-800"
    >
      {/* Category icon */}
      <div className={`w-fit rounded-2xl p-4 ${iconStyle}`}>
        <FontAwesomeIcon icon={icon} size="lg" />
      </div>
      {/* Category Name */}
      <h3 className="my-4 font-bold transition-colors group-hover:text-primary-600 dark:group-hover:text-primary-400">
        {title}
      </h3>
      {/* Category Description */}
      <p className="text-sm text-gray-500 dark:text-gray-400">{desc}</p>
      {/* Number of courses */}
      <p className="mt-4 flex items-center gap-2 text-sm text-primary-600 dark:text-primary-400">
        {courseNum} courses <FontAwesomeIcon icon={faArrowRight} size="sm" />
      </p>
    </Link>
  );
};

export default CategoryCard;
