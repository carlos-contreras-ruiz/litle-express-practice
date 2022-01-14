const express = require("express")

const router = express.Router()

router.get("", (req,res)=>{
    res.json({
        "users":"value"
    })
})

router.get("/:id", (req,res)=>{
    const id = req.params.id;
    res.json({
        "usersid":id
    })
})

module.exports = router