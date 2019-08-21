var contactPage;
var partnerData;

module.exports = {
    
    before: function(browser){
        partnerData = browser.globals.partnerData;
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
    'send valid partner data:' () {
        
        contactPage
            .fillPartnerForm(partnerData)
            .switchToRecaptchaFrame()
            .recaptchaSelect()
        .expect.element('@recaptcha').to.be.selected;

        contactPage
            .switchToParentFrame()
            .submit()
        .section.partnerForm
        .expect.element('@thanks').text.to.contain("Thank you for your submission");
    }
}