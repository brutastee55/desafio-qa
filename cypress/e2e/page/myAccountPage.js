/// <reference types="cypress"/>

import loc from '../../support/locators'

class myAccountPage{
    getTextoMinhaConta(){
        return cy.get(loc.MY_ACCOUNT.TEXTO_MY_ACCOUNT)
    }
}
export default myAccountPage