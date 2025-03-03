import React, { useState } from "react";
import FirebaseAuthService from "../../services/fireauth-service";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navi = useNavigate()
    const handleLogin = async () => {
        
            await FirebaseAuthService.login(email, password).then((e) => {
                navi('/admin')
            }).catch((e) => {
                console.log(e.code);
                switch (e.code) {
                    case "auth/invalid-credential":
                        setMessage("Invalid email or password");            
                        break;
                    case "auth/user-not-found":
                        setMessage("User not found.");
                        break;
                    case "auth/too-many-requests":
                        setMessage("Can not login try again in a few minutes.");
                        break;
                    default:
                        setMessage(e.message);
                }
            })
           
        
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md border-2 border-black">
                <h2 className="text-2xl font-bold text-black text-center mb-6">Login</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 mb-4 border border-black rounded focus:outline-none focus:ring-2 focus:ring-black"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 mb-4 border border-black rounded focus:outline-none focus:ring-2 focus:ring-black"
                />
                <button
                    onClick={handleLogin}
                    className="w-full bg-[#000000] text-white py-3 rounded hover:bg-white hover:text-[#000000] hover:border-2 hover:border-black transition duration-200"
                >
                    Login
                </button>
                <p className="text-red-500 mt-4 text-center">{message}</p>
            </div>
        </div>
    );
};

export default Login;
