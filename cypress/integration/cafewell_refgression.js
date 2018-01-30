//Jan 29 2018 Roy Yap Ver 1.0
//scripting my first Cypress Cafewell Welltok end to end smoke test
describe('Start', function () {
  it('. should() - Launch Cafewell and assert that <page title> is present and correct', function () {
    cy.visit('https://www.cafewell.com')
    //check for the CAfewell page title
    cy.title().should('include', 'Welcome - Sign In | CaféWell')
    //   ↲               ↲            ↲
    // subject        chainer      value
    //cy.contains('type').click()

    //Arrange
    // 1: visit a page
    // 2: Query for element
    //Actions
    // 1: Interact with the element
    //Assert
    // 1: make an assertion about the page content
  })
})
