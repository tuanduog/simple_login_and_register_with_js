const userController = require('../Controller/userController');
const express = require('express');
const router = express.Router();

router.post('/add-user', userController.addUser);

module.exports = router;

