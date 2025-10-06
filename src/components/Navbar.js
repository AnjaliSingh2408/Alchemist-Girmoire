import React from "react";
import { useAuth } from "../hooks/useAuth";
import { motion } from "framer-motion";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <motion.nav
      className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 dark:from-gray-800 dark:to-gray-900 text-white p-4 flex justify-between items-center shadow-md"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
    >
      <h1 className="text-2xl font-bold">MyMedApp</h1>
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <span>Hello, {user.name}</span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={logout}
              className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded transition-all"
            >
              Logout
            </motion.button>
          </>
        ) : (
          <span>Please login</span>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
