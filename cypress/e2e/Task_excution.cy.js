import LoginPage from "../Pages/LoginPage.cy.js"
import HomePage from "../Pages/HomePage.cy.js"
import ItemDetailsPage from "../Pages/ItemDetailsPage.cy.js"
import CartPage from "../Pages/CartPage.cy.js"
describe('empty spec', () => {
  before(() => {
      HomePage.NavigateDemoblaze()
    
  
  })
  it('Should Login Successsfully', () => {
    
    LoginPage.OpenLoginPage()
    LoginPage.InsertUserName('a')
    LoginPage.InsertPassword('a')
    LoginPage.ClickOnLogin()
    HomePage.LoginValidation()
    HomePage.OpenItemDetailsPage('Nokia lumia 1520')
    ItemDetailsPage.AddItemToCart()
    ItemDetailsPage.ValidateItemAddedToCart()
    

   

   

  })
  it('second testCase', () => {
   let FirstItem={
      
      Name: 'Nokia lumia 1520',
    Price: 820}
   let SecondItem={
      
      Name: 'Samsung galaxy s6',
    Price: 360}

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
})