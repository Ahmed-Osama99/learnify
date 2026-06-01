import { apiGet } from "./apiClient";

// GET ALL Courses
export const getAllCourses = async () => {
  return apiGet("courses");
};

export const getMostEnrolledCourses = async () => {
  const data = await getAllCourses();
  const bestCourses = data.sort((a, b) => b.enrolled - a.enrolled);
  return bestCourses.slice(0, 4); // most 4 courses get enrolled
};

export const getAllCategories = async () => {
  const data = await getAllCourses();
  const map = new Map();
  for (const course of data) {
    map.set(course.category, (map.get(course.category) || 0) + 1);
  }
  return Array.from(map.entries(), ([name, count]) => ({ name, count })).sort(
    (a, b) => b.count - a.count,
  );
};

export const getCoursesByCategory = async (cat) => {
  const data = await getAllCourses();
  const coursesWithCat = data.filter((c) => c.category === cat);

  return coursesWithCat;
};

export const getCoursesByLevel = async (level) => {
  const data = await getAllCourses();
  const coursesByLevel = data.filter((c) => c.level === level);

  return coursesByLevel;
};

export const getCoursesByPrice = async (price) => {
  const data = await getAllCourses();
  const coursesByPrice = data.filter((c) => c.price === price);

  return coursesByPrice;
};
