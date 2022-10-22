class CartPage{
    elements = {
        TotalPrice:()=>cy.get('#totalp'),
        PlaceOrderButton:()=>cy.get('.col-lg-1 > .btn')
       
    }
  ValidateaddedsameItem(Item1Name,Item2Name,Item1price,Item2price){
    cy.get('#tbodyid > :nth-child(1) > :nth-child(2)').should(($name)=>{
        expect($name.text()).equal(Item1Name)

    })
    cy.get('#tbodyid > :nth-child(1) > :nth-child(3)').should(($price)=>{
        expect(parseInt($price.text())).equal(Item1price)

    })
    cy.get('#tbodyid > :nth-child(2) > :nth-child(2)').should(($name)=>{
        expect($name.text()).equal(Item2Name)

    })
    cy.get('#tbodyid > :nth-child(2) > :nth-child(3)').should(($price)=>{
        expect(parseInt($price.text())).equal(Item2price)

    })
  
    
  }
  ValidateTotalPrice(Item1price,Item2price){

    cy.get('#totalp').should(($Totalprice)=>{
        expect(parseInt($Totalprice.text())).equal(Item1price+Item2price)

    })
  }
  
  
}
module.exports = new CartPage();
