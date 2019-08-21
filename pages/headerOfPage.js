module.exports = {
    sections: {
        headToolbar: {
            selector: ".nav.nav--toolbar",
            elements:{
                telephone: {
                    selector: ".menu-item a[href *= 'tel:']"
                },
                contact: {
                    selector: ".menu-item a[href *= 'company/contact/']"
                }, 
                login: {
                    selector: ".menu-item a[href *= 'login']"
                },
                support: {
                    selector: ".menu-item a[href *= 'support']"
                },
                api: {
                    selector: ".menu-item a[href *= 'api-doc']"
                },
                searchform: {
                    selector: "#s"
                },
            }
        },

        headMenu: {
            selector: "#menu-main-nav",
            elements:{
                product: {
                    selector: ".menu-item a[href *= 'product']",
                },
                pricing: {
                    selector: ".menu-item a[href *= 'pricing']"
                }, 
                solutions: {
                    selector: ".menu-item a[href *= 'solutions']"
                },
                customers: {
                    selector: ".menu-item a[href *= 'customers']"
                },
                blog: {
                    selector: ".menu-item a[href *= 'blog.']"
                },
                resources: {
                    selector: ".menu-item a[href *= 'resources']"
                },
                company: {
                    selector: ".menu-item a[href *= 'company']"
                },
                demoButton: {
                    selector: ".button a[href *= 'gotowebinar']"
                },
                testButton: {
                    selector: ".button a[href *= 'sandbox']"
                },
            }
        },
    },

    
    elements: {
        logo: {
            selector: ".logo"
        },
    }
}