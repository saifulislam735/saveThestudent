import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
    const { createUser } = useContext(AuthContext);

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const signUpInfo = { name, email, password };
        console.log(signUpInfo);

        createUser(email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user);
                Swal.fire({
                    title: "Good job!",
                    text: "Account created successfully!",
                    icon: "success"
                });
                form.reset();
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
            <div className="max-w-md w-full p-6 bg-white rounded-lg">
                <h2 className="text-center text-5xl font-bold text-blue-500 mb-8">Sign Up</h2>

                <form onSubmit={handleSignUp}>
                    {/* Name input */}
                    <div className="relative mb-6">
                        <label
                            htmlFor="nameInput"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            className="peer block min-h-[auto] w-full rounded border border-gray-300 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 peer-focus:text-primary"
                            id="nameInput"
                            placeholder="Name"
                            required
                            style={{ color: '#333' }} // Adjust text color for better visibility
                        />
                    </div>

                    {/* Email input */}
                    <div className="relative mb-6">
                        <label
                            htmlFor="emailInput"
                        >
                            Email address
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="peer block min-h-[auto] w-full rounded border border-gray-300 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 peer-focus:text-primary"
                            id="emailInput"
                            placeholder="Email address"
                            required
                            style={{ color: '#333' }} // Adjust text color for better visibility
                        />
                    </div>

                    {/* Password input */}
                    <div className="relative mb-6">
                        <label
                            htmlFor="passwordInput"
                        >
                            Password
                        </label>
                        <input
                            name="password"
                            type="password"
                            className="peer block min-h-[auto] w-full rounded border border-gray-300 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 peer-focus:text-primary"
                            id="passwordInput"
                            placeholder="Password"
                            required
                            style={{ color: '#333' }} // Adjust text color for better visibility
                        />
                    </div>

                    {/* Remember me checkbox */}
                    <div className="mb-6 flex items-center">
                        <input
                            className="mr-2 leading-tight"
                            type="checkbox"
                            id="exampleCheck3"
                            defaultChecked // Use defaultChecked for initial checked state
                        />
                        <label
                            htmlFor="exampleCheck3"
                            className="cursor-pointer"
                        >
                            Remember me
                        </label>

                        {/* Forgot password link */}
                        <a
                            href="#"
                            className="ml-auto text-primary focus:outline-none dark:text-primary-400"
                        >
                            Forgot password?
                        </a>
                    </div>

                    {/* Submit button */}
                    <button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
                    >
                        Sign Up
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
                                // Handle Google signup
                                console.log("Google signup clicked");
                            }}
                        >
                            Sign up with Google
                        </button>

                        <button
                            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => {
                                // Handle Facebook signup
                                console.log("Facebook signup clicked");
                            }}
                        >
                            Sign up with Facebook
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
