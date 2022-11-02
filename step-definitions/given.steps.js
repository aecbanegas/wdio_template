import { Given } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page';
import profilePage from '../pageobjects/profile.page';
import booksPage from '../pageobjects/books.page';

const pages = {
    login: LoginPage,
    profile: profilePage,
    books: booksPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    const url = await browser.getUrl();
    if (url != `https://demoqa.com/${page}`) {
        await pages[page].open();
    }
    await expect(await pages[page].interfaceAsserts()).toBeTruthy();

});