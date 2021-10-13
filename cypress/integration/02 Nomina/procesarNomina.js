/// <reference types="Cypress" /> 

//para que funcionen los comandos de cypress
import 'cypress-file-upload';
require('cypress-xpath')
require('cypress-iframe')

describe("Validando carga masiva incidencias", () =>{
    
    it.only("Carga masiva incidencias", () =>{
        
        cy.login("https://integras3qa.lennken.com/Default.aspx", "0000333", "$0000333$")
        cy.Proceso_Nomina("SERVICIOS , S.A. DE C.V.", "Nómina Quincenal", 1000)
        
    })

}) //Cierre de describe