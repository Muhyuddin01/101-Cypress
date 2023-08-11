/// <reference types= "cypress"/>


class LoginPage {

    elements = {
        usernameInput: () => cy.get('#Email'),
        passwordInput: () => cy.get('#Password'),
        buttonClick: () => cy.xpath("//button[normalize-space()='Log in']"),
        errorMessageInvalid: () => cy.get('.message-error'),
        errorMessageBlank: () => cy.get('#Email-error'),
        rememberMe: () => cy.get('#RememberMe')

    }

    writeUserName(username) {
        this.elements.usernameInput()
            .clear();
        this.elements.usernameInput()
            .type(username);
    }

    writePassword(password) {
        this.elements.passwordInput()
            .clear();
        this.elements.passwordInput()
            .type(password);
    }

    clickLoginButton() {
        this.elements.buttonClick().click();
    }

/*     viewErrorMessageIn() {
        this.elements.errorMessageInvalid();
    }

    viewErrorMessageB() {
        this.elements.errorMessageBlank();
    } */

    clickRememberButton() {
        this.elements.rememberMe().click()
    }



}

export default new LoginPage();



