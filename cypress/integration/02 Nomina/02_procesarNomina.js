/// <reference types="Cypress" /> 

//para que funcionen los comandos de cypress
import 'cypress-file-upload';
require('cypress-xpath')
require('cypress-iframe')

describe("Proceso de nomina", () =>{
    
    it.only("Nomina servicios quincenal normal", () =>{
        
        cy.login("https://integras3qa.lennken.com/Default.aspx", "0000333", "$0000333$")
        cy.Proceso_Nomina("SERVICIOS , S.A. DE C.V.", "Nómina Quincenal", 1000)
        
    })

    it.only("Nomina servicios quincenal asimilada", () =>{
        
        cy.login("https://integras3qa.lennken.com/Default.aspx", "0000333", "$0000333$")
        cy.Proceso_Nomina("SERVICIOS ADMINISTRATIVOS , S.A. DE C.V.", "Nómina Asimilados", 1000)
        
    })

    it.only("Nomina servicios quincenal confidencial", () =>{
        
        cy.login("https://integras3qa.lennken.com/Default.aspx", "0000333", "$0000333$")
        cy.Proceso_Nomina("SERVICIOS ADMINISTRATIVOS , S.A. DE C.V.", "Nómina Confidencial", 1000)
        
    })

}) //Cierre de describe