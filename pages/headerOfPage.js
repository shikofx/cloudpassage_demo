module.exports = {
    sections: {
        headToolbar: {
            selector: ".nav.nav--toolbar",
            elements:{
                telephone: ".menu-item a[href *= 'tel:']",
                contact: ".menu-item a[href *= 'company/contact/']", 
                login: ".menu-item a[href *= 'login']",
                support: ".menu-item a[href *= 'support']",
                api: ".menu-item a[href *= 'api-doc']",
                searchform: "#s",
            }
        },

        headMenu: {
            selector: "#menu-main-nav",
            elements:{
                product: ".menu-item a[href *= 'product']",
                pricing: ".menu-item a[href *= 'pricing']", 
                solutions: ".menu-item a[href *= 'solutions']",
                customers: ".menu-item a[href *= 'customers']",
                blog: ".menu-item a[href *= 'blog.']",
                resources: ".menu-item a[href *= 'resources']",
                company: ".menu-item a[href *= 'company']",
                demoButton: ".button a[href *= 'gotowebinar']",
                testButton: ".button a[href *= 'sandbox']",
            }
        },
    },

    
    elements: {
        logo: ".logo"
    }
}