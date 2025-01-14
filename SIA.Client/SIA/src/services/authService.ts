import { ENDPOINTS } from "../constants/apiEndpoints";
import apiClient from "./apiService";
import {
    UserProfile,
    StudentProfile,
    CompanyProfile,
} from "../types/profileTypes";

export const getMe = async () => {
    return apiClient.get(ENDPOINTS.GET_ME);
};

export const fetchUserData = async (role: string): Promise<UserProfile & (StudentProfile | CompanyProfile)> => {
    const endpoint = role === "student"
        ? "http://localhost:5181/api/Profile/student"
        : "http://localhost:5181/api/Profile/company";

    const response = await apiClient.get(endpoint);
    return response.data.result;
};

export const updateUserData = async (role: string, data: any) => {
    console.log(data);
    const endpoint = role === "student"
        ? "http://localhost:5181/api/Profile/student"
        : "http://localhost:5181/api/Profile/company";

    const response = await apiClient.put(endpoint, data);
    return response.data;
};