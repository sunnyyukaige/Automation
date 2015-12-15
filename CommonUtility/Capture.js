/**
 * Created by sunny.yu2 on 9/16/2015.
 */
var casperInit=require('../BaseCasper/CasperInit');
var casperDriver=casperInit.getCasperDriver();
exports.capture=function capture(path){
    casperDriver.capture(path);
}

exports.captureWithOption=function captureWithOption(path,format,quality){
    casperDriver.capture(path,undefined,{
        format:format||'jpg' ,
        quality: quality||75
    });
}

exports.captureWithOption=function captureWithOption(path,top,left,heigh,width){
    casperDriver.capture(path,{
        top: top||0,
        left: left||0,
        width:heigh|| 500,
        height: width||400
    },{
        format:format||'jpg' ,
        quality: quality||75
    });
}