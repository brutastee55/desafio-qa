/// <reference types="cypress"/>

import {Given, And, Then, When} from "cypress-cucumber-preprocessor/steps";
import carrinhoPage from "../page/carrinhoPage";
import homePraticePage from "../page/homePraticePage";
import myAccountPage from "../page/myAccountPage";
import loginPage from "../page/loginPage";

const login = new loginPage()
const home = new homePraticePage()
const myAccount = new myAccountPage()
const carrinho = new carrinhoPage()

Given('dado que acesso o site automation pratice',() =>{
    cy.visit(Cypress.env('login_url'));
})

When('faco login com um usuario valido',() =>{
    home.getBtnLogin()
    login.getUsuarioValido()
})

Then ('valido que esteja logado em minha conta {string}', (validacao) =>{
    myAccount.getTextoMinhaConta().should('have.text',validacao)
})


And ('no campo de busca pesquiso pelo item {string}', (pesquisa) => {
    home.getInpuPesquisa(pesquisa)
    home.getBtnPesquisa()
})

And ('adiciono o item pesquisado no carrinho',() =>{
    home.getBtnAddCompraCarrinho()
    home.getBtnProceedToCheckout()
})

And ('confirmo que o item no carrinho seja o mesmo que adicionei {string}',(itemCarrinho) =>{
    carrinho.getTextoItemCarrinho().should('have.text',itemCarrinho)
    carrinho.getBtnProceedCheckoutCarrinho()
})

And ('na pagina de endereco clico em prosseguir para checkout',() =>{
    carrinho.getBtnProceedCheckoutCarrinho()
})

And ('na pagina de envio concordo com os termos e clico em prosseguir para checkout',() =>{
    carrinho.getCheckTermoDeServico()
    carrinho.getBtnProceedCheckoutCarrinho()
})

And ('escolho a forma que pagamento por cheque',() =>{
    carrinho.getModalCheque()
})

And ('clico no botao de confirmar o pedido',() =>{
    carrinho.getBtnConfirmOrder()
})

Then ('valido a mensagem de sucesso {string}',(texto) =>{
    carrinho.getTextoCompraFeitaSucesso().should('have.text',texto)
})