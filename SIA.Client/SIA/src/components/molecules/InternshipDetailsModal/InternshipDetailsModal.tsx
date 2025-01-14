import React from "react";
import { InternshipModel } from "../../../types/InternshipModel.types";

interface InternshipDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    internship: InternshipModel | null;
}

const InternshipDetailsModal: React.FC<InternshipDetailsModalProps> = ({
    isOpen,
    onClose,
    internship,
}) => {
    if (!isOpen || !internship) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-background opacity-75"></div>
            <div className="bg-background_secondary p-4 m-4 rounded-lg shadow-lg w-full max-w-md z-50">
                <h2 className="text-2xl font-semibold mb-4 w-full p-4 rounded-lg">{internship.title}</h2>
                <p className="text-xl w-full p-4 rounded-lg bg-background_secondary "><strong>Description:</strong> {internship.description}</p>
                <p className="text-xl w-full p-4 rounded-lg bg-background_secondary"><strong>Position:</strong> {internship.position}</p>
                <p className="text-xl w-full p-4 rounded-lg bg-background_secondary"><strong>Required Qualifications:</strong> {internship.required_qualifications}</p>
                <p className="text-xl w-full p-4 rounded-lg bg-background_secondary"><strong>Duration:</strong> {internship.duration}</p>
                <p className="text-xl w-full p-4 rounded-lg bg-background_secondary"><strong>Location:</strong> {internship.location}</p>
                <p className="text-xl w-full p-4 rounded-lg bg-background_secondary"><strong>Number of Positions:</strong> {internship.numberOfPositions}</p>
                <p className="text-xl w-full p-4 rounded-lg bg-background_secondary"><strong>Salary:</strong> {internship.salary}</p>
                <p className="text-xl w-full p-4 rounded-lg bg-background_secondary"><strong>Application Process:</strong> {internship.applicationProcess}</p>
                <p className="text-xl w-full p-4 rounded-lg bg-background_secondary"><strong>Application Deadline:</strong> {internship.applicationDeadline}</p>
                {internship.additionalInfo && (
                    <p className="text-xl w-full p-4 rounded-lg bg-background_secondary"><strong>Additional Info:</strong> {internship.additionalInfo}</p>
                )}
                <div className="flex justify-end space-x-4 mt-4">
                    <button onClick={onClose} className="bg-gray-500 text-white p-2 rounded">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InternshipDetailsModal;