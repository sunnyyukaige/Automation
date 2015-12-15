/**
 * Created by sunny.yu2 on 12/9/2015.
 */
var require = patchRequire(require);
var diver=require("casper"),
    casperDriver;
exports.getCasperDriver = function(){
    if(!casperDriver){
        casperDriver = diver.create();
    }
    return casperDriver;
}