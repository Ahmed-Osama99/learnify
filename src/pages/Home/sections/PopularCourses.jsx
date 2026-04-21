import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { getAllCourses } from "/src/services/courseService";
import { useEffect, useState } from "react";
import CourseCard from "/src/components/CourseCard";

const PopularCourses = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const data = await getAllCourses();
        setCourses(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCourses();
  }, []);

  return (
    <section className="bg-gray-200 dark:bg-gray-900">
      <div className="container">
        <div>
          <h3 className="font-semibold text-primary-600 uppercase">
            Featured Courses
          </h3>
          <p className="font-display mt-6 text-3xl font-bold lg:text-4xl">
            Most Popular Courses
          </p>
          <p className="mt-6 text-gray-600 dark:text-gray-500">
            Start learning from the highest-rated courses chosen by thousands of
            students worldwide.
          </p>
          <Link
            to="/"
            className="mt-4 flex items-center gap-2 text-sm text-primary-600 dark:text-primary-400"
          >
            View All Courses
            <FontAwesomeIcon icon={faArrowRight} size="sm" />
          </Link>
        </div>
        {isLoading && (
          <p className="mt-10 text-center text-xl font-bold">
            Loading courses...
          </p>
        )}
        {error && (
          <p className="mt-10 text-center text-xl font-bold">Error: {error}</p>
        )}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {courses &&
            courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
        </div>
      </div>
    </section>
  );
};
export default PopularCourses;
