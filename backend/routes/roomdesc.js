const express = require('express');
const Roomdesc = require('../models/Roomdesc');
const router = express.Router()
const { body, validationResult } = require('express-validator');
const fetchuser = require('../middleware/fetchuser');



//ROUTE 1: Get all the roomdescriptions that a user posted using:GET "/api/roomdesc/fetchdesc" Login Required
router.get('/fetchdesc', fetchuser, async (req, res) => {
    try {
        const roomdesc = await Roomdesc.find({ user: req.user.id });
        res.json(roomdesc);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");

    }
})
//ROUTE 2: Add a roomdesc using:POST "/api/roomdesc/adddesc" Login Required
router.post('/adddesc', fetchuser, [
    body('place', "Enter a valid place").isLength({ min: 3 }),
    body('description', "Description must be at least 5 characters").isLength({ min: 3 }),
    body('phonenumber', "Enter a valid phonenumber").isLength({ min: 10 }),
], async (req, res) => {
    try {
        const { place, description, phonenumber } = req.body;
        //if there are errors send bad request and error 
        let success = false;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success, errors: errors.array() });
        }
        const roomdesc = new Roomdesc({
            place, description, phonenumber, user: req.user.id
        })
        const saveddesc = await roomdesc.save();
        res.send(saveddesc);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

})

module.exports = router;