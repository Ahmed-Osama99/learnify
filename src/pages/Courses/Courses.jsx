import PageIntro from "/src/components/PageIntro";
import {
  getAllCourses,
  getAllCategories,
} from "/src/services/courseService.js";
import CourseCard from "/src/components/CourseCard";
import useFetch from "/src/hooks/useFetch";
const Courses = () => {
  const {
    data: allCourses,
    error: coursesError,
    isLoading: coursesLoading,
  } = useFetch(getAllCourses);
  const {
    data: categoryData,
    error: categoryError,
    isLoading: categoryLoading,
  } = useFetch(getAllCategories);
  return (
    <main>
      <PageIntro />
      <div className="container py-12 gap-5 flex flex-col lg:flex-row">
        {/* filtering section */}
        <div className="p-4">
          {/* categories */}
          <h3>Categories</h3>
          <div>{categoryData && categoryData.map((cat) => <p>{cat}</p>)}</div>
        </div>
        {/* courses section */}
        <div>
          {coursesLoading && (
            <p className="mt-10 text-center text-xl font-bold">
              Loading courses...
            </p>
          )}
          {coursesError && (
            <p className="mt-10 text-center text-xl font-bold">
              Error: {coursesError}
            </p>
          )}
          {allCourses && (
            <div className="mt-12 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-5">
              {allCourses.map((c) => (
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
