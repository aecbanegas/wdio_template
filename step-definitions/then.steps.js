import { Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';

const pages = {
    login: LoginPage,
    profile: ProfilePage
}

Then(/^I should see ([^\"]*) screen$/, async (screen)  => {
    switch (screen) {
        case 'profile':
            console.log("In this screen",screen);
            await expect(browser).toHaveUrl('https://demoqa.com/profile');
            // console.log(await browser.getUrl());
            expect(await pages.profile.reviewProfile()).toBeTruthy();
            console.log("Despues del be truthy")
            break;
        default:
            break;
    }
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    //await expect(pages.login.errorNot).toHaveTextContaining(message);
    await expect(pages.login.verifyErrors(message)).toBeTruthy()
});

//Then I should see dashboard of a non-logged user
Then(/^I should see dashboard of a non-logged user$/, async ()  => {
    //Verifica browser de dashboard y la aparicion del boton de log in y sign up
    // await expect(browser).toHaveUrl('https://myanimelist.net/')
    // await expect(pages.dashboard.loginButton).toBeDisplayed();
    // await zexpect(pages.dashboard.signUpButton).toBeDisplayed();
});

Then(/^I should see (\w+) elements on screen$/, async (page) => {
    switch (page) {
        case 'Market':
            // await pages.market.charging()
            await expect(await pages.market.checkNfts()).toBeTruthy()
            break;
    
        default:
            break;
    }
});