import { When } from '@wdio/cucumber-framework';
import booksPage from '../pageobjects/books.page';
import LoginPage from '../pageobjects/login.page';
import profilePage from '../pageobjects/profile.page';

const pages = {
    login: LoginPage,
    profile: profilePage,
    books: booksPage
}

//LOGIN
When(/^I login with \'([^\"]*)\' and \'([^\"]*)\'$/, async (username, password) => {
    await pages.login.login(username, password);
});

//LOGOUT
When(/^I log out$/, async () => {
    await pages.profile.logOut();
});

//BOOKS SECTION
When(/^I search for (\w+)$/, async (book) => {
    await pages.books.searchFor(book);
});

When(/^I add a book to my personal library$/, async () => {
    await pages.books.addBook();
});

When(/^I delete a book from my personal library$/, async () => {
    await pages.profile.deleteBook();
});

When(/^I click on book store button$/, async () => {
    await pages.profile.toBookStore();
});