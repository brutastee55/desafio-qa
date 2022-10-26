/// <reference types="cypress"/>

import loc from '../../support/locators'

class carrinhoPage{

    getTextoItemCarrinho(){
        return cy.get(loc.CARRINHO.TEXTO_ITEM_CARRINHO)
    }

    getBtnProceedCheckoutCarrinho(){
        cy.get(loc.CARRINHO.PROCEED_CHECKOUT_CARRINHO).click() 
    }

    getCheckTermoDeServico(){
        cy.get(loc.CARRINHO.TERMO_DE_SERVICO).click()
    }

    getModalCheque(){
        cy.get(loc.CARRINHO.PAY_BY_CHECK).click()
    }

    getBtnConfirmOrder(){
        cy.get(loc.CARRINHO.CONFIRM_MY_ORDER).click()
    }

    getTextoCompraFeitaSucesso(){
        return cy.get(loc.CARRINHO.MESSAGE_SUCESSO)
    }

}
export default carrinhoPage