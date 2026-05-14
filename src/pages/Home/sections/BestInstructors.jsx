import { getAllInstructors } from "/src/services/instructorService";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import InstructorCard from "/src/components/ui/InstructorCard";

const BestInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getInstructors = async () => {
      try {
        const data = await getAllInstructors();
        setInstructors(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    getInstructors();
  }, []);
  return (
    <section className="bg-gray-200 dark:bg-gray-900/50">
      <div className="container text-center">
        <div>
          <h3 className="font-semibold text-primary-600 uppercase">
            Expert Instructors
          </h3>
          <p className="font-display mt-6 text-3xl font-bold lg:text-4xl">
            Learn From the Best
          </p>
          <p className="mt-6 text-gray-600 dark:text-gray-500">
            Our instructors are industry professionals from top companies,
            passionate about sharing their knowledge.
          </p>
        </div>
        {isLoading && (
          <p className="mt-10 text-center text-xl font-bold">
            Loading Instructors...
          </p>
        )}
        {error && (
          <p className="mt-10 text-center text-xl font-bold">Error: {error}</p>
        )}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {instructors &&
            instructors.map((instructor) => (
              <InstructorCard key={instructor.id} instructor={instructor} />
            ))}
        </div>
        <Link
          to="/"
          className="mx-auto mt-12 flex w-fit items-center gap-2 text-sm text-primary-600 dark:text-primary-400"
        >
          View All Courses
          <FontAwesomeIcon icon={faArrowRight} size="sm" />
        </Link>
      </div>
    </section>
  );
};

export default BestInstructors;
