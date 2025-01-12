import React from "react";

interface InternshipCardProps {
    onClick: () => void;
    title: string;
    description: string;
    deadline: string;
}

const InternshipCard: React.FC<InternshipCardProps> = ({
    onClick,
    title,
    description,
    deadline,
}) => {
    return (
        <div
            onClick={onClick}
            title={description ? description : "No description"}
            className="h-[120px] min-h-[120px] max-h-[120px] w-[600px] min-w-[600px] group max-w-[600px] border hover:bg-border_color justify-start items-center gap-2 infline-flex cursor-pointer border-border_color rounded-lg p-4 bg-background relative"
        >
            <div className="grow shrink basis-0 leading-[18px] text-base font-medium py-4 pr-6 text-ellipsis overflow-hidden whitespace-nowrap">
                {title}
            </div>
            <div className="grow shrink basis-0 leading-[18px] text-base font-medium py-4 pr-6 text-ellipsis overflow-hidden whitespace-nowrap">
                {description}
            </div>
            <p className="absolute top-1 right-2">Deadline: {deadline}</p>
        </div>
    );
};

export default InternshipCard;
