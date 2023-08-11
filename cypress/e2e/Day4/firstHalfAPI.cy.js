/// <reference types= "cypress"/>

describe('All API request', () => {

    it.skip('1- Get all Students', () => {
        cy.request('GET', 'http://localhost:3000/Student')
            .then((Response) => {
                expect(Response.status).to.equal(200);
                cy.log(Response.body)

            })
    })
    it.skip('2- Create New Student', () => {
        const reqBody = {
            "Name": "Ding",
            "CPA": "3.4"
        }
        cy.request('POST', 'http://localhost:3000/Student', reqBody)
            .then((Response) => {
                expect(Response).to.have.property('status', 201);
                expect(Response.body).to.not.be.null;
                console.log(Response.body);

                expect(Response.body.Name).to.equal('Ding')


            })
    })
    it.skip('2A- Create New Student-another method', () => {
        cy.request({
            'method': 'POST',
            'url': 'http://localhost:3000/Student',
            Headers:
            {
                'Content-Type': 'application/json'
            },
            body:
            {
                "Name": "LAST ENTRY 202",
                "CPA": "41.0"
            }
        })
            .then((Response) => {
                expect(Response).to.have.property('status', 201);
                expect(Response.body).to.not.be.null;
                console.log(Response.body);

                expect(Response.body.Name).to.equal('LAST ENTRY 202')


            })
    })
    it.skip('3- Partial Update Student with "PUT"', () => {

        cy.request({
            'method': 'PUT',
            'url': 'http://localhost:3000/Student/31',
            Headers:
            {
                'Content-Type': 'application/json'
            },
            body:
            {
                "Name": "AHGDAH DKADGAKHDG AGDK A ",

            }
        })
    })
    it.skip('4- Partial Update Student with "PATCH"', () => {

        cy.request({
            'method': 'PATCH',
            'url': 'http://localhost:3000/Student/32',
            Headers:
            {
                'Content-Type': 'application/json'
            },
            body:
            {
                "Name": "zzzzZZZZZZZZZZZZZZzzzz",

            }
        })
    })


    it.skip('5 - Delete Student', () => {
        cy.request({
            'method': 'DELETE',
            'url': 'http://localhost:3000/Student/26',
            Headers:
            {
                'Content-Type': 'application/json'
            }

        })
            .then((Response) => {
                expect(Response).to.have.property('status', 200);
                expect(Response.status).to.be.eq(200);
                expect(Response.body).to.not.be.null;
                console.log(Response.body);
            })

    })

    it.skip('6 - Auth key adding with "PATCH"', () => {

        cy.request({
            'method': 'PATCH',
            'url': 'http://localhost:3000/Student/32',
            Headers:
            {
                'Content-Type': 'application/json'
            },
            body:
            {
                "Name": "zzzzZZZZZZZZZZZZZZzzzz",

            },
            auth:
            {
                'username' : 'abc@gmail.com',
                'password' : '12345678'
            }
        })
    })




})
