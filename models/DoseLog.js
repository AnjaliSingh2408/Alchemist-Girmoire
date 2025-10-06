const mongoose = require('mongoose');

const DoseLogSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    medication: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Medication' },
    scheduledTime: { type: Date, required: true },
    status: {
      type: String,
      required: true,
      enum: ['taken', 'missed', 'upcoming'],
      default: 'upcoming',
    },
    actualTimeTaken: { type: Date },
  },
  { timestamps: true }
);

module.exports = mongoose.model('DoseLog', DoseLogSchema);