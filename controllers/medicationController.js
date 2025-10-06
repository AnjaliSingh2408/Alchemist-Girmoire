const Medication = require('../models/Medication');

exports.getMedications = async (req, res) => {
    try {
        const medications = await Medication.find({ user: req.user.id }).sort({ createdAt: -1 });
        res.json(medications);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.createMedication = async (req, res) => {
    const { name, dosage, frequency, specificTimes } = req.body;
    try {
        const newMedication = new Medication({
            user: req.user.id,
            name,
            dosage,
            frequency,
            specificTimes,
        });
        const medication = await newMedication.save();
        res.json(medication);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.updateMedication = async (req, res) => {
    try {
        let medication = await Medication.findById(req.params.id);
        if (!medication) return res.status(404).json({ msg: 'Medication not found' });
        if (medication.user.toString() !== req.user.id) return res.status(401).json({ msg: 'Not authorized' });
        
        medication = await Medication.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.json(medication);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.deleteMedication = async (req, res) => {
    try {
        let medication = await Medication.findById(req.params.id);
        if (!medication) return res.status(404).json({ msg: 'Medication not found' });
        if (medication.user.toString() !== req.user.id) return res.status(401).json({ msg: 'Not authorized' });

        await Medication.findByIdAndRemove(req.params.id);
        res.json({ msg: 'Medication removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};