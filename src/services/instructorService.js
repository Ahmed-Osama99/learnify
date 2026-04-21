import { apiGet } from "./apiClient";

export const getAllInstructors = async ()=>{
    return apiGet('instructors')
}