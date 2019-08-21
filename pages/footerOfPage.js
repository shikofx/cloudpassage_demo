var contactElement = {
    selector: "//a[text()='Contact']",
    locateStrategy: 'xpath'
};

module.exports = {
    sections:{
        sitemap:{
            selector: ".container--footer-sitemap",
            elements: {
                contact: contactElement
            }
        },

        buttonMenu:{
            selector: ".nav--footer-contact",
            elements: {
                contact: contactElement
            }
        },

        footer:{
            selector: ".nav--footer",
            elements:{
                contact: contactElement
            }
        }
    },
}