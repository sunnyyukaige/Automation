/**
 * Created by sunny.yu2 on 9/16/2015.
 */
var casperInit=require('../BaseCasper/CasperInit');
var time = require('../Config/TimeConfig');
var capture=require('./Capture');
var PathHelper=require('../CommonUtility/PathHelper');
var casperDriver=casperInit.getCasperDriver();


exports.wait=function wait(definetime){
    casperDriver.wait(definetime||time.waittimeout*1000,"Wait "+time+" minutes",
        function timeout() { // step to execute if check has failed
            capture.capture(time.capturepath+global.pathWithDate+".png");
            this.echo("Wait for timeout.").exit();
    });
}

exports.waitElement=function waitElement(element,timeout){
    casperDriver.waitFor(function check() {
        return this.evaluate(function() {
            return element.exists() ;
        });
    }, function timeout() { // step to execute if check has failed
        capture.capture(time.capturepath+global.pathWithDate+".png");
        this.echo("Wait for timeout.").exit();
    },timeout||time.waittimeout);
    return element;
}

exports.waitElementWithMethod=function waitElementWithMethod(method,element,timeout){
    casperDriver.waitFor(function check() {
        return this.evaluate(function() {
            return element.exists() ;
        });
    }, function then() {    // step to execute when check() is ok
        method;
        },function timeout() { // step to execute if check has failed
        capture.capture(time.capturepath+global.pathWithDate+".png");
        this.echo("Wait for timeout.").exit();
    },timeout||time.waittimeout);
}

exports.waitByCssWithMethod=function waitByCssWithMethod(css,method,timeout){
    casperDriver.waitForSelector(css,
        function then() {    // step to execute when check() is ok
            method;
    },function timeout() { // step to execute if check has failed
            capture.capture(time.capturepath+global.pathWithDate+".png");
            this.echo("Wait for timeout.").exit();
    },timeout||time.waittimeout);
}

exports.waitForCondition=function waitForCondition(condition,timeout){
    casperDriver.waitFor(function check() {
        return condition;
    },function then(){
        this.echo("login success");
        capture.capture(time.capturepath+global.pathWithDate+".png",null,null,null,null);
    },function timeout() { // step to execute if check has failed
        capture.capture(time.capturepath+global.pathWithDate+".png",null,null,null,null);
        this.echo("Wait for timeout.").exit();

        },timeout||time.waittimeout);
}