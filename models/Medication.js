const mongoose = require('mongoose');

const MedicationSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    name: { type: String, required: true },
    dosage: { type: String, required: true },
    frequency: { type: String, required: true },
    specificTimes: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Medication', MedicationSchema);