import React from "react";
import { motion } from "framer-motion";

const MedicationCard = () => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-lg font-bold mb-2 text-gray-800 dark:text-gray-200">
        Next Medication
      </h2>
      <p className="text-gray-700 dark:text-gray-300">Aspirin - 8:00 AM</p>
    </motion.div>
  );
};

export default MedicationCard;
