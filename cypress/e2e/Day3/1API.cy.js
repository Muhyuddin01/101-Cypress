/// <reference types= "cypress"/>


describe('API Testing Call', () => {

    it.only('1 GET- Get Users', () => {

        cy.api('GET', 'https://reqres.in/api/users?page=2') // use for plugin
        // cy.request('GET', 'https://reqres.in/api/users?page=2')
            .then((Response) => {

                expect(Response).to.have.property('status', 200);
                expect(Response.status).to.equal(200);
                cy.log(Response.body.data)
                expect(Response.body.data).to.have.length(6);

            })
    })

    it('2 GET- Test the signle user another way', () => {

        cy.request({
            'method': 'GET',
            'url': 'https://reqres.in/api/users',
            Headers: {

                'Content-Type': 'application/json'
            }
        }).then((Response) => {
            expect(Response.body).not.to.be.null;
            // cy.log(Response.body.data[0].email)
            Response.body.data.forEach(element => {
                /*                 cy.log(element.email)
                                expect(element.email).not.to.null;
                                cy.log(typeof element.id) */

                if (element.email == 'emma.wong@reqres.in') {
                    return;
                } else {
                    cy.log(element.email)
                    expect(element.email).not.to.but.null
                }
            });
            // expect(Response.body).to.have.property ('email', 'janet.weaver@reqres.in');
            // expect(Response.body.data[0].email).to.equal('janet.weaver@reqres.in')
        })


    })

    it('3 Create User', () => {

        cy.request({
            'method': 'POST',
            'url': 'https://reqres.in/api/users',
            Headers: {

                'Content-Type': 'application/json'
            },
            body: {
                "name": "morpheus",
                "job": "leader"
            }

        }).then((Response) => {
            expect(Response).to.have.property('status', 201);
            cy.log(Response.body.status);

            expect(Response.body).to.have.property('name', 'morpheus');
            cy.log(Response.body.name);

            expect(Response.body).to.have.property('job', 'leader');
            cy.log(Response.body.job);

            expect(Response.body.createdAt).not.to.be.null;
            cy.log(Response.body.createdAt);

            expect(Response.body.id).not.to.be.null;
            cy.log(Response.body.id);
        });
    })



    it.skip('4 Update User', () => {

        cy.request({
            'method': 'PUT',
            'url': 'https://reqres.in/api/users',
            Headers: {

                'Content-Type': 'application/json'
            },
            body:
            {
                "first_name": "George",
                "email": "george.bluth@reqres.in"
            }
        }).then((Response) => {
            expect(Response).to.have.property('status', 201);

            expect(Response.body).to.have.property('first_name', 'George');

            expect(Response.body).to.have.property('email', 'Prime Ministor');

            expect(Response.body.updatedAt).not.to.be.null;

            expect(Response.body.id).not.to.be.null;
        });
    })


    it('5 Delete User', () => {

        cy.request({
            'method': 'DELETE',
            'url': 'https://reqres.in/api/users/2',
        }).then((Response) => {
            expect(Response).to.have.property('status', 204);
            expect(Response.status).to.be.equal(204);
        });
    })

})
