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
            cy.get(":nth-child(2) > .rmRootLink > .rmToggle > .rmIcon").should("be.visible").click()
            cy.get(".rmLevel1 > :nth-child(6) > .rmExpand > .rmText").should("be.visible").click()
            cy.get(".rmSelected > .rmSlide > .rmVertical > .rmLast > .rmLink").should("be.visible").click()
            
            cy.get("#ctl00_cphToolbar_dropEmpresaContrato").select(["SERVICIOS ADMINISTRATIVOS , S.A. DE C.V."])
            cy.wait(1000)
            cy.get("#ctl00_cphPrincipal_dropTipoNomina").select(["Nómina Asimilados"])
            cy.wait(3000)
            cy.get("#ctl00_cphPrincipal_dropPeriodo").select(["01/05/2021 - 15/05/2021"])
            cy.wait(1000)


            //AHORA CARGAMOS EL ARCHIVO QUE QUEREMOS SUBIR
            const ruta="Layout Incidencias.xls"
            cy.get('[type="file"]').attachFile(ruta)
            cy.wait(1000)

            cy.get("#ctl00_cphPrincipal_btnCargarPercepciones").should("be.visible").click()
            cy.wait(2000)
            cy.get("#ctl00_cphPrincipal_btnVerListado").should("be.visible").click()
            cy.wait(3000)
            cy.xpath("//button[@id='dialog-close']").should("be.visible").click()
            
            //cy.get("#ctl00_cphPrincipal_btnPorcesar1").should("be.visible").click()
            
    })

}) //Cierre de describe