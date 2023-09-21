const router = require("express").Router();
const USER = require("../Models/user");

router.put("/:id", async(req,res)=> {
    try {
        const existingUser = await USER.findOne({_id: req.params.id});
        if(!existingUser) {
            return res.status(404).json({
                "message": "User not found."
            });
        }
        existingUser.name = req.body.name;
        existingUser.email = req.body.email;
        existingUser.password = req.body.password;
        await existingUser.save();
        return res.status(200).json({
            "message": "User updated successfully.",
            "details": existingUser
        });
    }
    catch(error) {
        return res.status(500).json({
            "message": "Internal server error."
        });
    }
});

router.patch("/:id", async(req,res)=> {
    try {
        const existingUser = await USER.findOne({_id: req.params.id});
        if(!existingUser) {
            return res.status(404).json({
                "message": "User not found."
            });
        }
        if(req.body.name) {
            existingUser.name = req.body.name;
        }
        if(req.body.email) {
            existingUser.email = req.body.email;
        }
        if(req.body.password) {
            existingUser.password = req.body.password;
        }
        await existingUser.save();
        return res.status(200).json({
            "message": "User updated successfully.",
            "details": existingUser
        });
    }
    catch(error) {
        return res.status(500).json({
            "message": "Internal server error."
        });
    }
});

module.exports = router;