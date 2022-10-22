class HomePage{
    elements = {
WelcomeUser:()=> cy.get('#nameofuser'),
HomePageButton:()=>cy.get('.active > .nav-link'),
CartPageButton:()=>cy.get('#cartur'),
HomePageNavBar:()=>cy.get('.active > .d-block')
    }
    NavigateDemoblaze(){
        cy.visit('https://www.demoblaze.com/index.html')
    }
    LoginValidation(){
        this.elements.WelcomeUser() 
        .should(($div) => {
        expect($div.text()).equal("Welcome a");});
        
      }
      OpenItemDetailsPage(itemName){
        cy.get('.card-title').contains(itemName).should('be.visible').click();
        
      }
      OpenHomePage(){
        this.elements.HomePageButton().click()
        
      }
OpenCartPage(){
        this.elements.CartPageButton().click()
        cy.wait(2000)
      }
CheckHomePage(){
  this.elements.HomePageNavBar().should('be.visible')
}
}
module.exports = new HomePage();
