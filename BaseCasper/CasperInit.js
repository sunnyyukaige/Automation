/**
 * Created by sunny.yu2 on 9/16/2015.
 */

var casperSelf,casperDriver;
exports.setCasper = function(casper){
  return  casperSelf = casper;
}

exports.getCasperDriver = function(){
    if(!casperDriver){
        casperDriver = casperSelf.create();
    }
    return casperDriver;
}


exports.SetCasperClientScripts=function SetCasperClientScripts(script){
    casperDriver.clientScripts.push(script||'includes/jquery.js');
}

exports.SetCasperLogLevel=function SetCasperLogLevel(level){
    casperDriver.logLevel.push(level||"info");
}

exports.SetScreen=function SetScreen(heigh,width){
    casperDriver.screenX=heigh;
    casperDriver.screenY=width;
}

exports.SetViewPointSize=function SetViewPointSize(width,height){
    casperDriver.options.viewportSize={width: width, height: height};
}