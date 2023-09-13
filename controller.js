const express = require('express');
const router = express.Router();
const model = require('./model');

// routes
router.get('/auth', authenticate);

module.exports = router;

function authenticate(req, res, next) {
    model.auth(req.body)
    // returns user without PW if user is found in database
    .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
    .catch(err => next(err))
}