const express = require('express');
const router = express.Router();

const alumnoController = require('../controllers/alumnoController');

router.get('/', alumnoController.list);
router.post('/add', alumnoController.save);
router.get('/delete/:id', alumnoController.delete);
router.get('/update/:id', alumnoController.edit);
router.post('/update/:id', alumnoController.update);



module.exports = router;