import { Given } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page';
import MarketPage from '../pageobjects/home.page';

const pages = {
    login: LoginPage,
    market: MarketPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

Given(/^I am logged in SauceDemo$/, async () => {
    //toBeDisplayed() llama a isDisplayed() desde el punto de vista del expect
    await expect(pages.dashboard.userDropDown).toBeDisplayed()
});

Given(/^I am in the (\w+) screen$/, async (page) => {
    pages.market.open()
    switch (page) {
        case 'Market':
            await expect(browser).toHaveUrl('https://nft-staging.cflowapp.io/home')
            console.log('Reviso si estamos en Market screen')
            break;
    
        default:
            break;
    }
});