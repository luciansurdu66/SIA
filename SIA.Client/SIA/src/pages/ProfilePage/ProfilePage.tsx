import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUserData } from "../../services/authService";
import { UserProfile, StudentProfile, CompanyProfile } from "../../types/profileTypes";
import GuestNavbar from "../../components/molecules/GuestNavbar/GuestNavbar";

type Profile = UserProfile & (StudentProfile | CompanyProfile);

const ProfilePage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [userProfile, setUserProfile] = useState<Profile | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (id) {
            const userId = parseInt(id, 10);
            fetchUserData(userId)
                .then((data) => {
                    setUserProfile(data);
                    setLoading(false);
                })
                .catch((err) => {
                    setError(err.message);
                    setLoading(false);
                });
        }
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!userProfile) {
        return <div>No user data available</div>;
    }
    const renderAttributes = (profile: any) => {
        const attributes = Object.keys(profile).filter(
            (key) => key !== "id" && key !== "user_id" && key !== "role" && key !== "email"
        );

        return attributes.map((key) => (
            <p className="text-base mb-4" key={key}>
                {`${key.replace(/_/g, " ")}: ${profile[key]}`}
            </p>
        ));
    };
    return (
        <div className="flex flex-col h-screen bg-background_secondary ">
            <GuestNavbar />
            <div className="flex flex-col items-center justify-center flex-grow text-black">
                <h1 className="text-4xl mb-8">Profile Page</h1>
                {userProfile.role === "student" ? (
                    <div className="w-full max-w-2xl p-8 bg-white shadow-lg rounded-lg">
                        <h2 className="text-2xl mb-4">Student Profile</h2>
                        <p className="text-base mb-4">Email: {userProfile.email}</p>
                        {renderAttributes(userProfile as StudentProfile)}
                    </div>
                ) : (
                    <div className="w-full max-w-2xl p-8 bg-white shadow-lg rounded-lg">
                        <h2 className="text-2xl mb-4">Company Profile</h2>
                        <p className="text-base mb-4">Email: {userProfile.email}</p>
                        {renderAttributes(userProfile as CompanyProfile)}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProfilePage;