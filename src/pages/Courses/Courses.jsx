import { useLocation } from "react-router-dom";
import PageIntro from "/src/components/ui/PageIntro";
import FilterAside from "./components/FilterAside";
import CourseCard from "/src/components/ui/CourseCard";
import CourseCardSkeleton from "/src/components/layout/CourseCardSkeleton";

import {
  getAllCourses,
  getAllCategories,
  getCoursesByCategory,
} from "/src/services/courseService.js";
import useFetch from "/src/hooks/useFetch";

const Courses = () => {
  const location = useLocation();
  const urlCategory = new URLSearchParams(location.search).get("category");
  const urlLevel = new URLSearchParams(location.search).get("level");
  const getCourses = urlCategory ? getCoursesByCategory : getAllCourses;

  const {
    data: coursesData,
    error: coursesError,
    isLoading: coursesLoading,
  } = useFetch(getCourses, urlCategory);

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
        <FilterAside
          categoryData={categoryData}
          urlCategory={urlCategory}
          urlLevel={urlLevel}
        />
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
