/// <reference types= "cypress"/>

import login_page from "../pages/login_page";
import dashboard_page from "../pages/dashboard_page";


describe('Test related to Login', () => {

    beforeEach(function () {
        cy.visit('https://admin-demo.nopcommerce.com/login')

    })

    it('Login Test valid', () => {
        login_page.writeUserName('admin@yourstore.com');
         login_page.writePassword('admin');
         login_page.clickLoginButton();

         dashboard_page.elements.pageTitle()
         .should('contain', 'Dashboard')

    })


    it('Login Test invalid ', () => {
        login_page.writeUserName('pakistan@gmail.com');
         login_page.writePassword('abc12345');
         login_page.clickLoginButton();

         login_page.elements.errorMessageInvalid()
         .should('contain', 'Login was unsuccessful')
         
    })




    it('Login Test BLANK', () => {
        login_page.writeUserName(' ');
        login_page.writePassword(' ');
         login_page.clickLoginButton()

         login_page.elements.errorMessageBlank()
         .should('contain', 'Please enter your email')
    })


    it('Login Test REMEMBER ME', () => {
        login_page.writeUserName('admin@yourstore.com');
         login_page.writePassword('admin');
         login_page.clickRememberButton(); 
         login_page.clickLoginButton();

         dashboard_page.elements.pageTitle()
         .should('contain', 'Dashboard')
    })







    it('Login Test v & i', () => {
        login_page.writeUserName('admin@yourstore.com');
         login_page.writePassword('admin1');
         login_page.clickLoginButton();

         login_page.elements.errorMessageInvalid()
         .should('contain', 'Login was unsuccessful')

    })


    it('Login Test i & v', () => {
        login_page.writeUserName('admin1@yourstore.com');
         login_page.writePassword('admin');
         login_page.clickLoginButton();

         login_page.elements.errorMessageInvalid()
         .should('contain', 'Login was unsuccessful')
    })


})


