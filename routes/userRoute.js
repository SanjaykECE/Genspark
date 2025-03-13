const login = require('../controllers/login');
const {generateToken} = require('../controllers/refresh');
const sendOTP = require('../controllers/sendOTP');
const signup = require('../controllers/signup');
const router = require('express').Router();

// routes for user api
router.post('/sendotp', sendOTP)
router.post('/signup', signup)
router.post('/login', login)
router.get('/refresh', generateToken)


module.exports = router;