const locators ={
    HOME:{
        SIGNIN: '.login',
    },
    LOGIN: {
        EMAIL: '#email',
        PASSWORD: '#passwd',
        BTN_SUBMIT_LOGIN: '#SubmitLogin > span'
    },
    MY_ACCOUNT:{
        TEXTO_MY_ACCOUNT: '.page-heading'
    },
    CARRINHO:{
        TEXTO_ITEM_CARRINHO: '.cart_description > .product-name > a',
        PROCEED_CHECKOUT_CARRINHO: '.cart_navigation > .button > span',
        TERMO_DE_SERVICO: '#cgv',
        PAY_BY_CHECK: '.cheque',
        CONFIRM_MY_ORDER: '#cart_navigation > .button > span',
        MESSAGE_SUCESSO: '.alert'    
    },
    SEARCH:{
        INPUT_SEARCH: '#search_query_top',
        BTN_PESQUISA: '#searchbox > .btn',
        ADD_CARRINHO: '.ajax_add_to_cart_button > span',
        PROCEED_CHECKOUT: '.button-container > .button-medium > span'
    }
}

export default locators;