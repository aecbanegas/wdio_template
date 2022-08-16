import Page from './page';
import 'dotenv/config'
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get homeBtn() { return $('#navbar > div.navbar-nav.mr-auto > a.nav-item.nav-link.active') }
    get signinBtn() { return $('#sign-in') }
    //Header Elements visible when logged
    get adressesBtn() { return $('#navbar > div.navbar-nav.mr-auto > a:nth-child(2)') }
    get signoutBtn() { return $('#navbar > div.navbar-nav.mr-auto > a:nth-child(3)') }
    get currentUserTxt() { return $('#navbar > div:nth-child(2) > span') }

    //Pantalla sign in
    get errorNot() { return $('body > div > div.alert.alert-notice') }
    get signHeader() { return $('#clearance > h2') }
    get emailFld() { return $('#session_email') }
    get passwordFld() { return $('#session_password') }
    get submitBtn() { return $('#clearance > div > div > form > div:nth-child(5) > input') }
    get signUpLink() { return $('#clearance > div > div > form > div:nth-child(6) > a') }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login(username, password) {
        if (username.includes("correct") || password.includes("correct")) {
            console.log('User: ',process.env.KEY);
            console.log('Password: ',process.env.PASSWORD)
            await this.emailFld.setValue(process.env.KEY);
            await this.passwordFld.setValue(process.env.PASSWORD);
        } else {
            await this.emailFld.setValue(username);
            await this.passwordFld.setValue(password);
        }
        await this.submitBtn.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('sign_in');
    }
}

export default new LoginPage();