/**
 * Created by sunny.yu2 on 9/16/2015.
 */
var wait = require('../CommonUtility/Wait');
var casperInit=require('./CasperInit');
var casperDriver=casperInit.getCasperDriver();


exports.Open=function Open(url,callback){
    casperDriver.start(url,callback);
}

exports.Back=function Back(){
    casperDriver.back();
}

exports.Clear=function Clear(){
    casperDriver.clear();
}

exports.SendKeys=function SendKeys(css,key){
    wait.waitByCssWithMethod(css,casperDriver.sendKeys(css,key));

}

exports.Click=function Click(css){
    wait.waitByCssWithMethod(css,casperDriver.click(css))
}



exports.back=function Back(){
    casperDriver.back();
}


