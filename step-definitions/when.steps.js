const { When } = require('@wdio/cucumber-framework');

const LoginPage = require('../pages/login.page');
const MarketPage = require('../pages/home.page');

const pages = {
    login: LoginPage,
    market: MarketPage
}

When(/^I login with \'([^\"]*)\' and \'([^\"]*)\'$/, async (username, password) => {
    await pages.login.login(username,password);
});
//When I log out
When(/^I log out$/, async () => {
    await pages.dashboard.userDropDown.click();
    //obtener todos los objetos de la lista
    const dropList = await pages.dashboard.dropDownList;
    //verificar el contenido de dropList
    console.log(dropList);
    // dropList.forEach((element)=>{
    //     expect(element).toBeDisplayed();
    // });
    // await dropList[dropList.length - 1].click();
});

When(/^the screen loads all is elements at (\w+) screen$/, async (page) => {
    // TODO still pending funnction for  reviewing al elements shown
    switch (page) {
        case 'Market':
            // await pages.market.charging()
            await expect(pages.market.nftElements).toBeDisplayed()
            break;
    
        default:
            break;
    }
});