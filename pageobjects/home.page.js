import Page from './page';
/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    //Header elements, available on all screens
    get homeBtn() { return $('#navbar > div.navbar-nav.mr-auto > a.nav-item.nav-link.active') }
    get signinBtn() { return $('#sign-in') }
    //Header Elements visible when logged
    get adressesBtn() { return $('#navbar > div.navbar-nav.mr-auto > a:nth-child(2)') }
    get signoutBtn() { return $('#navbar > div.navbar-nav.mr-auto > a:nth-child(3)') }
    get currentUserTxt() { return $('#navbar > div:nth-child(2) > span') }

    //Home Elements
    get homeHeader() { return $('body > div > div > h1') }
    get homeSubtitle() { return $('body > div > div > h4') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async checkNfts() {
        let nfts = await api.getMarketPlace('ASC', 1, 30)
        let nftsCflow = await this.nftElements()
        console.log("Backend= ", nfts)
        console.log("Frontend= ", nftsCflow)
        return (nfts.length == nftsCflow.length)
    }

    async charging() {
        let validation = this.searchButton.isDisplayed()
        do {
            browser.pause(5000)
        } while (validation);
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('');
    }
}

export default new HomePage();
