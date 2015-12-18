/**
 * Created by sunny.yu2 on 9/17/2015.
 */
var element =require('../BaseCasper/Element');
var action = require('../BaseCasper/CasperAction');
var assert=require('../CommonUtility/AssertHelper');
function basePage() {
}

basePage.prototype.compareTitle=function compareTitle(expectTitle){
     var title=element.title(expectTitle);
    //assert.assertEqual
    //    (title,expectTitle,"actual title is "+title+"but expect is "+expectTitle);
   // assertEquals(element.title,expectTitle,"actual title is "+element.title+"but expect is "+expectTitle);
}

basePage.prototype.open=function open(url, callback){
    action.Open(url, callback);
}

basePage.prototype.back=function back(url, callback){
    action.Back(url, callback);
}

module.exports=basePage;
