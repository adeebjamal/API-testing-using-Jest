const express = require("express");
const USER = require("../Models/user");

const router = express.Router();

// ---------- GET routes ----------
router.get("/", async(req,res)=> {
    try {
        const users = await USER.find();
        if(users) {
            return res.status(200).json({
                "users": users
            });
        }
        return res.status(404).json({
            "message": "Users not found."
        });
    }
    catch(error) {
        return res.status(500).json({
            "message": "Internal server error."
        });
    }
});

router.get("/:email", async(req,res)=> {
    try {
        const user = await USER.findOne({email: req.params.email});
        if(user) {
            return res.status(200).json({
                "user": user
            });
        }
        return res.status(404).json({
            "message": "User not found."
        });
    }
    catch(error) {
        return res.status(500).json({
            "message": "Internal server error."
        });
    }
});

module.exports = router;