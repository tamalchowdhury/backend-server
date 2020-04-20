const express = require('express');
const router = express.Router();
const controller = require('./controller');

// Display all the divisions on the root
router.get('/', controller.showAllDivisions);

router.get('/:division', controller.showSingleDivision);

module.exports = router;
