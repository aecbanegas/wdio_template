import Page from './page';
import 'dotenv/config'
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */

    //Pantalla sign in
    get errorNot() { return $('#name') }
    get signHeader() { return $('#userForm > div:nth-child(1) > h2') }
    get emailFld() { return $('#userName') }
    get passwordFld() { return $('#password') }
    get submitBtn() { return $('#login') }
    get signUpBtn() { return $('#newUser') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login(username, password) {
        if (username.includes("correct") || password.includes("correct")) {
            // console.log('User: ',process.env.KEY);
            // console.log('Password: ',process.env.PASSWORD)
            await this.emailFld.setValue(process.env.KEY);
            await this.passwordFld.setValue(process.env.PASSWORD);
        } else {
            await this.emailFld.setValue(username);
            await this.passwordFld.setValue(password);
        }
        await this.submitBtn.click();
    }

    //Verifyng error inputs or message
    async verifyErrors(message) {
            switch (message) {
                case "red input both":
                    //verifies both inputs are invalid
                    return ((await this.emailFld.getAttribute('class')).includes('is-invalid')&&(await this.passwordFld.getAttribute('class')).includes('is-invalid'));
                case "red input pass":
                    //verifies pass is invalid
                    return ((await this.passwordFld.getAttribute('class')).includes('is-invalid'));
                case "red input user":
                    //verifies user is invalid
                    return ((await this.emailFld.getAttribute('class')).includes('is-invalid'));
                default:
                    console.log("Message expected:",message);
                    let shown = await this.errorNot.getText();
                    console.log("Message shown:", shown)
                    console.log("Includes? ",(shown.includes(message)))
                    return (await this.errorNot.getText()).includes(message);
            }
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('login');
    }
}

export default new LoginPage();