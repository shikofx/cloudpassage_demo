var DataDrivenTest = require('nightwatch-data-driven').default;
// require('nightwatch-data-driven').DataDrivenTest;
var contactPage;
var partnerData = require('../../data/partnerData');
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

        new DataDrivenTest(browser, function(data, name){
            console.log('Into DataDrivenTest');
            this.contactPage
                .fillPartnerForm(data)
                .switchToRecaptchaFrame()
                .recaptchaSelect();
            this.browser.page.workspace().assertIsCurrentPage(name);
            browser.expect.element('@recaptcha').to.be.selected;

            contactPage
                .switchToParentFrame()
                .submit()
            .section.partnerForm
            .expect.element('@thanks').text.to.contain("Thank you for your submission");
        })
        .forCases({
            "1.": {   
                    firstName:      partnerData.firstName, 
                    lastName:       partnerData.lastName,
                    email:          partnerData.email,
                    phone:          partnerData.phone,
                    companyName:    partnerData.companyName,
                    comments:       partnerData.comments,
                    department:     partnerData.department
                }
             }, 'name1' );
        console.log('after forcases test');
        }

        
    }
