const express = require('express');
const User = require('../models/User');
const router = express.Router()
const { body, validationResult } = require('express-validator');

//Create a User using: POST '/api/auth/createuser'.No Login required
router.post('/createuser', [
    body('firstname', "Enter a valid first name").isLength({ min: 3 }),
    body('lastname', "Enter a valid last name").isLength({ min: 3 }),
    body('email', "Enter a valid E-mail").isEmail(),
    body('password', "Password must be at least 5 characters").isLength({ min: 5 }),
], async (req, res) => {
    //if there are errors return bad request and errors
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }
    //Check whether the user with this email exists already
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "Sorry the user with this email already exists" })
        }
        //this will wait and create a new user
        user = await User.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password
        })
        res.json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
    }

})


module.exports = router;