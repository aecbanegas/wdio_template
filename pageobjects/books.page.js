import Page from './page';
import 'dotenv/config'
import * as EC from 'wdio-wait-for';
/**
 * sub page containing specific selectors and methods for a specific page
 */
class BooksPage extends Page {
    /**
     * define selectors using getter methods
     */

    //Returns book titles
    //General books view
    get bookTitles() { return $$('.action-buttons .mr-2 a') }
    get searchBox() { return $('#searchBox') }
    get logOutButton() { return $('#submit') }
    get usernameLabel() { return $('#userName-value') }

    //Individual books screen
    // get informationWrapper() {return $('')}
    get authorWrapper() { return $('#author-wrapper') }
    get backBookstoreBtn() { return $('.fullButtonWrap .text-left.fullButton') }
    get addCollectionBtn() { return $('.fullButtonWrap .text-right.fullButton') }

    get profileBtn() { return $('#item-3') }

    async searchFor(book) {
        await this.searchBox.setValue(book);
        await this.bookTitles;
    }

    async searchBook(searchTerm) {
        //This function takes the information retrieved from the api
        //and then compares the search on the app and the array retrieved
        const response = await browser.getData('/services/Books');
        const array = await this.bookTitles;
        let arrayTexts = await this.elementsToText(array);
        const results = this.elementInArray(searchTerm, response)
        return (await this.arrayComparer(results, arrayTexts));
    }

    async elementsToText(array) {
        let result = [];
        for (let i = 0; i < array.length; i++) {
            const element = await (array[i]).getText();
            result.push(element)
        }
    }

    async elementInArray(term, array) {
        //verify the search tearm on response and return an array with the common titles
        let answers = [];
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            //string.indexOf(substring) !== -1
            if ((term.toLowerCase()).indexOf(element.title.toLowerCase()) !== -1) {
                answers.push((await element.title))
            }
        }
        return answers;
    }

    async arrayComparer(array1, array2) {
        //compares two arrays
        for (let i = 0; i < array1.length; i++) {
            const element = array1[i];
            if (!array2.includes(element)) return false;
        }
        return true;
    }

    async addBook() {
        //this is on library screen
        const books = await this.bookTitles;
        // console.log('Este es el arreglo de libros: ',books);
        const random = Math.floor(Math.random() * books.length);
        // console.log('Este es el numero aleatorio:', random)
        // console.log('Este es el libro elegido al azar: ',books[random])
        await browser.pushData("/services/book", { 'book': (await books[random].getText()) })
        await books[random].scrollIntoView();
        await books[random].click();
        //working in book individual screen
        // await this.informationWrapper.waitForExist();
        await this.addCollectionBtn.scrollIntoView();
        await this.addCollectionBtn.click();
        //verificar la alerta en el browser
        // await browser.waitUntil(alertIsPresent());
        await browser.waitUntil(await EC.alertIsPresent(), { timeout: 5000, timeoutMsg: 'Failed, after waiting for the alert to be present' })
        const alertText = await browser.getAlertText();
        if (!alertText.includes('added')) {
            await browser.dismissAlert();
            return false;
        } else {
            // console.log(alertText);
            await browser.acceptAlert();
            // console.log('Se acepto la alerta.')
            await this.backBookstoreBtn.click();
            return true;
        }
    }

    async interfaceAsserts() {
        await this.usernameLabel.waitForDisplayed()
        const textItems = (await this.usernameLabel.isDisplayed()) || (await this.authorWrapper.isDisplayed());
        const actionItems = ((await this.searchBox.isDisplayed()) && (await this.logOutButton.isDisplayed()));
        return (textItems || actionItems);
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('books');
    }
}

export default new BooksPage();