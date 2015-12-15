/**
 * Created by sunny.yu2 on 9/21/2015.
 */
debugger;
var casper = require('casper');
var casperInit = require('../BaseCasper/CasperInit');
casperInit.setCasper(casper);
var casperDriver=casperInit.getCasperDriver();
casperInit.SetViewPointSize(1280,800);
var capture=require('../CommonUtility/Capture');
var basepage=require('../Page/BasePage');
basepage=new basepage();
var loginpage=require('../Page/LoginPage');
loginpage=new loginpage();

basepage.open('http://dailyodin.ef.com/',function(){
capture.capture('f:\\caspercapture\\sunnycaspertestyeah1.png');
});
casperDriver.then(function() {
    loginpage.fillUserName('OlgaF');
    loginpage.fillPSW('test');
    loginpage.Login();
    basepage.compareTitle('ODIN+');
    capture.capture('f:\\caspercapture\\sunnycaspertestyeah2.png',null,null,null,null);
});
casperDriver.run();






