class HomePage{
    elements = {
WelcomeUser:()=> cy.get('#nameofuser'),
//ItemInsertedToCard:()=>cy.get('.card-title').contains('Samsung galaxy s6'),
SecondItemInsertedToCard:()=>cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch'),
HomePageButton:()=>cy.get('.active > .nav-link'),
CartPageButton:()=>cy.get('#cartur')

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
    
}
module.exports = new HomePage();
