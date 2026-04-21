import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const InstructorCard = ({ instructor }) => {
  // this formatter will display numbers (5000) => (5K)
  const formatter = Intl.NumberFormat("en", { notation: "compact" });
  return (
    <Link
      to="/"
      className="group rounded-3xl bg-white p-6 shadow-sm transition hover:shadow-lg dark:bg-gray-800 dark:shadow-primary-950"
    >
      <img
        src={instructor.image}
        alt="Sarah John"
        className="mx-auto h-25 w-25 rounded-full border-3 border-gray-300 dark:border-gray-700"
      />
      <p className="font-display mt-3 line-clamp-2 text-lg transition-colors group-hover:text-primary-600">
        {instructor.name}
      </p>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        {instructor.title}
      </p>
      <div className="my-4 flex items-center justify-center gap-1 text-sm">
        <FontAwesomeIcon icon={faStar} size="sm" className="text-yellow-500" />
        <span className="font-medium">{instructor.review.stars}</span>
        <span className="text-gray-600 dark:text-gray-500">
          ({formatter.format(instructor.review.nums)})
        </span>
      </div>
      <div className="flex items-center justify-evenly border-t border-gray-300 pt-4 dark:border-gray-600">
        <p className="flex flex-col text-sm">
          <span className="font-medium">
            {formatter.format(instructor.students)}
          </span>
          <span className="text-gray-600 dark:text-gray-500">Students</span>
        </p>
        <p className="flex flex-col text-sm">
          <span className="font-medium">{instructor.courses}</span>
          <span className="text-gray-600 dark:text-gray-500">Courses</span>
        </p>
      </div>
    </Link>
  );
};

export default InstructorCard;
