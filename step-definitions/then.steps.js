const { Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pages/login.page');
const MarketPage = require('../pages/home.page');

const pages = {
    login: LoginPage,
    market: MarketPage
}

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(pages.login.errorNotification).toHaveTextContaining(message);
});

Then(/^I should see dashboard screen$/, async ()  => {
    await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
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