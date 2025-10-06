import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "./hooks/useAuth";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";

const App = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
      {/* Navbar always visible */}
      <Navbar />

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center p-6">
        <AnimatePresence exitBeforeEnter>
          {user ? (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-7xl"
            >
              <Dashboard />
            </motion.div>
          ) : (
            <motion.div
              key="register"
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
              className="w-full max-w-md"
            >
              <RegisterPage />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;
