var config = require('./config.js')

var getActivityRatation = function(val){
    return config.getRequest('/hfProductActivity/getActivityRatation',val);
}
module.exportd = {
    getActivityRatation
}