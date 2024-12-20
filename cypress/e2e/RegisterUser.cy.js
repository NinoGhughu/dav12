describe('RegisterUser', () => {

  before( ()=>{
    
  cy.fixture("LoginData").as("LoginData")
  //cy.log("Nineliiiii+"+Math.round(Math.random())*1000+"@gmail.com")
  })

  it('Test Case 1: Register User', function()  {
    cy.visit("/")
    cy.contains("Full-Fledged practice website for Automation Engineers").should("be.visible")
    // 4. Click on 'Signup / Login' button
    cy.get('.shop-menu > .nav > :nth-child(4)').click()
    // 5. Verify 'New User Signup!' is visible
    cy.get('.signup-form > h2').should("have.text", "New User Signup!")
    // 6. Enter name and email address
    cy.get('[data-qa="signup-name"]').type(this.LoginData.name)
    cy.get('[data-qa="signup-email"]').type(this.LoginData.email)
    // 7. Click 'Signup' button
    cy.get('[data-qa="signup-button"]').click()
    // 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
    cy.get(':nth-child(1) > b').should("contain.text","Enter Account Information")
    // 9. Fill details: Title, Name, Email, Password, Date of birth
    cy.get('#id_gender2').check()
    cy.get('[data-qa="name"]').should("have.value",this.LoginData.name)
    cy.get('[data-qa="email"]').should("have.value",this.LoginData.email)
    cy.get('[data-qa="password"]').type(this.LoginData.password)
    cy.get('[data-qa="days"]').select(this.LoginData.BirthDay)
    cy.get('[data-qa="months"]').select(this.LoginData.BirthMonth)
    cy.get('[data-qa="years"]').select(this.LoginData.BirthYear)
    // 10. Select checkbox 'Sign up for our newsletter!'
    cy.get('#newsletter').check()
    // 11. Select checkbox 'Receive special offers from our partners!'
    cy.get('#optin').check()
    // 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    cy.get('[data-qa="first_name"]').type(this.LoginData.name)
    cy.get('[data-qa="last_name"]').type(this.LoginData.LastName)
    cy.get('[data-qa="company"]').type(this.LoginData.Company)
    cy.get('[data-qa="address"]').type(this.LoginData.Address)
    cy.get('[data-qa="country"]').select(this.LoginData.Country)
    cy.get('[data-qa="state"]').type(this.LoginData.State)
    cy.get('[data-qa="city"]').type(this.LoginData.City)
    cy.get('[data-qa="zipcode"]').type(this.LoginData.Zipcode)
    cy.get('[data-qa="mobile_number"]').type(this.LoginData.MobileNumber)
    // 13. Click 'Create Account button'
    cy.get('[data-qa="create-account"]').click()
    //14. Verify that 'ACCOUNT CREATED!' is visible
    cy.get('[data-qa="account-created"]').should("contain.text","Account Created!")
    // 15. Click 'Continue' button
    cy.get('[data-qa="continue-button"]').click()
    // 16. Verify that 'Logged in as username' is visible
    cy.get('.nav > :nth-child(10)').should("contain.text",this.LoginData.name)

  })

 before( ()=>{cy.fixture("LoginData").as("LoginData")})
 it('Test Case 2: Login User with correct email and password', function() {
  cy.Login("Nineli4+9@gmail.com","123")
    // 8. Verify that 'Logged in as username' is visible
  cy.get('.nav > :nth-child(10)').should("contain.text",this.LoginData.name)
  //cy.get('b').should("contain.text",this.LoginData.name)
  // 9. Click 'Delete Account' button
  cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
  // 10. Verify that 'ACCOUNT DELETED!' is visible
  cy.get('[data-qa="account-deleted"]').should("contain.text","Account Deleted!")
})
before( ()=>{cy.fixture("LoginData").as("LoginData")})
 it('Test Case 3: Login User with incorrect email and password', function() {
  cy.Login("nknk@gmail.com","123")
  // 8. Verify error 'Your email or password is incorrect!' is visible
  cy.get('.login-form > form > p').should("contain.text","Your email or password is incorrect!")
 })
  })