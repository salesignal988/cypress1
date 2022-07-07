describe ('register test', () => {

    it('register without credentials', () => {

        cy.visit('/register')
        cy.get('button').click()
        cy.url().should('include', '/register')
      
      })

      it('register without firstname', () => {
        cy.visit('/register')

        
        cy.get('#last-name').type('vucinic')
        cy.get('#email').type('sasa@gmail.com')
        cy.get('#password').type('test1234')
        cy.get('#password-confirmation').type('test1234')
        cy.get(':checkbox').check()
        cy.get('button').click()
        cy.url().should('include', '/register')
   
   })

   it('register without lastname', () => {
    cy.visit('/register')

    
    cy.get('#first-name').type('sasa')
    cy.get('#email').type('sasa@gmail.com')
    cy.get('#password').type('test1234')
    cy.get('#password-confirmation').type('test1234')
    cy.get(':checkbox').check()
    cy.get('button').click()
    cy.url().should('include', '/register')

})




it('register without email', () => {
    cy.visit('/register')

    
    cy.get('#first-name').type('sasa')
    cy.get('#last-name').type('vucinic')
    cy.get('#password').type('test1234')
    cy.get('#password-confirmation').type('test1234')
    cy.get(':checkbox').check()
    cy.get('button').click()
    cy.url().should('include', '/register')

})


it('register without @ in email', () => {
    cy.visit('/register')

    
    cy.get('#first-name').type('sasa')
    cy.get('#last-name').type('vucinic')
    cy.get('#email').type('sasagmail.com')
    cy.get('#password').type('test1234')
    cy.get('#password-confirmation').type('test1234')
    cy.get(':checkbox').check()
    cy.get('button').click()
    cy.url().should('include', '/register')

})
    
    
it('register without mark checkbox', () => {
    cy.visit('/register')

    
    cy.get('#first-name').type('sasa')
    cy.get('#last-name').type('vucinic')
    cy.get('#email').type('sasagmail.com')
    cy.get('#password').type('test1234')
    cy.get('#password-confirmation').type('test1234')
    cy.get('button').click()
    cy.url().should('include', '/register')

})
    
    
it('register with exist mail', () => {
    cy.visit('/register')

    
    cy.get('#first-name').type('sasa')
        cy.get('#last-name').type('vucinic')
        cy.get('#email').type('sasa@gmail.com')
        cy.get('#password').type('test1234')
        cy.get('#password-confirmation').type('test1234')
        cy.get(':checkbox').check()
        cy.get('button').click()
        cy.url().should('include', '/register')

})
    
    
    
    
    
    
    
    
    
    
    
    xit('register with valid data', () => {

        cy.visit('/register')
    
        cy.get('#first-name').type('sasa')
        cy.get('#last-name').type('vucinic')
        cy.get('#email').type('sasa@gmail.com')
        cy.get('#password').type('test1234')
        cy.get('#password-confirmation').type('test1234')
        cy.get(':checkbox').check()
        cy.get('button').click()
        cy.url().should('not.include', '/register')
        


    
    })

})