class CartPage{
    elements = {
        TotalPrice:()=>cy.get('#totalp'),
        PlaceOrderButton:()=>cy.get('.col-lg-1 > .btn'),
        Name:()=>cy.get('#name'),
        Country:()=>cy.get('#country'),
        city:()=>cy.get('#city'),
        card:()=>cy.get('#card'),
        month:()=>cy.get('#month'),
        year:()=>cy.get('#year'),
        PurchaseButton:()=>cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'),
        purchaseCard:()=>cy.get('.lead'),
        PurchaseOkButton:()=>cy.get('.confirm')




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
  
  PlaceOrder(){
    this.elements.PlaceOrderButton().click()
}
FillPurchaseForm(Name,Country,city,card,month,year){
    this.elements.Name().type(Name,"")

    this.elements.Country().type(Country)
    this.elements.city().type(city)
    this.elements.card().type(card)
    this.elements.month().type(month)
    this.elements.year().type(year)
}
Purchase(){
    this.elements.PurchaseButton().click()
}
Validatepurchase(Name1,card1){
this.elements.purchaseCard().contains(Name1)
this.elements.purchaseCard().contains(card1)

}
PurchaseOkClick(){
    this.elements.PurchaseOkButton().click()

}
}
module.exports = new CartPage();
