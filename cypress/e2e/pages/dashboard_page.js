/// <reference types= "cypress"/>


class DashboardPage {

    elements = {

        pageTitle : () => cy.get('.content-header > h1')

    }


}


export default new DashboardPage();
