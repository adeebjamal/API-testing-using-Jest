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
        await USER.deleteOne({email: existingUser.email});
        // If status code is set to 204, it is not possible to send a JSON as response.
        return res.status(200).json({
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