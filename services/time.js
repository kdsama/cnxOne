// this is the service layer where all the logic falls. No validation of data is done here. 
class timeService {
    construct(){
        this.get = this.get.bind(this)
    }
    
    get(){
        return {epoch: Date.now()}
    }
    

}

module.exports = {timeService}