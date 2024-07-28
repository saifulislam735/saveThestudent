import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const loginInfo = { email, password };

        console.log(loginInfo)

        login(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                Swal.fire({
                    title: "Good job!",
                    text: "Login successfully!",
                    icon: "success"
                });
                form.reset();
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${errorMessage}`,
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="container max-w-lg mx-auto px-6 py-24">
                <h2 className="text-center text-5xl font-bold text-blue-500 mb-8">Please Login!</h2>
                <div className="bg-white shadow-md rounded px-3 lg:px-8 pt-6 pb-8 mb-4">
                    <form onSubmit={handleLogin}>
                        {/* Email input */}
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Email address"
                            />
                        </div>

                        {/* Password input */}
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Password"
                            />
                        </div>

                        {/* Remember me checkbox and Forgot password link */}
                        <div className="mb-6 flex items-center justify-between">
                            <label className="block text-sm text-gray-700">
                                <input className="mr-2 leading-tight" type="checkbox" />
                                <span className="text-sm">
                                    Remember me
                                </span>
                            </label>
                            <a href="#" className="text-sm text-primary-dark hover:text-primary">Forgot Password?</a>
                        </div>

                        {/* Submit button */}
                        <button
                            type="submit"
                            className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4 w-full"
                        >
                            Sign In
                        </button>

                        {/* Divider and Social Login Buttons */}
                        <div className="flex items-center mb-4">
                            <div className="w-full border-t border-gray-400"></div>
                            <div className="mx-4 text-sm text-gray-500">Or </div>
                            <div className="w-full border-t border-gray-400"></div>
                        </div>

                        {/* Social login buttons */}
                        <div className="space-y-3">
                            <button
                                className="w-full bg-white hover:bg-gray-100 text-gray-700 font-bold py-2 px-4 rounded border shadow focus:outline-none focus:shadow-outline"
                                onClick={() => {
                                    // Handle Google login
                                    console.log("Google login clicked");
                                }}
                            >
                                Sign in with Google
                            </button>

                            <button
                                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                onClick={() => {
                                    // Handle Facebook login
                                    console.log("Facebook login clicked");
                                }}
                            >
                                Sign in with Facebook
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
