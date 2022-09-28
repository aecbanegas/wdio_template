import Page from './page';
import 'dotenv/config'
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
    get logoutBtn() { return $('#userName-value')}
    get searchInput() {return $('#searchBox')}
    get searchBtn() { return $('#basic-addon2')}
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    
    /**
     * overwrite specific options to adapt it to page object
     */

    async reviewProfile(){
        const response = await getUserData(process.env.KEY,process.env.PASSWORD);
        const username = await this.usernameLabel.getValue();
        console.log(response)
        console.log("HEYA")
        return (username == response.username)
    }

    open() {
        return super.open('profile');
    }
}

export default new ProfilePage();