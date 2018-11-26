const express = require('express');
const router = express.Router();

const whoamiController = require('../controllers/whoamiController');

router.get('/', whoamiController.GET_HTTP_HEADERS);

module.exports = router;