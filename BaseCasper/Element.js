/**
 * Created by sunny.yu2 on 9/16/2015.
 */

var casperInit=require('./CasperInit');
var casperDriver=casperInit.getCasperDriver();
var wait=require('../CommonUtility/Wait');


exports.title=function title(){
   var title;
   wait.waitForCondition(function(){
      casperDriver.evaluate(function(){

         return title=document.title;
      }).length>0;
   });
   return title;
};


