const userController = require('../Controller/userController');
const express = require('express');
const router = express.Router();
const auth = require('../Middleware/authorMiddleware');

router.post('/add-user', userController.addUser);

router.post('/check-user', userController.checkUser);

router.get('/profile', auth, userController.profile);

router.post('/logout', userController.logout);

module.exports = router;

