const express = require("express")

const {globlalMid} = require("./middlewares/practiceMiddle")

const app = express()
const port = 4000

const userRoutes = require("./routes/User")
const productsRoute = require("./routes/Products")

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(globlalMid)

app.get("/", (req,res)=>{
    //res.end("Helo world")
    res.json({
        "jsonkey":"value"
    })
})

app.use("/users",userRoutes)
app.use("/products",productsRoute)


app.listen(port, ()=>console.log("Server up"))
