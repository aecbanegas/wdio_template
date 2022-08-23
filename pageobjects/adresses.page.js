import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page oisi
 */
class AdressPage extends Page {
    /**
     * define selectors using getter methods
     */
    get homeBtn() { return $('#navbar > div.navbar-nav.mr-auto > a.nav-item.nav-link.active') }
    get signinBtn() { return $('#sign-in') }
    //Header Elements visible when logged
    get adressesBtn() { return $('#navbar > div.navbar-nav.mr-auto > a:nth-child(2)') }
    get signoutBtn() { return $('#navbar > div.navbar-nav.mr-auto > a:nth-child(3)') }
    get currentUserTxt() { return $('#navbar > div:nth-child(2) > span') }

    //pantalla address
    get addressHeader() { return $('body > div > h2') }
    get newAddressBtn() { return $('body > div > a') }
    //recupero cada fila
    get tableBody() { return $$('body > div > table > tbody') }

    //Pantalla new address /address/new
    get newAddressHeader() { return $('body > div > h2') }
    get firstNameInput() { return $('#address_first_name') }
    get lastNameInput() { return $('#address_last_name') }
    get address1Input() { return $('#address_street_address') }
    get address2Input() { return $('#address_secondary_address') }
    get cityInput() { return $('#address_city') }
    //TODO verificar otra forma de manejar un select/combobox
    get selectState() { return $('#address_state') }
    get possibleStates() { return $$('#address_state') }
    get zipInput() { return $('#address_zip_code') }
    get countryUSRadio() { return $('#address_country_us') }
    get countryCARadio() { return $('#address_country_canada') }
    get birthdayDate() { return $('#address_birthday') }
    get colorSelect() { return $('#address_color') }//el resultado es en base a #FEE4F9
    get ageInput() { return $('#address_age') }
    get websiteInput() { return $('#address_website') }
    get uploadPicture() { return $('#address_picture') }
    get phoneInput() { return $('#address_phone') }
    get climbingInterestCheck() { return $('#address_interest_climb') }
    get dancingInterestCheck() { return $('#address_interest_dance') }
    get readingInterestCheck() { return $('#address_interest_read') }
    get noteTxtArea() { return $('#address_note') }
    get submitBtn() { return $('#new_address > div.form-group.row.justify-content-center > input') }
    get listBtn() { return $('body > div > a') }
    get errorContainer() { return $('#error_explanation') }
    get errorList() { return $('#error_explanation > ul') }
    /*
    5 errors prohibited this address from being saved:
        First name can't be blank
        Last name can't be blank
        Address1 can't be blank
        City can't be blank
        Zip code can't be blank
    */
    //Address show screen
    get firstNameLabel() { return $('body > div > p:nth-child(1) > span.col.offset-1.offset-sm-0') }
    get lastNameLabel() { return $('body > div > p:nth-child(2) > span.col.offset-1.offset-sm-0') }
    get address1Label() { return $('body > div > p:nth-child(3) > span.col.offset-1.offset-sm-0') }
    get address2Label() { return $('body > div > p:nth-child(4) > span.col.offset-1.offset-sm-0') }
    get cityLabel() { return $('body > div > p:nth-child(5) > span.col.offset-1.offset-sm-0') }
    get stateLabel() { return $('body > div > p:nth-child(6) > span.col.offset-1.offset-sm-0') }
    get zipLabel() { return $('body > div > p:nth-child(7) > span.col.offset-1.offset-sm-0') }
    get countryLabel() { return $('body > div > p:nth-child(8) > span.col.offset-1.offset-sm-0') }
    get birthdayLabel() { return $('body > div > p:nth-child(9) > span.col.offset-1.offset-sm-0') }
    get colorBlock() { return $('body > div > p:nth-child(10) > span:nth-child(2)') }//el resultado es en base a #FEE4F9
    get ageLabel() { return $('body > div > p:nth-child(11) > span.col.offset-1.offset-sm-0') }
    get websiteLabel() { return $('body > div > p:nth-child(12) > span.col.offset-1.offset-sm-0') }
    get phoneLabel() { return $('body > div > p:nth-child(13) > span.col.offset-1.offset-sm-0') }
    get climbingInterestLabel() { return $('body > div > p:nth-child(14) > span.col.offset-1.offset-sm-0') }
    get dancingInterestLabel() { return $('body > div > p:nth-child(15) > span.col.offset-1.offset-sm-0') }
    get readingInterestLabel() { return $('body > div > p:nth-child(16) > span.col.offset-1.offset-sm-0') }
    get noteLabel() { return $('body > div > p:nth-child(17) > span.col.offset-1.offset-sm-0') }
    get editLink() {return $('body > div > div > a:nth-child(1)')}
    get listLink() {return $('body > div > div > a:nth-child(2)')}
    //TODO Destroy Addres option
    
    open() {
        return super.open('addresses');
    }

}

export default new AdressPage();
