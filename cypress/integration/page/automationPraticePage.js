/// <reference types="cypress"/>
after(()=>{
    cy.clearLocalStorage()
})

class automationPraticePage{


    getBtnLogin(){
        cy.get('.login').click()
    }

    getInputEmail(){
        cy.get('#email').type('teste2021@teste.com.br')
    }

    getInputPassword(){
        cy.get('#passwd').type('teste')
    }

    getBtnSignIn(){
        cy.get('#SubmitLogin > span').click()
    }

    getTextoMinhaConta(){
        return cy.get('.page-heading')
    }

    getInpuPesquisa(pesquisa){
        cy.get('#search_query_top').type(pesquisa)
    }

    getBtnPesquisa(){
        cy.get('#searchbox > .btn').click()
    }

    getBtnAddCompraCarrinho(){
        cy.get('.ajax_add_to_cart_button > span').click()
    }

    getBtnProceedToCheckout(){
        cy.get('.button-container > .button-medium > span').click()
    }

    getTextoItemCarrinho(){
        return cy.get('.cart_description > .product-name > a')
    }

    getBtnProceedCheckoutCarrinho(){
        cy.get('.cart_navigation > .button > span').click() 
    }

    getCheckTermoDeServico(){
        cy.get('#cgv').click()
    }

    getModalCheque(){
        cy.get('.cheque').click()
    }

    getBtnConfirmOrder(){
        cy.get('#cart_navigation > .button > span').click()
    }

    getTextoCompraFeitaSucesso(){
        return cy.get('.alert')
    }

}

export default automationPraticePage