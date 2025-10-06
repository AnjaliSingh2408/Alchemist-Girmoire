const express = require('express');
const router = express.Router();
const auth = require('../middleware/Middleware');
const { logDose, getDoseHistory } = require('../controllers/doseController');

router.post('/log', auth, logDose);
router.get('/history', auth, getDoseHistory);

module.exports = router;