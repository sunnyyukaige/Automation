/**
 * Created by sunny.yu2 on 9/16/2015.
 */

var casperInit=require('./CasperInit');
var casperDriver=casperInit.getCasperDriver();
var wait=require('../CommonUtility/Wait');


exports.title=function title(titlename){
   wait.waitForCondition(function check(){
      return casperDriver.evaluate(function(){
         return document.title==titlename
      })
   },240000)
};


