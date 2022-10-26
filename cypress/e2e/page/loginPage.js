/// <reference types="cypress"/>

import loc from '../../support/locators'


class loginPage{


    getBtnLogin(){
        cy.get(loc.HOME.SIGNIN).click()
    }

    getUsuarioValido(){
        cy.fixture('login').as('user').then( function() {
            cy.get(loc.LOGIN.EMAIL).type(this.user.login)
            cy.get(loc.LOGIN.PASSWORD).type(this.user.senha)
            cy.get(loc.LOGIN.BTN_SUBMIT_LOGIN).click()
        })
    }

}

export default loginPage