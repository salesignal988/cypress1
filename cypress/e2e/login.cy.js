describe('gallery app', () => {

it('login without credentials', () => {

  cy.visit('/login')
  cy.get('button').click()
  cy.url().should('include', '/login')

})

it('login without @ in email', () => {

  cy.visit('/login')
    cy.get('#email').type('sasans84gmail.com')
    cy.get('#password').type('test1234')
    cy.get('button').click()
    cy.url().should('include', '/login')

})

it('login without email', () => {

     cy.visit('/login')
    cy.get('#password').type('test1234')
    cy.get('button').click()
    cy.url().should('include', '/login')

})

it('login without password', () => {

  cy.visit('/login')
  cy.get('#email').type('sasans84gmail.com')
 cy.get('button').click()
 cy.url().should('include', '/login')

})


it('login without password', () => {

  cy.visit('/login')
  cy.get('#email').type('sasans84gmail.com')
 cy.get('button').click()
 cy.url().should('include', '/login')

})


  
  







  xit('visit gallery app', () => {
    cy.visit('https://gallery-app.vivifyideas.com/')
    cy.get('a[href ="/login"]').click()
    cy.url().should('include', '/login')
    cy.get('#email').type('sasans84@gmail.com')
    cy.get('#password').type('test1234')
    cy.get('button').click()

  })

  xit('logout test', () => {
    cy.get('.nav-link').should('have.length', 4)
    cy.get('.nav-link').eq(3).click()
})

})
