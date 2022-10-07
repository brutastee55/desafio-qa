
class automationPraticePage{

    getBtnLogin(){
        return cy.get('.login')
    }

    getInputEmail(){
        return cy.get('#email')
    }

    getInputPassword(){
        return cy.get('#passwd')
    }

    getBtnSignIn(){
        return cy.get('#SubmitLogin > span')
    }

    getTextoMinhaConta(){
        return cy.get('.page-heading')
    }

    getInpuPesquisa(){
        return cy.get('#search_query_top')
    }

    getBtnPesquisa(){
        return cy.get('#searchbox > .btn')
    }

    getBtnAddCompraCarrinho(){
        return cy.get('.ajax_add_to_cart_button > span')
    }

    getBtnProceedToCheckout(){
        return cy.get('.button-container > .button-medium > span')
    }

    getTextoItemCarrinho(){
        return cy.get('.cart_description > .product-name > a')
    }

    getBtnProceedCheckoutCarrinho(){
        return cy.get('.cart_navigation > .button > span')
        
    }

    getCheckTermoDeServico(){
        return cy.get('#cgv')
    }

    getModalCheque(){
        return cy.get('.cheque')
    }

    getBtnConfirmOrder(){
        return cy.get('#cart_navigation > .button > span')
    }

    getTextoCompraFeitaSucesso(){
        return cy.get('.alert')
    }

}

export default automationPraticePage