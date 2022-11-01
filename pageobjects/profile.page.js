import Page from './page';
import 'dotenv/config';
import * as EC from 'wdio-wait-for';
// import { getUserData } from '../services/apiresponses';
/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProfilePage extends Page {
    /**
     * define selectors using getter methods
     */

    //Pantalla sign in
    //This value may be validated with api
    get usernameLabel() { return $('#userName-value') }
    get logoutBtn() { return $('#submit') }
    get searchInput() { return $('#searchBox') }
    get searchBtn() { return $('#basic-addon2') }

    //Books listed
    get deleteBookBtns() { return $$('#delete-record-undefined') }
    get bookTitles() { return $$('.action-buttons .mr-2') }
    get reactTable() { return $('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.profile-wrapper > div.ReactTable.-striped.-highlight') }

    // Buttons at the end
    get booksButton() { return $('#gotoStore') }
    get deleteAccount() { return $('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.profile-wrapper > div.mt-2.buttonWrap.row > div.text-center.button .btn') }
    get deleteAllBooksBtn() { return $('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.profile-wrapper > div.mt-2.buttonWrap.row > div.text-right.button.di .btn') }

    //Delete Modal
    get modalContent() { return $('body > div.fade.modal.show > div > div') }
    //body > div.fade.modal.show > div > div
    get modalOkBtn() { return $('#closeSmallModal-ok') }
    //#closeSmallModal-ok
    get modalCancelBtn() { return $('#closeSmallModal-cancel') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    /**
     * overwrite specific options to adapt it to page object
     */

    async reviewProfile() {
        // const response = await getUserData(process.env.KEY, process.env.PASSWORD);
        const response = await browser.getData('/services/myDataBase');
        await this.usernameLabel.waitForExist();
        const username = await this.usernameLabel.getText();
        // console.log(response)
        // console.log("HEYA")
        // console.log(response);
        // console.log(username);
        return (username == response.username);
        // return false;
    }

    async reviewDeleteBook() {
        const response = await browser.getData('/services/myDataBase');
        const booksAPI = response.books;
        const books = await this.bookTitles;
        return ((booksAPI.length == 0) && (books.length == 0));
    }

    async reviewAddBook() {
        const response = await browser.getData('/services/book');
        // console.log('Response review add: ',response)
        const array1 = [response.book];
        // console.log('En un arreglo: ',array1);
        const elements = await this.bookTitles;
        const array2 = [await elements[0].getText()];
        return (await this.arrayComparer(array1, array2));
    }

    async elementsToText(array) {
        let result = [];
        for (let i = 0; i < array.length; i++) {
            const element = await (array[i]).getText();
            result.push(element)
        }
    }

    async arrayComparer(array1, array2) {
        //compares two arrays
        for (let i = 0; i < array1.length; i++) {
            const element = array1[i];
            if (!array2.includes(element)) return false;
        }
        return true;
    }

    async deleteBook() {
        //retrieve all delete buttons
        await this.deleteAllBooksBtn.scrollIntoView();
        await this.deleteAllBooksBtn.click();
        //Modal for delete
        await this.modalContent.waitForExist();
        await this.modalOkBtn.click();
        //Alert from browser
        // await browser.waitUntil(alertIsPresent());
        await browser.waitUntil(await EC.alertIsPresent(), { timeout: 5000, timeoutMsg: 'Failed, after waiting for the alert to be present' })
        if (browser.isAlertOpen()) {
            console.log('Se muestra la alerta')
            const alertText = await browser.getAlertText();
            if (!alertText.includes('deleted')) {
                await browser.dismissAlert();
                return false;
            } else {
                console.log('Texto de alerta: ',alertText);
                await browser.acceptAlert();
                console.log('Se cerro?')
                return true;
            }
        } else {
            console.log('no se muestra la alerta')
            return false;
        }
    }

    async logOut() {
        await this.logoutBtn.scrollIntoView();
        await this.logoutBtn.click();
    }

    async toBookStore() {
        await this.booksButton.scrollIntoView();
        await this.booksButton.click();
    }

    open() {
        return super.open('profile');
    }
}

export default new ProfilePage();