// handler layer. Used for validating the request
// Once the request is validated, We ask the service layer for data
class timeHandler {
    constructor(ts){
        this.ts = ts
        
    }
    // validate the time request
    async get(req,res){
        // we dont want any query parameters. The check although is vile, its better to be go exactly as whats required
        if (Object.keys(req.query).length > 0 ){
            res.status(404).send("Invalid Request")
        }
        var response = this.ts.get()
        res.send(response)
    }
}
module.exports = {timeHandler}