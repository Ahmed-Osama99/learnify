import { apiGet } from "./apiClient";

// GET ALL Courses
export const getAllCourses = async () => {
  return apiGet("courses");
};

export const getMostEnrolledCourses = async () => {
  const data = await apiGet("courses");
  const bestCourses = data.sort((a, b) => b.enrolled - a.enrolled);
  return bestCourses.slice(0, 4); // most 6 courses get enrolled
};

export const getAllCategories = async () => {
  const data = await apiGet("courses");
  const categories = new Set(data.map((c) => c.category));
  return [...categories];
};

export const getCoursesByCategory = async (cat) => {
  const data = await apiGet("courses");
  const coursesWithCat = data.filter((c) => c.category === cat);

  return coursesWithCat;
};
