import Page from './page';
import 'dotenv/config';
import { getUserData } from '../services/apiresponses';
/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProfilePage extends Page {
    /**
     * define selectors using getter methods
     */

    //Pantalla sign in
    //This value may be validated with api
    get usernameLabel() {return $('#userName-value')}
    get logoutBtn() { return $('#submit')}
    get searchInput() {return $('#searchBox')}
    get searchBtn() { return $('#basic-addon2')}

    // Buttons at the end
    get booksButton() { return $('#gotoStore')}
    get deleteAccount() { return $('#submit')}
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    
    /**
     * overwrite specific options to adapt it to page object
     */

    async reviewProfile(){
        const response = await getUserData(process.env.KEY, process.env.PASSWORD);
        // const response = browser.getData();
        await this.usernameLabel.waitForExist();
        const username = await this.usernameLabel.getText();
        // console.log(response)
        // console.log("HEYA")
        return (username == response.username)
        // return false;
    }

    open() {
        return super.open('profile');
    }
}

export default new ProfilePage();