/// <reference types="Cypress" /> 
//para que funcionen los comandos de cypress

require('cypress-xpath')

describe("Cuentas principales", () =>{
   
    it.only("Consulta de cuentas principales", () =>{

        //cy.forceVisit("https://lnk-logindev.lennken.com/?ReturnBaseUrl=https://appsrv-lnk-nomina-portal.azurewebsites.net/")
        //cy.title().should('eq', 'Portal Cabina')
        //cy.wait(4000)
        //cy.get("#Username").should("be.visible").type("admin.zenkast")
        //cy.get("#Password").should("be.visible").type("Passw0rd$")
        //cy.xpath("//input[@type='submit']").should("be.visible").click()
        //cy.request(options)

        //cy.stubRedirect()
        cy.visit("https://lnk-logindev.lennken.com?ReturnBaseUrl=https://appsrv-lnk-nomina-portal.azurewebsites.net")   
        //cy.wait('@index')                           // waiting for the window load
        
        cy.wait(4000)
        cy.get("#Username").should("be.visible").type("admin.zenkast")
        cy.get("#Password").should("be.visible").type("Passw0rd$")
        cy.xpath("//input[@type='submit']").should("be.visible").click()
        cy.wait(4000)

    })

}) //Cierre de describe