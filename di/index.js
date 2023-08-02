
var {timeService} = require("../services/time")
var {timeHandler} = require("../handler/time")

 function setup(){
    timeServiceObject = new timeService()
    timeHandlerObject = new timeHandler(timeServiceObject)
    return {timeServiceObject,timeHandlerObject}
 }
 module.exports = {setup}