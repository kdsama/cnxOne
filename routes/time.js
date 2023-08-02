var express = require('express');
var router = express.Router();
var {setup} = require("../di/index")
// var {auth} = require("../middleware/auth")
tsObject = setup()


// selectinve authorizaton
// router.get('/',auth, function(req, res) {
//     tsObject.timeHandlerObject.get(req,res)
// });

/* GET users listing. */
router.get('/', function(req, res) {
    tsObject.timeHandlerObject.get(req,res)
});

module.exports = router;
