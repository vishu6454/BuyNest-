// Sign.js
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";

const slideVariants = {
  hiddenLeft: { x: "-100%", opacity: 0 },
  hiddenRight: { x: "100%", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  exitLeft: { x: "-100%", opacity: 0, transition: { duration: 0.4 } },
  exitRight: { x: "100%", opacity: 0, transition: { duration: 0.4 } },
};

const Sign = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const { login, signUp } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const highlightLogin = location.state?.highlightLogin;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      const success = login(formData.email, formData.password);
      if (success) {
        toast.success("Login successful!");
        setTimeout(() => {
          navigate(location.state?.from || "/");
          window.location.reload();
        }, 1000);
      } else {
        toast.error("Invalid credentials");
      }
    } else {
      if (formData.password !== formData.confirmPassword) {
        toast.error("Passwords do not match");
        return;
      }

      const newUser = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        gender: formData.gender,
        email: formData.email,
        mobile: formData.mobile,
        password: formData.password,
      };

      signUp(newUser);
      toast.success("Signup successful! Please login.");
      setIsLogin(true);
    }
  };

  return (
    <div className="font-[Montserrat] flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-200 to-indigo-100 px-4">
      <Toaster position="top-center" />

      <div className="relative w-full max-w-[900px] bg-white rounded-[20px] shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Side Panel */}
        <motion.div
          className="md:w-1/2 w-full bg-gradient-to-r from-indigo-500 to-indigo-700 text-white flex flex-col justify-center items-center text-center p-8 md:p-12"
          initial={{ x: 0 }}
          animate={{ x: isLogin ? 0 : "-100%" }}
          transition={{ duration: 0.5 }}
        >
          {isLogin ? (
            <div className="space-y-3">
              <h1 className="text-2xl md:text-3xl font-bold">New here?</h1>
              <p className="text-sm md:text-base">
                Create an account to start your journey
              </p>
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setIsLogin(false)}
                className="mt-3 border border-white py-2 px-6 md:px-8 rounded text-xs uppercase font-semibold hover:bg-white hover:text-indigo-700 transition"
              >
                Sign Up
              </motion.button>
            </div>
          ) : (
            <div className="space-y-3">
              <h1 className="text-2xl md:text-3xl font-bold">Welcome back!</h1>
              <p className="text-sm md:text-base">
                To stay connected, login with your credentials
              </p>
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setIsLogin(true)}
                className="mt-3 border border-white py-2 px-6 md:px-8 rounded text-xs uppercase font-semibold hover:bg-white hover:text-indigo-700 transition"
              >
                Sign In
              </motion.button>
            </div>
          )}
        </motion.div>

        {/* Forms Section */}
        <div className="relative flex-1 flex justify-center items-center p-6 md:p-10">
          <AnimatePresence mode="wait">
            {isLogin ? (
              <motion.div
                key="signin"
                variants={slideVariants}
                initial="hiddenLeft"
                animate="visible"
                exit="exitLeft"
                className="w-full max-w-sm"
              >
                <form onSubmit={handleSubmit} className="w-full space-y-3">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    Sign In
                  </h2>
                  {highlightLogin && (
                    <p className="bg-yellow-100 text-yellow-700 px-4 py-2 text-xs md:text-sm rounded mb-2">
                      Please login to continue
                    </p>
                  )}
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    className="bg-gray-100 px-3 py-2 rounded w-full text-sm md:text-base outline-none"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                    className="bg-gray-100 px-3 py-2 rounded w-full text-sm md:text-base outline-none"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.05 }}
                    type="submit"
                    className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white text-xs md:text-sm uppercase font-semibold py-2 rounded"
                  >
                    Sign In
                  </motion.button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="signup"
                variants={slideVariants}
                initial="hiddenRight"
                animate="visible"
                exit="exitRight"
                className="w-full max-w-sm"
              >
                <form onSubmit={handleSubmit} className="w-full space-y-2">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    Create Account
                  </h2>

                  {/* Name Fields */}
                  <div className="flex flex-col md:flex-row gap-2">
                    <input
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      required
                      className="bg-gray-100 px-3 py-2 rounded w-full text-sm md:text-base outline-none"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                    <input
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                      required
                      className="bg-gray-100 px-3 py-2 rounded w-full text-sm md:text-base outline-none"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Gender Selection */}
                  <div className="flex items-center gap-4 text-xs md:text-sm mt-2">
                    <label className="font-medium">Gender:</label>
                    <label className="flex items-center gap-1 cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        value="Male"
                        onChange={handleChange}
                        checked={formData.gender === "Male"}
                      />
                      Male
                    </label>
                    <label className="flex items-center gap-1 cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        value="Female"
                        onChange={handleChange}
                        checked={formData.gender === "Female"}
                      />
                      Female
                    </label>
                  </div>

                  <input
                    name="mobile"
                    type="tel"
                    placeholder="Mobile Number"
                    required
                    className="bg-gray-100 px-3 py-2 rounded w-full text-sm md:text-base outline-none"
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    className="bg-gray-100 px-3 py-2 rounded w-full text-sm md:text-base outline-none"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    required
                    className="bg-gray-100 px-3 py-2 rounded w-full text-sm md:text-base outline-none"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <input
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    required
                    className="bg-gray-100 px-3 py-2 rounded w-full text-sm md:text-base outline-none"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />

                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.05 }}
                    type="submit"
                    className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white text-xs md:text-sm uppercase font-semibold py-2 rounded"
                  >
                    Sign Up
                  </motion.button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Sign;
