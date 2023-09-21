const router = require("express").Router();
const USER = require("../Models/user");

// ---------- POST routes ----------
router.post("/", async(req,res)=> {
    // User details will be received in form of JSON object.
    // userData is in JSON format.
    try {
        if(!req.body.userData.name || !req.body.userData.email || !req.body.userData.password) {
            return res.status(400).json({
                "message": "Please provide all the required fields. i.e name, email and password."
            });
        }
        if(req.body.userData.password !== req.body.userData.confirmPassword) {
            return res.status(400).json({
                "message": "Passwords doesn't match."
            });
        }
        if(req.body.userData.password.length < 6) {
            return res.status(400).json({
                "message": "Password is too weak."
            });
        }
        const foundUser = await USER.findOne({email: req.body.userData.email});
        if(foundUser) {
            return res.status(400).json({
                "message": "User with entered email already exists."
            });
        }
        const newUser = new USER({
            name: req.body.userData.name,
            email: req.body.userData.email,
            password: req.body.userData.password
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