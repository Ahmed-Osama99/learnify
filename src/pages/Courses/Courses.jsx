import { useLocation } from "react-router-dom";
import PageIntro from "/src/components/ui/PageIntro";
import FilterAside from "./components/FilterAside";
import CourseCard from "/src/components/ui/CourseCard";
import CourseCardSkeleton from "/src/components/layout/CourseCardSkeleton";

import {
  getAllCourses,
  getAllCategories,
  getCoursesByCategory,
  getCoursesByLevel,
  getCoursesByPrice,
} from "/src/services/courseService.js";
import useFetch from "/src/hooks/useFetch";
import { Helmet } from "react-helmet-async";
import { useMemo, useState } from "react";

const Courses = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const urlCategory = params.get("category");
  const urlLevel = params.get("level");
  const [price, setPrice] = useState();
  const activeParam = urlCategory || urlLevel || price;

  const getCourses = useMemo(() => {
    if (urlCategory) return getCoursesByCategory;
    if (urlLevel) return getCoursesByLevel;
    if (price || price === 0) return getCoursesByPrice;
    return getAllCourses;
  }, [urlCategory, urlLevel, price]);

  const {
    data: coursesData,
    error: coursesError,
    isLoading: coursesLoading,
  } = useFetch(getCourses, activeParam);

  const { data: categoryData } = useFetch(getAllCategories);

  return (
    <>
      <Helmet>
        <title>All Courses | Learnify</title>
      </Helmet>
      <main>
        <PageIntro
          pageName="Courses"
          pageTitle="All Courses"
          pageDesc={`2,500+ courses avaliable`}
        />
        <div className="container flex flex-col gap-8 py-12 lg:flex-row">
          {/* filtering section */}
          <FilterAside
            categoryData={categoryData}
            urlCategory={urlCategory}
            urlLevel={urlLevel}
            priceState={setPrice}
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
    </>
  );
};

export default Courses;
