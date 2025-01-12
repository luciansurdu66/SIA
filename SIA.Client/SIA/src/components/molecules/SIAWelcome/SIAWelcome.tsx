import React from "react";
import { InternshipModel } from "../../../types/InternshipModel.types";
import InternshipTab from "../InternshipTab/InternshipTab";
interface SIAWelcomeProps {}

const SIAWelcome: React.FC<SIAWelcomeProps> = () => {
    const internships: InternshipModel[] = [
        {
            id: 1,
            company_id: 101,
            job_title: "Software Engineering Intern",
            job_description:
                "Work on developing and maintaining web applications.",
            position: "Intern",
            required_qualifications:
                "Knowledge of JavaScript, React, and Node.js.",
            duration: "3 months",
            period: "Summer 2024",
            location: "Remote",
            number_of_positions: 2,
            salary: 3000.0,
            application_process: "Submit your resume and cover letter.",
            application_deadline: "2024-05-01",
            additional_info: "Opportunity to convert to full-time.",
        },
        {
            id: 2,
            company_id: 102,
            job_title: "Marketing Intern",
            job_description:
                "Assist in developing marketing strategies and campaigns.",
            position: "Intern",
            required_qualifications:
                "Strong communication skills and knowledge of social media platforms.",
            duration: "6 months",
            period: "Fall 2024",
            location: "New York, NY",
            number_of_positions: 1,
            salary: 2500.0,
            application_process:
                "Submit your portfolio and a brief cover letter.",
            application_deadline: "2025-08-15",
            additional_info: "Potential for travel.",
        },
    ];

    if (internships?.length === 0) {
        return (
            <div>
                <div className="w-full flex flex-col gap-3">
                    <div className="text-2xl font-semibold leading-tight">
                        No Internships Available
                    </div>
                    <div className="flex gap-3 justify-between items-center">
                        <div className="text-base font-normal leading-tight">
                            Wait until companies start posting internships. You
                            can check back later.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="flex flex-col h-full max-w-[900px] mx-[100px] min-w-0 "style={{ width: '900px' }}>
            <div className="w-full flex h-auto py-4">
                <div className="w-full flex flex-col justify-center ">
                    <div className="text-2xl font-semibold leading-7">
                        Welcome to SIA!
                    </div>
                    <div className="text-sm font-normal leading-tight text-secondary_text_color">
                        Pick up where you left off.
                    </div>
                </div>
            </div>
            <div className="flex flex-col h-full justify-center items-center">
                <div className="w-full h-full flex ">
                    <div className="w-full py-4 h-full">
                        <InternshipTab internships={internships} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SIAWelcome;
