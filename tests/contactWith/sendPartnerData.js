let DataDrivenTest = require('nightwatch-data-driven').default;
// require('nightwatch-data-driven').DataDrivenTest;
let contactPage;
let partnerData = require('../../data/partnerData');
// var partnerData = browser.globals.partnerData;
module.exports = {
    before: function(browser){
        // 
        contactPage = browser.page.contactPage();
    },

    beforeEach: function(){
        contactPage.navigate();
        contactPage.clearPartnerForm();
    }, 

    afterEach: function(browser){
        browser.deleteCookies();
    },
    
    after: function(browser){
        browser.end();
    },
    '@tags': ['filling', 'smoke', 'positive', 'contact'],
    'send valid partner data:' (browser) {

        console.log('Before DataDrivenTest');
        let tests = new DataDrivenTest()
            .withBrowser(browser)
            .withArrange(function(){
                return contactPage.clearPartnerForm();
            })
            .withAct(function(data, name){
                console.log('Into act');
                contactPage
                    .fillPartnerForm(data).pause(5000)
                    // .switchToRecaptchaFrame()
                    // .recaptchaSelect();
            })
            .withAssert(function(){
                console.log("Into assert");
                browser.page.contactPage().assert.urlContains('contact');
            // this.contactPage.expect.element('@recaptcha').to.be.selected;
            })
            .forCases({
                "Positive data":partnerData.valid,
                "Unvalid  data":partnerData.unvalid
                }
            );    
            // contactPage
            //     .switchToParentFrame()
            //     .submit()
            // .section.partnerForm
            // .expect.element('@thanks').text.to.contain("Thank you for your submission");
        // })
        // 
        // console.log('after forcases test');
        // )
        // tests.withArrange('');
        // tests.withAct('');
        // tests.withAssert('')
        
    }
}
