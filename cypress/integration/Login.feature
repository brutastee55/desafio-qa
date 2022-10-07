@Desafio
Feature: Eu como usuario da aplicação devo ser Capaz de me logar com sucesso e fazer uma compra

@LOGIN
Scenario: Fazer login com um usuario valido
    Given dado que acesso o site automation pratice    
    When faco login com um usuario valido
    Then valido que esteja logado em minha conta 'My account'
    And no campo de busca pesquiso pelo item 'Faded Short Sleeve T-shirts'
    And adiciono o item pesquisado no carrinho
    And confirmo que o item no carrinho seja o mesmo que adicionei 'Faded Short Sleeve T-shirts'
    And na pagina de endereco clico em prosseguir para checkout
    And na pagina de envio concordo com os termos e clico em prosseguir para checkout
    And escolho a forma que pagamento por cheque
    And clico no botao de confirmar o pedido
    Then valido a mensagem de sucesso 'Your order on My Store is complete.'