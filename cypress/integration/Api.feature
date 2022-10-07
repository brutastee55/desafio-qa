@Desafio
Feature: eu como usuario devo ser capaz de fazer uma consultas usando o metodo GET 

@API
Scenario: consultar a lista de nomes do trello usando o metodo GET
    Given que faco uma requisicao espero que o status code seja 200 e busco por "body.data.list.name"
    Then que o resultado seja "Professional"