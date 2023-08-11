/// <reference types= "cypress"/>


describe('All Login Tests', () => {

    beforeEach(function () {
        cy.visit('https://admin-demo.nopcommerce.com/login')

    })

    afterEach(function () {
        cy.log('Test has ended')
    })

    it('1 Login with Valid credentials Test', () => {
        cy.get('#Email').clear()
        cy.get('#Email').type('admin@yourstore.com')
        cy.get('#Password').clear()
        cy.get('#Password').type('admin')
        cy.get('.button-1').click()
    })


    it('2 Login with InValid credentials Test', () => {
        cy.get('#Email').clear()
        cy.get('#Email').type('admin@yourstoree.com')
        cy.get('#Password').clear()
        cy.get('#Password').type('admin')
        cy.get('.button-1').click()

        cy.get('.message-error')
            .should('contain.text', 'Login was unsuccessful')
    })



    it('3 Login with empty credentials Test', () => {
        cy.get('#Email').clear()
        cy.get('#Email')
        cy.get('#Password').clear()
        cy.get('#Password')
        cy.get('.button-1').click()

        cy.get('#Email-error')
            .should('contain', 'Please enter your email')


        cy.get('#Email').clear()
        cy.get('#Email').type('admin@yourstoree.com')

        cy.get('#Password').clear()
        cy.get('#Password')
        cy.get('.button-1').click()

        cy.get('.message-error')
            .should('contain.text', 'Login was unsuccessful')

    })




})