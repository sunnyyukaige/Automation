/**
 * Created by sunny.yu2 on 9/21/2015.
 */
var require = patchRequire(require);
var base=require('./BasePage');
var casperAction=require('../BaseCasper/CasperAction');
var utils=require('utils');
function login(){

}
utils.inherits(login,base);
login.prototype.fillUserName=function fillUserName(name){
   casperAction.SendKeys("input#UserName",name);
}

login.prototype.fillPSW=function fillPSW(password){
    casperAction.SendKeys("input#Password",password);
}

login.prototype.Login=function Login(){
    casperAction.Click("button#login-button");
}
module.exports=login;