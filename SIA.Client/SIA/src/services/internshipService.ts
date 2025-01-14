import { InternshipModel } from "../types/InternshipModel.types";
let internships: InternshipModel[] = [
    {
        id: 1,
        company_id: "company2@sia.com",
        title: "Software Engineering Intern",
        description: "Work on developing and maintaining web applications.",
        position: "Intern",
        required_qualifications: "Knowledge of JavaScript, React, and Node.js.",
        duration: "3 months",
        period: "Summer 2024",
        location: "Remote",
        numberOfPositions: 2,
        salary: 3000.0,
        applicationProcess: "Submit your resume and cover letter.",
        applicationDeadline: "2024-05-01T23:59:59",
        additional_info: "Opportunity to convert to full-time.",
    },
    {
        id: 2,
        company_id: "company2@sia.com",
        title: "Marketing Intern",
        description: "Assist in developing marketing strategies and campaigns.",
        position: "Intern",
        required_qualifications: "Strong communication skills and knowledge of social media platforms.",
        duration: "6 months",
        period: "Fall 2024",
        location: "New York, NY",
        numberOfPositions: 1,
        salary: 2500.0,
        applicationProcess: "Submit your portfolio and a brief cover letter.",
        applicationDeadline: "2025-08-15T23:59:59",
        additional_info: "Potential for travel.",
    },
    {
        id: 3,
        company_id: "company2@sia.com",
        title: "Data Science Intern",
        description: "Analyze data and build predictive models.",
        position: "Intern",
        required_qualifications: "Experience with Python, R, and machine learning.",
        duration: "4 months",
        period: "Spring 2024",
        location: "San Francisco, CA",
        numberOfPositions: 3,
        salary: 3500.0,
        applicationProcess: "Complete a coding challenge and submit your resume.",
        applicationDeadline: "2024-03-01T23:59:59",
        additional_info: "Access to company resources and mentorship.",
    },
];
export const getMockInternships = (): InternshipModel[] => {
    return internships;
};

export const addMockInternship = (internship: InternshipModel): void => {
    internships.push(internship)
}