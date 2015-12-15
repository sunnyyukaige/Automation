/**
 * Created by sunny.yu2 on 9/21/2015.
 */
debugger;
var casper = require('casper');
var casperInit = require('../BaseCasper/CasperInit')
var casperSelf=casperInit.setCasper(casper);
var casperDriver=casperInit.getCasperDriver(casperSelf);
casperInit.SetViewPointSize(1280,800);
var casperAction=require('../BaseCasper/CasperAction');
casperAction.setAction(casperSelf);
var capture=require('../CommonUtility/Capture');
capture.setCapture(casperSelf);
var element=require('../BaseCasper/Element.js');
element.setElement(casperSelf);
var wait=require('../CommonUtility/Wait');
wait.setWait(casperSelf);
var basepage=require('../Page/BasePage');
var loginpage=require('../Page/LoginPage');
basepage.open('http://dailyodin.ef.com/',function(){
capture.capture('f:\\caspercapture\\sunnycaspertestyeah1.png');
});
casperAction.Then(function() {
    loginpage.fillUserName('OlgaF');
    loginpage.fillPSW('test');
    loginpage.Login();
    basepage.compareTitle('ODIN+');
    capture.capture('f:\\caspercapture\\sunnycaspertestyeah2.png',null,null,null,null);
});
casperAction.Run();






