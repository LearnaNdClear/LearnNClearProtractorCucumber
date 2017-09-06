
# LearnNClear Protractor Cucumber
LearnNClear is the organization provide online and offline tutorial for various automation tool
`LearnNClear Protractor Cucumber HTML Report` project that
* Makes use of page objects
* Illustrate the Cucumber HTML report on cucumber project with screenshot
* Embeded with Grunt to run scripts and report generation sequenally
* Runs tests sharded (parallel)
* Includes examples tests for Angular applications

## Setup:
* Install [Node](http://nodejs.org) (v6.x.x or later)
* `git clone https://github.com/vinohkumamahendra/LearnNClearProtractorCucumber`
* `npm install` to install the project dependencies
* `npm run update` to update drivers (this _should_ be run automagically on install)

## Run tests:
* run tests via plain Protractor `protractor protractor.conf.js`
* run tests `npm test` (runs via protractor inbuild command)
* run with grunt `grunt run_cucumber_pob` or `grunt`
* run tests `npm grunt_test` (runs via grunt inbuild command)

## Troubleshooting
* check node_modules/protractor/node_modules/webdriver-manager/selenium contains necessary driver otherwise run `node_modules/protractor/node_modules/webdriver-manager/.bin/webdriver-manager update`
* If you face any issue in updating the webdriver-manager, check if your system use proxy then add the argument `--proxy=<ProxyURL>:<proxyPort>`
* run `node -v` and make sure your node version is 6.x.x or greater

To know about us more or need support, [Contact us](http://learnnshine.com/contact-us)
