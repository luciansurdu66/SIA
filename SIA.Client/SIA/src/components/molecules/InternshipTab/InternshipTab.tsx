import React, { useState, useEffect } from "react";

import { InternshipModel } from "../../../types/InternshipModel.types";
import InternshipCard from "../../atoms/InternshipCard/InternshipCard";
import CreateInternshipModal from "../CreateInternshipModal/CreateInternshipModal";
import InternshipDetailsModal from "../InternshipDetailsModal/InternshipDetailsModal";
import {
    addMockInternship,
    getMockInternships,
} from "../../../services/internshipService";
import { useInternships } from "../../../contexts/InternshipContext/InternshipContext";
interface InternshipTabProps {}

type Tab = "All" | "Active" | "Inactive";

const InternshipTab: React.FC<InternshipTabProps> = () => {
    const [tab, setTab] = React.useState<Tab>("All");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedInternship, setSelectedInternship] = useState<InternshipModel | null>(null);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

    const userType = localStorage.getItem("userType");
    const { internships, addInternship } = useInternships();

    const handleCreateInternship = async (internship: any) => {
        try {
            addInternship(internship);
            console.log("New Internship Created:", internship);
        } catch (error) {
            console.error("Error creating internship:", error);
            alert("Error creating internship");
        }
    };
    const filteredInternships = React.useMemo(() => {
        const query = searchQuery.toLowerCase();
        return internships.filter((internship) => {
            const matchesSearchQuery =
                internship.title.toLowerCase().includes(query) ||
                internship.description.toLowerCase().includes(query);

            if (!matchesSearchQuery) {
                return false;
            }

            switch (tab) {
                case "Active":
                    const deadline = new Date(internship.applicationDeadline);
                    return deadline > new Date();
                case "Inactive":
                    const deadlineInactive = new Date(internship.applicationDeadline);
                    return deadlineInactive < new Date();
                default:
                    return true;
            }
        });
    }, [internships, tab, searchQuery]);

    const handleCardClick = (internship: InternshipModel) => {
        setSelectedInternship(internship);
        setIsDetailsModalOpen(true);
    };
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
                {userType === "company" && (
                    <div className="px-4 py-2 min-w-[80px] max-w-[80px] w-[80px] ">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-background text-primary_text_color p-4 rounded-lg"
                        >
                            Create Internship
                        </button>
                    </div>
                )}
                {userType === "student" && (
                    <div className="flex items-center">
                        <input
                            type="text"
                            placeholder="Search internships..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="p-2 border border-gray-300 rounded-lg text-black"
                        />
                    </div>
                )}
            </div>
            <div className="flex flex-col gap-4 p-4">
                {filteredInternships.map((internship, index) => (
                    <InternshipCard
                        key={index}
                        title={internship.title}
                        description={internship.description}
                        deadline={internship.applicationDeadline}
                        onClick={() => handleCardClick(internship)}
                    />
                ))}
            </div>
            <CreateInternshipModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onCreate={handleCreateInternship}
            />
            <InternshipDetailsModal
                isOpen={isDetailsModalOpen}
                onClose={() => setIsDetailsModalOpen(false)}
                internship={selectedInternship}
            />
        </div>
    );
};

export default InternshipTab;
