Cypress.Commands.add('Login', (email,password) => {
   cy.visit("/")
    // 3. Verify that home page is visible successfully
  cy.contains("Full-Fledged practice website for Automation Engineers").should("be.visible")
  // 4. Click on 'Signup / Login' button
  cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
  // 5. Verify 'Login to your account' is visible
  cy.get('.login-form > h2').should("contain.text","Login to your account")
  // 6. Enter correct email address and password
  cy.get('[data-qa="login-email"]').type(email)
  cy.get('[data-qa="login-password"]').type(password)
  // 7. Click 'login' button
  cy.get('[data-qa="login-button"]').click()
  
})