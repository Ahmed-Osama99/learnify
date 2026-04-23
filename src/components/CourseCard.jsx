import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignal, faStar } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";

const CourseCard = ({course}) => {
    // this formatter will display numbers (5000) => (5K)
  const formatter = Intl.NumberFormat("en", { notation: "compact" });
  return (
    <Link
      to="/"
      className="group overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-sm transition duration-500 hover:-translate-y-1 dark:border-gray-800 dark:bg-gray-900"
    >
      <div className="image-box relative overflow-hidden">
        <img
          src={course.image}
          alt={`${course.id} image`}
          className="transform transition duration-500 group-hover:scale-105"
        />
        <span className="badge-plink absolute top-3 left-3 w-24 rounded-full bg-amber-500 px-2.5 py-1 text-center text-xs font-bold text-white uppercase">
          bestseller
        </span>
        <span className="absolute top-12 left-3 w-24 rounded-full bg-red-500 px-2.5 py-1 text-center text-xs font-bold text-white uppercase">
          {course.discount}% off
        </span>
        <span className="absolute right-3 bottom-3 rounded-full bg-black/70 px-2.5 py-1 text-xs font-medium text-white">
          {course.hoursCount} hours
        </span>
      </div>
      <div className="p-4">
        {/* category */}
        <p className="text-sm font-semibold text-primary-600 uppercase">
          {course.category}
        </p>
        {/* title */}
        <h4 className="mt-4 text-xl font-display line-clamp-2 transition-colors group-hover:text-primary-600">
          {course.title}{" "}
        </h4>
        {/* instructor */}
        <div className="my-3 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-500">
          <div className="avatar te h-6 w-6 overflow-hidden rounded-full">
            <img
              src={course.instructorImage}
              alt={`${course.instructor} image`}
            />
          </div>
          <p>{course.instructor}</p>
        </div>
        {/* stats */}
        <div className="grid grid-cols-2 gap-y-3 text-sm text-gray-600 dark:text-gray-500">
          <p className="flex items-center gap-1">
            <FontAwesomeIcon
              icon={faStar}
              size="xs"
              className="text-yellow-500"
            />
            <span className="text-gray-900 dark:text-gray-100 font-semibold">
              {course.review.stars}
            </span>{" "}
            <span>({course.review.count})</span>
          </p>
          <p>{formatter.format(course.enrolled)} students</p>
          <p className="flex items-center gap-1">
            <FontAwesomeIcon icon={faSignal} />
            {course.level}
          </p>
          <p className="flex items-center gap-1">
            <FontAwesomeIcon icon={faCirclePlay} />
            {course.lessons} lessons
          </p>
        </div>
        {/* price */}
        <div className="mt-4 flex items-center gap-3 border-t border-gray-300 pt-4 dark:border-gray-800">
          <p className="text-lg font-semibold">${Math.floor((course.price * course.discount) / 100)}</p>
          <p className="text-sm text-gray-600 line-through dark:text-gray-500">
            {" "}
            ${course.price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
