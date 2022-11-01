import { Then } from '@wdio/cucumber-framework';
import booksPage from '../pageobjects/books.page';
import LoginPage from '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';

const pages = {
    login: LoginPage,
    profile: ProfilePage,
    books: booksPage
}

Then(/^I should see ([^\"]*) screen$/, async (screen)  => {
    switch (screen) {
        case 'profile':
            // console.log("In this screen",screen);
            await expect(browser).toHaveUrl('https://demoqa.com/profile');
            // console.log(await browser.getUrl());
            expect(await pages.profile.reviewProfile()).toBeTruthy();
            // console.log("Despues del be truthy")
            break;
        // case 'login':
        //     await expect(browser).toHaveUrl('https://demoqa.com/login');
        //     break;
        default:
            await expect(browser).toHaveUrl(`https://demoqa.com/${screen}`)
            break;
    }
});

//LOGIN SECTION
Then(/^I should see a flash message saying (.*)$/, async (message) => {
    //await expect(pages.login.errorNot).toHaveTextContaining(message);
    await expect(pages.login.verifyErrors(message)).toBeTruthy();
});

//PROFILE SECTION

//BOOKS SECTION
Then(/^I am able to see the results of my search by (.*)$/, async (book) =>{
    expect(await pages.books.searchBook(book)).toBeTruthy();
    await pages.books.searchFor(' ');
});

Then(/^I should see the book at my personal library$/, async()=>{
    // await pages.books.toProfile();
    // console.log("Despues de toprofile")
    await pages.profile.open();
    expect(await pages.profile.reviewAddBook()).toBeTruthy();
});

Then(/^I should see the book is not more at my personal library$/, async () => {
    console.log('Andtes de reviewDeleteBook')
    expect(await pages.profile.reviewDeleteBook()).toBeTruthy();
});