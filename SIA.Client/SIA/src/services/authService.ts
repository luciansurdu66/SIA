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

// Mock data for users, students, and companies
export const mockUsers: UserProfile[] = [
    {
        id: 1,
        email: "student1@example.com",
        password: "password123",
        role: "student",
    },
    {
        id: 2,
        email: "student2@example.com",
        password: "password123",
        role: "student",
    },
    {
        id: 3,
        email: "company1@example.com",
        password: "password123",
        role: "company",
    },
    {
        id: 4,
        email: "company2@example.com",
        password: "password123",
        role: "company",
    },
];

const mockStudents: StudentProfile[] = [
    {
        id: 1,
        user_id: 1,
        full_name: "John Doe",
        phone_number: "123-456-7890",
        profile_picture: null,
        age: 21,
        location: "New York, NY",
        social_media: [{ platform: "facebook", profile: "link" }],
        study_institution: "University A",
        study_degree: "Bachelor of Science",
        expected_graduation_date: "2024-05-01",
        high_school: "High School A",
        work_experience: [
            {
                company: "Company A",
                role: "Intern",
                start: "2022-06-01",
                end: "2022-08-01",
                details: "Worked on project X",
            },
        ],
        hard_skills: "JavaScript, React, Node.js",
        soft_skills: "Teamwork, Communication",
        personal_projects: "Project A, Project B",
        achievements: "Achievement A, Achievement B",
        extracurricular_activities: "Activity A, Activity B",
        languages: "English, Spanish",
        career_objectives: "To become a software engineer",
    },
    {
        id: 2,
        user_id: 2,
        full_name: "Jane Smith",
        phone_number: "987-654-3210",
        profile_picture: null,
        age: 22,
        location: "San Francisco, CA",
        social_media: [{ platform: "linkedin", profile: "link" }],
        study_institution: "University B",
        study_degree: "Master of Science",
        expected_graduation_date: "2025-06-01",
        high_school: "High School B",
        work_experience: [
            {
                company: "Company B",
                role: "Intern",
                start: "2023-06-01",
                end: "2023-08-01",
                details: "Worked on project Y",
            },
        ],
        hard_skills: "Python, Django, SQL",
        soft_skills: "Problem-solving, Leadership",
        personal_projects: "Project C, Project D",
        achievements: "Achievement C, Achievement D",
        extracurricular_activities: "Activity C, Activity D",
        languages: "English, French",
        career_objectives: "To become a data scientist",
    },
];

const mockCompanies: CompanyProfile[] = [
    {
        id: 1,
        user_id: 3,
        name: "Tech Corp",
        description:
            "A leading tech company specializing in software development.",
        field: "Technology",
        location: "New York, NY",
        website: "https://techcorp.com",
        social_media: [{ platform: "twitter", profile: "link" }],
        is_active: true,
    },
    {
        id: 2,
        user_id: 4,
        name: "Marketing Inc",
        description: "A marketing agency providing innovative solutions.",
        field: "Marketing",
        location: "San Francisco, CA",
        website: "https://marketinginc.com",
        social_media: [{ platform: "instagram", profile: "link" }],
        is_active: true,
    },
];

export const fetchUserData = async (
    userId: number
): Promise<UserProfile & (StudentProfile | CompanyProfile)> => {
    const user = mockUsers.find((user) => user.id === userId);
    if (!user) throw new Error("User not found");

    if (user.role === "student") {
        const studentProfile = mockStudents.find(
            (student) => student.user_id === userId
        );
        if (studentProfile) {
            return { ...user, ...studentProfile };
        }
    } else if (user.role === "company") {
        const companyProfile = mockCompanies.find(
            (company) => company.user_id === userId
        );
        if (companyProfile) {
            return { ...user, ...companyProfile };
        }
    }

    throw new Error("Profile not found");
};
