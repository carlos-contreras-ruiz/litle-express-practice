const express = require("express")

const router = express.Router()

const {mid} = require("../middlewares/practiceMiddle")

router.get("/:id",mid, (req,res)=>{
    const id = req.params.id;
    res.json({
        "Params":id
    })
})

router.post("",(req,res)=>{
    const body = req.body
    console.log(body)
    res.json({
        "Titulo":body.title
    })
})

module.exports = router