export interface UserProfile {
    id: number;
    email: string;
    password: string;
    role: string;
}

export interface StudentProfile {
    id: number;
    user_id: number;
    full_name: string;
    phone_number: string;
    profile_picture: string | null;
    age: number;
    location: string;
    social_media: { platform: string; profile: string }[];
    study_institution: string;
    study_degree: string;
    expected_graduation_date: string;
    high_school: string;
    work_experience: { company: string; role: string; start: string; end: string; details: string }[];
    hard_skills: string;
    soft_skills: string;
    personal_projects: string;
    achievements: string;
    extracurricular_activities: string;
    languages: string;
    career_objectives: string;
}

export interface CompanyProfile {
    id: number;
    user_id: number;
    name: string;
    description: string;
    field: string;
    location: string;
    website?: string;
    social_media: { platform: string; profile: string }[];
    is_active: boolean;
}