/// <reference types="cypress"/>

import loc from '../../support/locators'

class homePraticePage {
    getBtnLogin(){
        cy.get(loc.HOME.SIGNIN).click()
    }

    getInpuPesquisa(pesquisa){
        cy.get(loc.SEARCH.INPUT_SEARCH).type(pesquisa)
    }

    getBtnPesquisa(){
        cy.get(loc.SEARCH.BTN_PESQUISA).click()
    }

    getBtnAddCompraCarrinho(){
        cy.get(loc.SEARCH.ADD_CARRINHO).click()
    }

    getBtnProceedToCheckout(){
        cy.get(loc.SEARCH.PROCEED_CHECKOUT).click()
    }
}
export default homePraticePage;