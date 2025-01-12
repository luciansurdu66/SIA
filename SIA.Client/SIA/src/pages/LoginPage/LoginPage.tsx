import React, { useState } from "react";
import "../../index.scss";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { mockUsers } from "../../services/authService";

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isRegister, setIsRegister] = useState(false);
    const [userType, setUserType] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic here
        const user = mockUsers.find(
            (user) => user.email === email && user.password === password
        );
        if (user) {
            console.log("Login successful", { email, password });
            login(user.id, user.email, user.role); // Assuming email is used as the name
            navigate("/");
        } else {
            console.log("Invalid credentials");
            alert("Invalid email or password");
        }
    };

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle register logic here
        console.log("Register", { email, password, userType });
        // Assume registration is successful and log in the user
        const newUserId = mockUsers.length + 1; // Mock new user ID
        login(newUserId, email, userType);
        navigate("/");
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-background_secondary text-primary_text_color">
            <h1 className="text-2xl mb-8">{isRegister ? "Register" : "Login"}</h1>
            <form
                onSubmit={isRegister ? handleRegister : handleLogin}
                className="flex flex-col w-full max-w-md py-8 shadow-lg rounded-lg space-y-6"
            >
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="m-4 p-4 border border-border_color rounded-lg text-black"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mb-4 p-4 border border-border_color rounded-lg text-black"
                />
                {isRegister && (
                    <div className="flex items-center justify-center mb-4 bg-background_secondary p-4 rounded-lg">
                        <label className="mr-4">
                            <input
                                type="radio"
                                value="student"
                                checked={userType === "student"}
                                onChange={(e) => setUserType(e.target.value)}
                                className="mr-2"
                            />
                            Student
                        </label>
                        <label className="ml-2">
                            <input
                                type="radio"
                                value="company"
                                checked={userType === "company"}
                                onChange={(e) => setUserType(e.target.value)}
                                className="ml-2"
                            />
                            Company
                        </label>
                    </div>
                )}
                <button
                    type="submit"
                    className="bg-primary text-primary_text_color p-4 rounded-lg"
                >
                    {isRegister ? "Register" : "Login"}
                </button>
            </form>
            <button
                onClick={() => setIsRegister(!isRegister)}
                className="mt-4 text-primary"
            >
                {isRegister ? "Already have an account? Login" : "Don't have an account? Register"}
            </button>
        </div>
    );
};

export default LoginPage;