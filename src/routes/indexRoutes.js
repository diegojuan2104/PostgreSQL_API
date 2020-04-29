const express = require('express');
const router = express.Router();

const { getUsers, postUsers } = require('../controllers/indexController');

router.get('/users', getUsers).post('/users', postUsers);

module.exports = router;
