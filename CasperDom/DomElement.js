/**
 * Created by sunny.yu2 on 9/17/2015.
 */

var casperInit=require('./CasperInit');
var casperDriver=casperInit.getCasperDriver;
exports.FindById=function FindById(id){
    return casperDriver.getElementById(id);
}

exports.FindByName=function FindByName(name){
    return casperDriver.getElementsByName(name).item(0);
}