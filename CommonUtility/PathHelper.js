/**
 * Created by sunny.yu2 on 12/16/2015.
 */

var date=new Date();

var today=function Today(){
    return date.getFullYear().toString()+date.getMonth().toString()+
        date.getDay().toString()+date.getHours().toString()+date.getMinutes().toString()+date.getSeconds().toString();
}
console.log(today());
exports.setToday=function (){
   global.pathWithDate= today();
}
