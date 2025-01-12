import React from "react";

import { InternshipModel } from "../../../types/InternshipModel.types";
import InternshipCard from "../../atoms/InternshipCard/InternshipCard";

interface InternshipTabProps {
    internships: InternshipModel[];
}

type Tab = "All" | "Active" | "Inactive";

const InternshipTab: React.FC<InternshipTabProps> = ({ internships }) => {
    const [tab, setTab] = React.useState<Tab>("All");

    const filteredInternships = React.useMemo(() => {
        switch (tab) {
            case "Active":
                return internships.filter((internship) => {
                    const deadline = new Date(internship.application_deadline);
                    return deadline > new Date();
                });
            case "Inactive":
                return internships.filter((internship) => {
                    const deadline = new Date(internship.application_deadline);
                    return deadline < new Date();
                });
            default:
                return internships;
        }
    }, [internships, tab]);

    return (
        <div className="flex flex-col max-h-screen overflow-auto max-w-[600px] min-w-[600px] w-[600px]">
            <div className="flex justify-center items-center max-w-[240px] min-w-[240px] w-[240px]">
                <button
                    onClick={() => setTab("All")}
                    className={`px-4 py-2 min-w-[80px] max-w-[80px] w-[80px] ${
                        tab === "All"
                            ? "bg-primary text-primary_text_color"
                            : ""
                    }`}
                >
                    All
                </button>
                <button
                    onClick={() => setTab("Active")}
                    className={`px-4 py-2 min-w-[80px] max-w-[80px] w-[80px] ${
                        tab === "Active"
                            ? "bg-primary text-primary_text_color"
                            : ""
                    }`}
                >
                    Active
                </button>
                <button
                    onClick={() => setTab("Inactive")}
                    className={`px-4 py-2 min-w-[80px] max-w-[80px] w-[80px] ${
                        tab === "Inactive"
                            ? "bg-primary text-primary_text_color"
                            : ""
                    }`}
                >
                    Inactive
                </button>
            </div>
            <div className="flex flex-col gap-4 p-4">
                {filteredInternships.map((internship, index) => (
                    <InternshipCard
                        key={index}
                        title={internship.job_title}
                        description={internship.job_description}
                        deadline={internship.application_deadline}
                        onClick={() => {}}
                    />
                ))}
            </div>
        </div>
    );
};

export default InternshipTab;
