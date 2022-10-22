import LoginPage from "../Pages/LoginPage.cy.js"
import HomePage from "../Pages/HomePage.cy.js"
import ItemDetailsPage from "../Pages/ItemDetailsPage.cy.js"
import CartPage from "../Pages/CartPage.cy.js"
describe('empty spec', () => {
  beforeEach(() => {
      HomePage.NavigateDemoblaze()
    
  
  })
  it('Check Login and added Item to cart', () => {
    
    LoginPage.OpenLoginPage()
    LoginPage.InsertUserName('a')
    LoginPage.InsertPassword('a')
    LoginPage.ClickOnLogin()
    HomePage.LoginValidation()
    HomePage.OpenItemDetailsPage('Nokia lumia 1520')
    ItemDetailsPage.AddItemToCart()
    ItemDetailsPage.ValidateItemAddedToCart()
    

   

   

  })
  it('Check added item to th cart correct', () => {
   let FirstItem={
    Name: 'Samsung galaxy s6',
    Price: 360}
   let SecondItem={
    Name: 'Nokia lumia 1520',

    Price: 820}

    HomePage.OpenHomePage()
    LoginPage.OpenLoginPage()
    LoginPage.InsertUserName('a')
    LoginPage.InsertPassword('a')
    LoginPage.ClickOnLogin()
    HomePage.LoginValidation()
    HomePage.OpenItemDetailsPage('Samsung galaxy s6')
    ItemDetailsPage.AddItemToCart()
    ItemDetailsPage.ValidateItemAddedToCart()
    HomePage.OpenCartPage()
    CartPage.ValidateaddedsameItem(FirstItem.Name,SecondItem.Name,FirstItem.Price,SecondItem.Price)
    CartPage.ValidateTotalPrice(FirstItem.Price,SecondItem.Price)

 
  })
  it('Check Checkout Cart', () => {
    let Name = 'Mohamed'
    let Country= 'Egypt'
    let city = 'Cairo'
    let month = 'Jane'
    let year  = "1996"
    let card =  '123345678912345'
    LoginPage.OpenLoginPage()
    LoginPage.InsertUserName('a')
    LoginPage.InsertPassword('a')
    LoginPage.ClickOnLogin()
    HomePage.LoginValidation()
    HomePage.OpenCartPage()
  CartPage.PlaceOrder()
  CartPage.FillPurchaseForm(Name,Country,city,card,month,year)
  CartPage.Purchase()
 CartPage.Validatepurchase(Name,card)
  CartPage.PurchaseOkClick()
  HomePage.CheckHomePage()
   })
})