/// <reference types="cypress"/>

import {Given, And, Then, When} from "cypress-cucumber-preprocessor/steps";
import trelloApiDesafio from "../page/trelloApiDesafio";

const page = new trelloApiDesafio()
let teste

 Given('que faco uma requisicao espero que o status code seja 200 e busco por {string}',(consulta)=>{
    page.getConsultaAPI().then(function(response){
        expect(response.status).to.eq(200)
        cy.log(JSON.stringify(response.body.data.list.name))
        teste = response.body.data.list.name
    })
 })

 Then('que o resultado seja {string}',(resultado) =>{
    expect(resultado).to.be.equal(teste)
 })