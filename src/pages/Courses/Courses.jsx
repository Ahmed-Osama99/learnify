import PageIntro from "/src/components/PageIntro";
import { useLocation, Link } from "react-router-dom";
import {
  getAllCourses,
  getAllCategories,
  getCoursesByCategory,
} from "/src/services/courseService.js";
import CourseCard from "/src/components/CourseCard";
import CourseCardSkeleton from "../../components/ui/CourseCardSkeleton";
import useFetch from "/src/hooks/useFetch";
const Courses = () => {
  const location = useLocation();
  const category = new URLSearchParams(location.search).get("category");
  const getCourses = category ? getCoursesByCategory : getAllCourses;
  const {
    data: coursesData,
    error: coursesError,
    isLoading: coursesLoading,
  } = useFetch(getCourses, category);
  const { data: categoryData } = useFetch(getAllCategories);
  return (
    <main>
      <PageIntro
        pageName="Courses"
        pageTitle="All Courses"
        pageDesc={`${!coursesLoading ? `${coursesData.length} courses avaliable` : ""}`}
      />
      <div className="container flex flex-col gap-8 py-12 lg:flex-row">
        {/* filtering section */}
        <aside className="py-4 lg:w-1/5">
          <div className="sticky top-24">
            {/* categories */}
            <h3 className="mb-2 text-lg font-bold">Categories</h3>
            <div className="flex flex-col gap-2">
              <Link
                to={`/courses`}
                className={`rounded-lg px-3 py-2 text-sm transition-all duration-300 ${!category ? "bg-primary-200 font-semibold text-primary-600 dark:bg-primary-900/30 dark:text-primary-500" : "text-gray-600 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800"}`}
              >
                All Categories
              </Link>
              {categoryData?.map((cat) => (
                <Link
                  key={cat.name}
                  to={`/courses?category=${encodeURIComponent(cat.name)}`}
                  className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-all duration-300 ${category === cat.name ? "bg-primary-200 font-semibold text-primary-600 dark:bg-primary-900/30 dark:text-primary-500" : "text-gray-600 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800"}`}
                >
                  {cat.name}
                  <span>({cat.count})</span>
                </Link>
              ))}
            </div>
          </div>
        </aside>
        {/* courses section */}
        <div className="lg:w-4/5">
          {coursesLoading && (
            <div className="mt-12 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <CourseCardSkeleton key={i} />
              ))}
            </div>
          )}
          {coursesError && (
            <p className="mt-10 text-center text-xl font-bold">
              Error: {coursesError}
            </p>
          )}
          {coursesData && (
            <div className="mt-12 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
              {coursesData.map((c) => (
                <CourseCard key={c.id} course={c} />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Courses;
