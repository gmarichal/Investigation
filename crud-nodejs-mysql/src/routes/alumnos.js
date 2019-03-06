const express = require('express');
const router = express.Router();

const alumnoController = require('../controllers/alumnoController');

router.get('/', alumnoController.list);
router.post('/add', alumnoController.save);


module.exports = router;