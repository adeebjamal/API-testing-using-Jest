const router = require("express").Router();
const USER = require("../Models/user");

router.delete("/:email", async(req,res)=> {
    try {
        const existingUser = await USER.findOne({email: req.params.email});
        if(!existingUser) {
            return res.status(404).json({
                "message": "User not found."
            });
        }
        await existingUser.remove();
        return res.status(204).json({
            "message": "User deleted successfully."
        });
    }
    catch(error) {
        return res.status(500).json({
            "message": "Internal server error."
        });
    }
});

module.exports = router;