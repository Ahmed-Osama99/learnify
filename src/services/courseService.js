import { apiGet } from "./apiClient";

// GET ALL Courses
export const getAllCourses = async () => {
  return apiGet("courses");
};
