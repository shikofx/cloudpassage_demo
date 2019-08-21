var mainPage;
var contactPage;
var companyPage;
var headerOfPage;
var footerOfPage;

var verifyContactPageContent = (contactPage) => {
    contactPage
        .assert.urlEquals(`${contactPage.url}`, 'Contact page: testing of URL of Contact Page')
        .verify.elementPresent('@map', 'Contact page: testing of map presence')
        .verify.containsText('@about', 'CloudPassage, Inc.', 'Contact page: testing of About block content')
    .section.contactInfo
        .verify.containsText('@header', 'Contact us by phone, email, or in person', 'Contact page: testin of content')
        .perform();

    contactPage
        .assert.elementPresent('@submitButton', 'Contact page: testing of Partner Form presence');
}

module.exports = {

    before (browser) {
        mainPage = browser.page.mainPage();
        headerOfPage = browser.page.headerOfPage();
        contactPage = browser.page.contactPage();
        companyPage = browser.page.companyPage();
        footerOfPage = browser.page.footerOfPage();
    },

    beforeEach : function() {
        mainPage.navigate();
    },

    afterEach : function() {
        console.log('..................Test finished!')
    },

    after (browser) {
        browser.end()
    },
    
    
    '@tags': ['navigation', 'smoke', 'positive', 'contact'],
    'go to contact page with head toolbar navigation' : function () {
        headerOfPage.section.headToolbar
                .waitForElementVisible('@contact', null, null, 'Header: wait for toolbar will be visible')
                .click('@contact');
        
        verifyContactPageContent(contactPage);
    },

    'go to contact page with menu navigation' : function () {
        headerOfPage.section.headMenu
            .waitForElementVisible('@company', 3000, null, null, 'Header: wait for menu  will be visible')
            .click('@company')
            
        companyPage.section.submenu
            .waitForElementVisible('@contact', 3000, null, null, 'Company page: wait for navigation menu  will be visible')
            .click('@contact');

        verifyContactPageContent(contactPage);
    }, 
    
    'go to contact page with footer site map navigation' : function() {
        footerOfPage.section.sitemap
            .waitForElementVisible('@contact', 3000, null, null, 'Footer: wait for footer  will be visible')
            .click('@contact');
        
        verifyContactPageContent(contactPage);
    },

    'go to contact page with footer button menu navigation' : function() {
        footerOfPage.section.buttonMenu
            .waitForElementVisible('@contact', 3000, null, null, 'Footer: wait for footer  will be visible')
            .click('@contact');

        verifyContactPageContent(contactPage);  
    },

    'go to contact page with footer navigation' : function () {
        footerOfPage.section.footer
            .waitForElementVisible('@contact', 3000, null, null, 'Footer: wait for footer  will be visible')
            .click('@contact');
        
        verifyContactPageContent(contactPage);  
    } 
}