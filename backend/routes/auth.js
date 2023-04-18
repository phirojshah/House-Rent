const express = require('express');
const User = require('../models/User');
const router = express.Router()
const { body, validationResult } = require('express-validator');

//Create a User using: POST '/api/auth/'. Doesnot require Auth
router.post('/', [
    body('firstname', "Enter a valid first name").isLength({ min: 3 }),
    body('lastname', "Enter a valid last name").isLength({ min: 3 }),
    body('email', "Enter a valid E-mail").isEmail(),
    body('password', "Password must be at least 5 characters").isLength({ min: 5 }),
], (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }
    User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password
    }).then(user=>res.json(user))
    .catch(err=>{console.log(err)
    res.json({error: "Please enter a unique value for email",message: err.message})})
})


module.exports = router;