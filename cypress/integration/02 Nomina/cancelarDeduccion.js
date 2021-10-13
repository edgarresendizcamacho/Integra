/// <reference types="Cypress" /> 

//para que funcionen los comandos de cypress
import 'cypress-file-upload';
require('cypress-xpath')
require('cypress-iframe')

describe("Validando carga masiva incidencias", () =>{
    
    it.only("Carga masiva incidencias", () =>{
            
        cy.visit("https://integras3qa.lennken.com/Default.aspx")
        cy.wait(4000)
        cy.get("#ctl00_cphContenido_oLogin_UserName").should("be.visible").type("0000333")
        cy.get("#ctl00_cphContenido_oLogin_Password").should("be.visible").type("$0000333$")
        
        cy.get("#ctl00_cphContenido_oLogin_LoginButton").should("be.visible").click()  
        cy.get("#ctl00_cphPrincipal_repeaterModulo_ctl03_lnkModulo").should("be.visible").click()

            //buscar por algun atributo el control
            cy.get(":nth-child(2) > .rmRootLink > .rmText").should("be.visible").click()
            cy.get(".rmLevel1 > :nth-child(5) > .rmExpand > .rmToggle > .rmIcon").should("be.visible").click()
            cy.get(".rmLevel1 > .rmExpanded > .rmSlide > .rmVertical > .rmLast > .rmLink").should("be.visible").click()

            cy.get("#ctl00_cphToolbar_dropEmpresaContrato").select(["SERVICIOS ADMINISTRATIVOS , S.A. DE C.V."])
            cy.wait(1000)
            cy.get("#ctl00_cphPrincipal_dropTipoNomina").select(["Nómina Asimilados"])
            cy.wait(1000)
            cy.get("#ctl00_cphPrincipal_ucBusqueda_txtNumeroNomina").should("be.visible").clear().type("2656")
            cy.wait(1000)
            cy.get("#ctl00_cphPrincipal_btnSearch").should("be.visible").click()
            
    })

}) //Cierre de describe