const express = require("express");
const router = express.Router();
const USER = require("../Models/user");

// ---------- POST routes ----------
router.post("/", async(req,res)=> {
    try {
        if(!req.body.name || !req.body.email || !req.body.password || !req.body.confirmPassword) {
            return res.status(400).json({
                "message": "Please provide all the required fields. i.e name, email, and password."
            });
        }
        if(req.body.password !== req.body.confirmPassword) {
            return res.status(400).json({
                "message": "Passwords doesn't match."
            });
        }
        if(req.body.password.length < 6) {
            return res.status(400).json({
                "message": "Password is too weak."
            });
        }
        const foundUser = await USER.findOne({email: req.body.email});
        if(foundUser) {
            return res.status(400).json({
                "message": "User with entered email already exists."
            });
        }
        const newUser = new USER({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        await newUser.save();
        return res.status(201).json({
            "message": "User added to the database.",
            "details": newUser
        });
    }
    catch(error) {
        return res.status(500).json({
            "message": "Internal server error."
        });
    }
});

module.exports = router;