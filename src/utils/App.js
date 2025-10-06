import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "./hooks/useAuth";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";

const App = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen">
      {/* Navbar always visible */}
      <Navbar />

      {/* AnimatePresence for smooth page transitions */}
      <AnimatePresence exitBeforeEnter>
        {user ? (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Dashboard />
          </motion.div>
        ) : (
          <motion.div
            key="register"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <RegisterPage />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
