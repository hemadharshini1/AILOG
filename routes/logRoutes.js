const express = require('express');
const multer = require('multer');
const logController = require('../controllers/logController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('logFile'), logController.uploadLog);
router.get('/', logController.getLogs);
router.get('/:id', logController.getLogById);

module.exports = router;
