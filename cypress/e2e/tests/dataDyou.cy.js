/// <reference types= "cypress"/>

describe('Convert Excel data to JSON', () => {
    beforeEach(function () {
        cy.fixture('xlsxData.json').then(function (data) {
            this.credentials = data;
        });
    });
    it('read data from excel', () => {

        cy.parseXlsx('cypress/fixtures/Login.xlsx').then((jsonData) => {

                const rowLength = Cypress.$(jsonData[0].data).length;

                cy.log(rowLength)


                for (let i = 1; i < rowLength; i++){
                    let value = jsonData[0].data[i]

                    cy.visit('https://admin-demo.nopcommerce.com/login')
                }




                var arr = jsonData[0].data;

                var keys = arr[0]; //columns names rows

                var newArr = arr.slice(1, arr.length) //data rows

                //make an object type variable
                var formatted = [],
                    data = newArr,
                    colmns = keys,
                    len = colmns.length;

                for (var i = 0; i < data.length; i++) {
                    var d = data[i],
                        o = {};

                    for (var j = 0; j < len; j++) {
                        o[colmns[j]] = d[j];
                    }
                    formatted.push(o)
                }
/*                 cy.log(keys);
                cy.log(newArr);
                console.log(formatted);
                cy.log(formatted); */
                cy.writeFile('cypress/fixtures/xlsxData.json',formatted)
            })
    })

})

describe('Reading Data from newly created JSON file', () => {

    beforeEach(function () {
        cy.fixture('xlsxData.json').then(function (data) {
            this.credentials = data;
        });
    });
    it('Use Login Data', () => {
        // Check if credentials are available before proceeding
        // if (!this.credentials) {
        //     throw new Error('Credentials data is not loaded. Make sure the fixture is loaded before running the test.');
        // }
        var count = Object.keys(this.credentials).length;
        cy.visit('https://admin-demo.nopcommerce.com/login')

        for (var i = 0; i < count; i++) {
            cy.log(this.credentials[i].Username);
            cy.log(this.credentials[i].Password);
            // Add additional test logic with the credentials here

            cy.get('#Email').clear()
            cy.get('#Email').type(this.credentials[i].Username)
            cy.get('#Password').clear()
            cy.get('#Password').type(this.credentials[i].Password)
        }
    });
});
