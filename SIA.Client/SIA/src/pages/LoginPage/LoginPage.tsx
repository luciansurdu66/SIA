import React, { useState } from "react";
import "../../index.scss";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isRegister, setIsRegister] = useState(false);
    const [userType, setUserType] = useState("student"); // Default to "student"
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic here
        console.log("Login", { email, password, userType });

        try {
            const endpoint =
                userType === "student"
                    ? "http://localhost:5181/api/Accounts/student/login"
                    : "http://localhost:5181/api/Accounts/company/login";

            const response = await axios.post(endpoint, {
                email,
                password,
            });

            if (response.status === 200) {
                const { token } = response.data.result; 
                login(token, email, userType);
                navigate("/");
            } else {
                console.log("Login failed");
                alert("Invalid email or password");
            }
        } catch (error) {
            console.error("Error during login:", error);
            alert("Error during login");
        }
    };

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Register", { email, password, userType });

        try {
            const endpoint =
                userType === "student"
                    ? "http://localhost:5181/api/Accounts/student/register"
                    : "http://localhost:5181/api/Accounts/company/register";

            const response = await axios.post(endpoint, {
                email,
                password,
            });

            if (response.status === 200) {
                const { token} = response.data.result; 
                login(token, email, userType);
                navigate("/");
            } else {
                console.log("Registration failed");
                alert("Registration failed");
            }
        } catch (error) {
            console.error("Error during registration:", error);
            alert("Error during registration");
        }
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