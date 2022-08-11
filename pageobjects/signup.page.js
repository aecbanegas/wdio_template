import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page oisi
 */
class SignUpPage extends Page {
    /**
     * define selectors using getter methods
     */
    get homeBtn() { return $('#navbar > div.navbar-nav.mr-auto > a.nav-item.nav-link.active') }
    get signinBtn() { return $('#sign-in') }
    //Header Elements visible when logged
    get adressesBtn() { return $('#navbar > div.navbar-nav.mr-auto > a:nth-child(2)') }
    get signoutBtn() { return $('#navbar > div.navbar-nav.mr-auto > a:nth-child(3)') }
    get currentUserTxt() { return $('#navbar > div:nth-child(2) > span') }

    //Pantalla sign up
    get signHeader() { return $('#clearance > h2') }
    get emailFld() { return $('#user_email') }
    get passwordFld() { return $('#user_password') }
    get submitBtn() { return $('#new_user > div:nth-child(5) > input') }
    get signInLink() { return $('#new_user > div:nth-child(6) > a') }

    open() {
        return super.open('');
    }

}

export default new SignUpPage();
