import React from "react";
import { InternshipModel } from "../../../types/InternshipModel.types";
import InternshipTab from "../InternshipTab/InternshipTab";
import {getMockInternships} from "../../../services/internshipService";
interface SIAWelcomeProps {
    internships: InternshipModel[];
}

const SIAWelcome: React.FC<SIAWelcomeProps> = ({ internships }) => {
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
