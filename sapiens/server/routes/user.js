const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.get('/user/getUsers', userController.getUsers);
router.post('/user/addUser', userController.addUser);



module.exports = router;