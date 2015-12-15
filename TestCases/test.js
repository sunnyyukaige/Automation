debugger;

var require = patchRequire(require);
var tester=require('tester');
var driver=require('../BaseCasper/sunny_testInit').getCasperDriver();

        driver.start("http://dailyodin.ef.com/Account/LogOn?ReturnUrl=%2f",function() {
            driver.capture("F:\\casperjsscreenshot\\sunnycaspertestyeah1.png");
            driver.echo(driver.evaluate(function () {
                return document.title;
            }));
            tester.testEqual("","");
        });


    driver.run(function(){
        driver.exit();
    })




