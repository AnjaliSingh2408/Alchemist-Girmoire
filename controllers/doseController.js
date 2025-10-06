const DoseLog = require('../models/DoseLog');
const Medication = require('../models/Medication');

exports.logDose = async (req, res) => {
    const { medicationId, scheduledTime, status } = req.body;
    try {
        const medication = await Medication.findById(medicationId);
        if (!medication || medication.user.toString() !== req.user.id) {
            return res.status(404).json({ msg: 'Medication not found or not authorized' });
        }
        
        const newDose = new DoseLog({
            user: req.user.id,
            medication: medicationId,
            scheduledTime,
            status,
            actualTimeTaken: status === 'taken' ? new Date() : null,
        });
        const dose = await newDose.save();
        res.json(dose);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.getDoseHistory = async (req, res) => {
    try {
        const history = await DoseLog.find({ user: req.user.id }).sort({ scheduledTime: -1 });
        res.json(history);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};