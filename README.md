# cloudpassage_demo
Pilot project for cloudpassage

## Tests launching commands
### All tests
npm test

### Navigation tests
npm test -- --tag navigation

### Tests for contact form
npm test -- --tag filling

## Select browser
### Google Chrome
npm test
npm test -e chrome

### Google Chrome Headless (without UI)
npm test -e chromeheadless

### Firefox
npm test -e firefox