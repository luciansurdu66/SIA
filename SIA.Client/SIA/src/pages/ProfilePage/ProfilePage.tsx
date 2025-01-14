import React, { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { fetchUserData, updateUserData } from "../../services/authService";
import {
    UserProfile,
    StudentProfile,
    CompanyProfile,
} from "../../types/profileTypes";
import GuestNavbar from "../../components/molecules/GuestNavbar/GuestNavbar";

type Profile = UserProfile & (StudentProfile | CompanyProfile);

const ProfilePage: React.FC = () => {
    const { userType } = useAuth();
    const [userProfile, setUserProfile] = useState<Profile | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (userType) {
            fetchUserData(userType)
                .then((data) => {
                    setUserProfile(data);
                    setLoading(false);
                })
                .catch((err) => {
                    setError(err.message);
                    setLoading(false);
                });
        }
    }, [userType]);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
        key: string
    ) => {
        if (userProfile) {
            const value =
                e.target.type === "select-one"
                    ? e.target.value === "true"
                    : e.target.value;
            setUserProfile({ ...userProfile, [key]: value });
        }
    };

    const handleSave = async () => {
        console.log("dadadada");
        if (userProfile) {
            try {
                console.log(userProfile);
                if (userType) {
                    await updateUserData(userType, userProfile);
                } else {
                    console.error("User type is null");
                }
                setIsEditing(false);
            } catch (error) {
                console.error("Error updating profile:", error);
                alert("Error updating profile");
            }
        }
    };

    const renderAttributes = (profile: any) => {
        const attributes = Object.keys(profile).filter(
            (key) =>
                key !== "id" &&
                key !== "user_id" &&
                key !== "role" &&
                key !== "email"
        );
    
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {attributes.map((key) => (
                    <div
                        className="flex flex-col text-base mb-4 border rounded-lg p-2 border-border_color"
                        key={key}
                    >
                        <label className="font-semibold mb-2">
                            {key.replace(/_/g, " ")}:
                        </label>
                        {isEditing ? (
                            key === "isActive" ? (
                                <select
                                    value={profile[key] ? "true" : "false"}
                                    onChange={(e) =>
                                        handleInputChange(
                                            {
                                                ...e,
                                                target: {
                                                    ...e.target,
                                                    value: e.target.value === "true",
                                                },
                                            },
                                            key
                                        )
                                    }
                                    className="border bg-border_color border-border_color rounded-lg p-2 text-black"
                                >
                                    <option value="true">Active</option>
                                    <option value="false">Inactive</option>
                                </select>
                            ) : (
                                <input
                                    type="text"
                                    value={profile[key] || ""}
                                    onChange={(e) => handleInputChange(e, key)}
                                    className="border bg-border_color border-border_color rounded-lg p-2 text-black"
                                />
                            )
                        ) : Array.isArray(profile[key]) ? (
                            <div>
                                {profile[key].map((item: any, index: number) => (
                                    <div key={index} className="mb-2">
                                        {Object.keys(item).map((subKey) => (
                                            <div key={subKey}>
                                                <strong>
                                                    {subKey.replace(/_/g, " ")}:
                                                </strong>{" "}
                                                {item[subKey]}
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        ) : typeof profile[key] === "object" &&
                          profile[key] !== null ? (
                            <div>
                                {Object.keys(profile[key]).map((subKey) => (
                                    <div key={subKey}>
                                        <strong>
                                            {subKey.replace(/_/g, " ")}:
                                        </strong>{" "}
                                        {profile[key][subKey]}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <span>
                                {profile[key] !== undefined &&
                                profile[key] !== null
                                    ? profile[key]
                                    : "N/A"}
                            </span>
                        )}
                    </div>
                ))}
            </div>
        );
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                Loading...
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center h-screen">
                Error: {error}
            </div>
        );
    }

    if (!userProfile) {
        return (
            <div className="flex items-center justify-center h-screen">
                No user data available
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full text-gray-900 bg-background_secondary">
            <GuestNavbar />
            <div className="flex flex-col items-center justify-center flex-grow p-4 overflow-auto">
                <div className="w-full max-w-2xl p-8 shadow-lg rounded-lg bg-background_secondary">
                    <h1 className="text-2xl font-bold mb-8 text-center">
                        Profile Page
                    </h1>

                    {userType === "student" ? (
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-2xl font-semibold border-b border-gray-300 pb-2">
                                    Student Profile
                                </h2>
                                <button
                                    onClick={() => {
                                        if (isEditing) {
                                            console.log("save");	
                                            handleSave();
                                        } else {
                                            console.log("edit");	
                                            setIsEditing(true);
                                        }
                                    }}
                                    className="bg-primary text-primary_text_color p-2 rounded-lg text-lg"
                                >
                                    {isEditing ? "Save" : "Edit"}
                                </button>
                            </div>
                            <div className="gap-4">
                                {renderAttributes(
                                    userProfile as StudentProfile
                                )}
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-2">
                                    Company Profile
                                </h2>
                                <button
                                    onClick={() => {
                                        if (isEditing) {
                                            console.log("save");	
                                            handleSave();
                                        } else {
                                            console.log("edit");	
                                            setIsEditing(true);
                                        }
                                    }}
                                    className="bg-primary text-primary_text_color p-2 rounded-lg text-lg"
                                >
                                    {isEditing ? "Save" : "Edit"}
                                </button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {renderAttributes(
                                    userProfile as CompanyProfile
                                )}
                            </div>
                        </div>
                    )}
                    
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
