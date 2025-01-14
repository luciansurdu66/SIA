import React, { createContext, useState, ReactNode, useContext } from "react";
import { InternshipModel } from "../../types/InternshipModel.types";
import { getMockInternships, addMockInternship } from "../../services/internshipService";

interface InternshipContextProps {
    internships: InternshipModel[];
    addInternship: (internship: InternshipModel) => void;
}

const InternshipContext = createContext<InternshipContextProps | undefined>(undefined);

export const InternshipProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [internships, setInternships] = useState<InternshipModel[]>(getMockInternships());

    const addInternship = (internship: InternshipModel) => {
        setInternships((prevInternships) => [...prevInternships, internship]);
        addMockInternship(internship);
    };

    return (
        <InternshipContext.Provider value={{ internships, addInternship }}>
            {children}
        </InternshipContext.Provider>
    );
};

export const useInternships = (): InternshipContextProps => {
    const context = useContext(InternshipContext);
    if (!context) {
        throw new Error("useInternships must be used within an InternshipProvider");
    }
    return context;
};