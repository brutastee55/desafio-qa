/// <reference types="cypress"/>

import {Given, And, Then, When} from "cypress-cucumber-preprocessor/steps";
import automationPraticePage from "../page/automationPraticePage"

const page = new automationPraticePage()

Given('dado que acesso o site automation pratice',() =>{
    cy.visit(Cypress.env('login_url'));
})

When('faco login com um usuario valido',() =>{
    page.getBtnLogin()
    page.getInputEmail()
    page.getInputPassword()
    page.getBtnSignIn()
})

Then ('valido que esteja logado em minha conta {string}', (validacao) =>{
    page.getTextoMinhaConta().should('have.text',validacao)
})


And ('no campo de busca pesquiso pelo item {string}', (pesquisa) => {
    page.getInpuPesquisa(pesquisa)
    page.getBtnPesquisa()
})

And ('adiciono o item pesquisado no carrinho',() =>{
    page.getBtnAddCompraCarrinho()
    page.getBtnProceedToCheckout()
})

And ('confirmo que o item no carrinho seja o mesmo que adicionei {string}',(itemCarrinho) =>{
    page.getTextoItemCarrinho().should('have.text',itemCarrinho)
    page.getBtnProceedCheckoutCarrinho()
})

And ('na pagina de endereco clico em prosseguir para checkout',() =>{
    page.getBtnProceedCheckoutCarrinho()
})

And ('na pagina de envio concordo com os termos e clico em prosseguir para checkout',() =>{
    page.getCheckTermoDeServico()
    page.getBtnProceedCheckoutCarrinho()
})

And ('escolho a forma que pagamento por cheque',() =>{
    page.getModalCheque()
})

And ('clico no botao de confirmar o pedido',() =>{
    page.getBtnConfirmOrder()
})

Then ('valido a mensagem de sucesso {string}',(texto) =>{
    page.getTextoCompraFeitaSucesso().should('have.text',texto)
})