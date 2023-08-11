 /// <reference types= "cypress"/>

 it.skip('Google Test', function(){
    cy.visit('https://google.com')
    cy.get('#APjFqb').type('Download Cypress')
    cy.wait(2000)
    cy.get('#APjFqb').type('{movetostart}')

    cy.get('#APjFqb').type('How to ')
    cy.get('#APjFqb').type('{enter}')
 })

 it.only('another test', () => {
    cy.visit('https://example.cypress.io/')
    cy.wait(2000)
    cy.contains('get').click()

    cy.get('#query-btn')
    .should('contain', 'Button')
    .should('have.class', 'query-btn')

 })





 it.skip('Login Test', ()=>{
    cy.visit('https://admin-demo.nopcommerce.com/login')
    cy.get('#Email').clear()
    cy.get('#Email').type('admin@yourstore.com')
    cy.get('#Password').clear()
    cy.get('#Password').type('admin')
    cy.get('.button-1').click()

    const path = '/admin'

    cy.url().then (($url) =>   {
        cy.log(cy.url ())

        if ($url.includes (path) ) {
            cy.log ("pass")
        }
        else
            cy.log("Fail")
    })
    
 })

