describe('My First Test', function() {
  it('Visit Google', function() {
    cy.visit('https://dev-cmp.greatplacetowork.com/login')

    cy.get('.new-login__login-button').click()

    onLoad:  {
    //username
    cy.get('#username').should('be.visible')
    cy.get('#username').type('milos.isailovic+1154@htecgroup.com');
     cy.contains('Login')
    //password
    cy.get('#password').type('Ggaporousp6!');

    cy.get('.btn-primary').click();


}

    })

})
