
function mid(req,res,next){
    console.log("Entre a middd")
    console.log(req.body)
    console.log(req.params)
    next()
}

function globlalMid(req,res,next){
    console.log("Entre a global")
    console.log(req.body)
    console.log(req.params)
    next()
}

module.exports = {
    mid,
    globlalMid
}