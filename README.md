#UI Automation with phantomjs
`some project researched in daily work or by myself`
`This project is personally created for reseatch pathomjs and casperjs`
##list the goals for this research
### * *know the principles of phantomjs with it's scource*
### * *create a simple framework using casperjs*
### * *refine this framework with nodejs*
### * *write one login case with framework created*
### * *refine this framework to support more cases and make it stable*
 **BaseCasper**
   - CasperInit.js (initial the casperjs instance by singletion pattern)
   - CasperAction.js (define the action provide by phantom browser)
   - Element.js (define the elements and relative property)
   - sunny_testInit.js (using for test and research some new method and idea)  

**CasperDom**
   - DomElement.js (define some DOM action ) 
 
**CommonUtility**
   - AssertHelper.js ( define an assert class base on casperjs tester module `for the tester current version did not support self created casper instance and it will when V2.0 come out , then i will update this framework with tester supported function` )  
 
 -------------------------------华丽分界线------------------------------------------------------  

**Page**
   - BasePage.js (add some hook and define some comment method and property for all other funciton page)
   - LoginPage.js (will be many page like this provide for test cases using)  
 
**TestCases**
   - BaseCase.js (define some hook method and commen method used by multiple test cases)
   - LoginCase.js (one login case as exp)
