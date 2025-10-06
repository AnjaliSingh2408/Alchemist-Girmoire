const express = require('express');
const router = express.Router();
const auth = require('../middleware/Middleware');
const {
  getMedications,
  createMedication,
  updateMedication,
  deleteMedication,
} = require('../controllers/medicationController');

router.route('/').get(auth, getMedications).post(auth, createMedication);
router.route('/:id').put(auth, updateMedication).delete(auth, deleteMedication);

module.exports = router;