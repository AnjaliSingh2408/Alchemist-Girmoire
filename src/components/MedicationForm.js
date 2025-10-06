import React, { useState } from "react";
import { motion } from "framer-motion";

const MedicationForm = () => {
  const [medication, setMedication] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!medication) return;
    console.log("Medication added:", medication);
    setMedication("");
  };

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200">
        Add Medication
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={medication}
          onChange={(e) => setMedication(e.target.value)}
          placeholder="Enter medication name"
          className="w-full p-3 mb-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white dark:border-gray-600"
        />
        <motion.button
          type="submit"
          className="w-full py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Add
        </motion.button>
      </form>
    </motion.div>
  );
};

export default MedicationForm;
