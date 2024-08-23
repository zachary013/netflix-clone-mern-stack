import { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  const isFormValid = () => {
    return email.trim() && password.trim();
  };

  return (
    <div className="h-screen w-full hero-bg">
      <header className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link to="/">
          <img src="/netflix-logo.png" alt="netflix-logo" className="w-52" />
        </Link>
      </header>

      <div className="flex justify-center items-center mt-20 mx-3">
        <div className="w-full max-w-md p-8 space-y-6 bg-black/60 rounded-lg shadow-md">
          <h1 className="text-center text-white text-2xl font-bold mb-4">
            Login
          </h1>
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-gray-300 block">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-red-500 "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>           
            
            <div>
              <label htmlFor="password" className="text-white">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="********"
                className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-red-500 "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
                type="submit"
                disabled={!isFormValid()}
                className="w-full py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 disabled:bg-red-300"
              >
                Login
              </button>
          </form>
          
          <div className="text-center text-gray-400">
              Don't have an acount?{" "}
              <Link to={"/signup"} className="text-red-500 hover:underline">
                Sign Up
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
