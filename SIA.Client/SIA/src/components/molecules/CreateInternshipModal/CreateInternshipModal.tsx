import React, { useState, useEffect, useRef } from "react";

interface CreateInternshipModalProps {
    isOpen: boolean;
    onClose: () => void;
    onCreate: (internship: any) => void;
}

const CreateInternshipModal: React.FC<CreateInternshipModalProps> = ({
    isOpen,
    onClose,
    onCreate,
}) => {
    const [formData, setFormData] = useState({
        title: "",
        companyMail: localStorage.getItem("userName"),
        description: "",
        applicationDeadline: "",
        position: "",
        requirements: "",
        startDate: "",
        endDate: "",
        duration: "",
        location: "",
        numberOfPositions: 0,
        salary: 0,
        applicationProcess: "",
        additionalInfo: ""
    });

    const modalRef = useRef<HTMLDivElement>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onCreate(formData);
        onClose();
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (
            modalRef.current &&
            !modalRef.current.contains(event.target as Node)
        ) {
            onClose();
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const formFields = [
        { name: "title", type: "text", placeholder: "Title" },
        { name: "description", type: "textarea", placeholder: "Description" },
        { name: "applicationDeadline", type: "datetime-local", placeholder: "Application Deadline" },
        { name: "position", type: "text", placeholder: "Position" },
        { name: "required_qualifications", type: "textarea", placeholder: "Requirements" },
        { name: "duration", type: "text", placeholder: "Duration" },
        { name: "location", type: "text", placeholder: "Location" },
        { name: "numberOfPositions", type: "number", placeholder: "Number of Positions" },
        { name: "salary", type: "number", placeholder: "Salary" },
        { name: "applicationProcess", type: "textarea", placeholder: "Application Process" },
        { name: "additionalInfo", type: "textarea", placeholder: "Additional Info" }
    ];

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-background opacity-75"></div>
            <div ref={modalRef} className=" p-8 m-4 rounded-lg shadow-lg w-full max-w-md z-50">
                <h2 className="text-2xl flex items-center justify-center font-semibold mb-4">Create New Internship</h2>
                <form onSubmit={handleSubmit} className="space-y-2 pb-2 text-primary_text_color">
                    {formFields.map((field) =>
                        field.type === "textarea" ? (
                            <textarea
                                key={field.name}
                                name={field.name}
                                placeholder={field.placeholder}
                                value={formData[field.name as keyof typeof formData]}
                                onChange={handleChange}
                                className="w-full p-4 rounded-lg bg-background_secondary border border-gray-300 placeholder-gray-500"
                            />
                        ) : field.type === "datetime-local" ? (
                            <div key={field.name} className="flex items-center space-x-2">
                                <label className="w-1/3">{field.placeholder}:</label>
                                <input
                                    type={field.type}
                                    name={field.name}
                                    value={formData[field.name as keyof typeof formData]}
                                    onChange={handleChange}
                                    className="w-full p-4 rounded-lg bg-background_secondary border border-gray-300 placeholder-gray-500"
                                />
                            </div>
                        ) : field.type === "number" ? (
                            <div key={field.name} className="flex items-center space-x-2">
                                <label className="w-1/3">{field.placeholder}:</label>
                                <input
                                    type={field.type}
                                    name={field.name}
                                    value={formData[field.name as keyof typeof formData]}
                                    onChange={handleChange}
                                    className="w-full p-4 rounded-lg bg-background_secondary border border-gray-300 placeholder-gray-500"
                                />
                            </div>
                        ): (
                            <input
                                key={field.name}
                                type={field.type}
                                name={field.name}
                                placeholder={field.placeholder}
                                value={formData[field.name as keyof typeof formData]}
                                onChange={handleChange}
                                className="w-full p-4 rounded-lg bg-background_secondary border border-gray-300 placeholder-gray-500"
                            />
                        )
                    )}
                    <div className="flex justify-center space-x-4">
                        <button type="button" onClick={onClose} className="flex bg-gray-500 text-white p-4 rounded">
                            Cancel
                        </button>
                        <button type="submit" className="flex bg-primary text-primary_text_color p-4 rounded">
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateInternshipModal;
