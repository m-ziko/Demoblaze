class ItemDetailsPage{
    elements = {
AddToCartButton:()=>cy.get('.col-sm-12 > .btn'),
    }
  AddItemToCart(){
    this.elements.AddToCartButton().click()
    cy.wait(2000)
    
  }
  ValidateItemAddedToCart(){
    cy.on('window:alert',(t)=>{
        //assertions
        expect(t).to.equal('Product added.');
     })    
  }
  
}
module.exports = new ItemDetailsPage();
