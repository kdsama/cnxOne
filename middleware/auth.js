


const errAuthHeaderNotFound = "authorization headers are missing"
const errUnAuthorized = "the request is unauthorized"


function auth(req,res,next){
    try {

        const reqHeader = req.headers['authorization'];
        if (!reqHeader) {
            return next(errAuthHeaderNotFound)
        }
        if (reqHeader != "mysecrettoken"){
            return next(errUnAuthorized)
        }
        next()
    }
    catch(e){
        // dont expose error to the user 
        console.log(e)
        return next(errAuthHeaderNotFound)
        
    }
}




module.exports = {auth}