import React from "react";
import { motion } from "framer-motion";

const medications = ["Aspirin", "Paracetamol", "Ibuprofen"]; // Example data

const MedicationList = () => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200">
        Medication List
      </h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
        {medications.map((med, idx) => (
          <li key={idx}>{med}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default MedicationList;
