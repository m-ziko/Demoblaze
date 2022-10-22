class LoginPage{
    elements = {
LoginPageButton:()=>cy.get('#login2'),
UserNameInput:()=> cy.get('#loginusername'),
PasswordInput:()=> cy.get('#loginpassword'),
LgnBtn:()=> cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'),
ClslBTN:()=> cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary')
    }
  OpenLoginPage(){
    this.elements.LoginPageButton().click()
    cy.wait(2000)
  }
  InsertUserName(UserName){
    this.elements.UserNameInput().type(UserName)
  }
  InsertPassword(Password){
    this.elements.PasswordInput().type(Password)
  }
  ClickOnLogin(){
    this.elements.LgnBtn().click()
  }
  ClickOnClose(){
    this.elements.ClslBTN().click()
  }
}
module.exports = new LoginPage();
