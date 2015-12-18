/**
 * Created by sunny.yu2 on 12/15/2015.
 */
var require=patchRequire(require);
var tester=require('tester');

exports.assertEqual=function(subject,expected,message){
    tester.assertEqual(subject,expected,message);
}