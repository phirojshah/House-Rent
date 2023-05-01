const express = require('express');
const Roomdesc = require('../models/Roomdesc');
const router = express.Router()
const { body, validationResult } = require('express-validator');
const fetchuser = require('../middleware/fetchuser');

//ROUTE 1: Get all the roomdescriptions that a user posted using:GET "/api/roomdesc/fetchdesc" Login Required
router.get('/fetchalldesc', async (req, res) => {
    try {
        const roomdesc = await Roomdesc.find();
        res.json(roomdesc);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");

    }
})

//ROUTE 2: Add a roomdesc using:POST "/api/roomdesc/adddesc" Login Required
router.post('/adddesc', fetchuser, [
    body('place', "Enter a valid place").isLength({ min: 3 }),
    body('description', "Description must be at least 3 characters").isLength({ min: 3 }),
    body('phonenumber', "Enter a valid phonenumber").isLength({ min: 10 }),
    body('price').isLength({ min: 3 }),
    
], async (req, res) => {
    try {
        const { place, description, phonenumber, price } = req.body;
        //if there are errors send bad request and error 
        let success = false;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success, errors: errors.array() });
        }
        const roomdesc = new Roomdesc({
            place, description, phonenumber, price, user: req.user.id
        })
        const saveddesc = await roomdesc.save();
        res.send(saveddesc);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

})
//ROUTE 3: Update an existing roomdesc using: PUT "/api/roomdesc/updatedesc"
router.put('/updatedesc/:id', fetchuser, [], async (req, res) => {
    const { place, description, phonenumber, price } = req.body;
    try {
        //create a newDesc object
        const newDesc = {};
        if (place) { newDesc.place = place };
        if (description) { newDesc.description = description };
        if (phonenumber) { newDesc.phonenumber = phonenumber };
        if (price) { newDesc.price = price };
       

        //Find the descriptions to be updated and update it
        let roomdesc = await Roomdesc.findById(req.params.id);
        if (!roomdesc) {
            return res.status(404).send("Not Found");
        }
        if (roomdesc.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }
        roomdesc = await Roomdesc.findByIdAndUpdate(req.params.id, { $set: newDesc }, { new: true })
        res.json({ roomdesc });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
//ROUTE 4: Delete an existing roomdesc using: DELETE "/api/roomdesc/deletedesc"
router.delete('/deletedesc/:id', fetchuser, [], async (req, res) => {
    try {
        //Find the descriptions to be deleted and delete it
        let roomdesc = await Roomdesc.findById(req.params.id);
        if (!roomdesc) {
            return res.status(404).send("Not Found");
        }
        //allow deletion only if user owns this desc
        if (roomdesc.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }
        roomdesc = await Roomdesc.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Description has been deleted", roomdesc: roomdesc });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
//ROUTE 5: Get all the roomdescriptions that a user posted using:GET "/api/roomdesc/fetchdesc Login Required"
router.get('/fetchdesc', fetchuser, async (req, res) => {
    try {
        const roomdesc = await Roomdesc.find({ user: req.user.id });
        res.json(roomdesc);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");

    }
})
module.exports = router;