 /// <reference types= "cypress"/>


 it('Login Test', ()=>{
    cy.visit('https://admin-demo.nopcommerce.com/login')
    cy.get('#Email').should('be.visible').clear()
    cy.get('#Email').type('admin@yourstore1.com')
    cy.get('#Password').should('be.visible').clear()
    cy.get('#Password').type('admin')
    cy.get('.button-1').should('be.enabled').click()     

    cy.get('.message-error')
    .should('contain.text', 'Login was unsuccessful')



    // cy.url().should('include', 'com/admin')
    // cy.url().should('contain', 'com/admin')
    
 })


 it('another test', () => {
    cy.visit('https://example.cypress.io/')
    cy.wait(2000)
    cy.contains('get').click()

    cy.get('#query-btn')
    .should('contain', 'Button')
    .should('have.class', 'query-btn')
    .should('be.enabled')

 })




 it('another test', () => {
    cy.visit('https://example.cypress.io/')
    cy.wait(2000)
    cy.contains('get').click()

    let name = 'Muhyen'
    expect(name).to.be.equal('Muhyen')






/* 
    cy.get('#query-btn')
    .should('contain', 'Button')
    .should('have.class', 'query-btn') */

 })

 it.only('Simple Test', () => {

    assert.deepEqual({tea: 'Green', meal: 'Pizza'}, {tea: 'Green', meal: 'Pizza'})
    assert.notDeepEqual({tea: 'Green', meal: 'Pizza'}, {tea: 'Green', meal: 'Pizzaa'})
    assert.strictEqual(2, '2', 'Not stictly equal')


 })