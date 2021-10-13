/// <reference types="Cypress" /> 
//para que funcionen los comandos de cypress

require('cypress-xpath')
require('cypress-iframe')

describe("Login", () =>{
   
    it("Usuario valido", () =>{
        let tiempo = 1000
        cy.login("https://integras3qa.lennken.com/Default.aspx", "0000333", "$0000333$")
    })

    it("Usuario no valido", () =>{
        let tiempo = 1000
        cy.login("https://integras3qa.lennken.com/Default.aspx", "0000333", "$000033$")
    })

    it.only("Usuario no valido con muchos caracteres", () =>{
        let tiempo = 1000
        cy.login("https://integras3qa.lennken.com/Default.aspx", "asdfasdfasdfasdfasdfasdfasdfasfd", "asdfasdfasdfasdfasdfasdfasdfasdfasdf")
    })

    it.only("Cambio de contraseña", () =>{
        let tiempo = 1000
        //se ejecuta el before
        cy.login("https://integras3qa.lennken.com/Default.aspx", "0000333", "$0000333$")
        cy.get("#ctl00_cphPrincipal_repeaterModulo_ctl02_lnkModulo").should("be.visible").click()  
        cy.get("#ctl00_cphToolbar_linkChangePwd").should("be.visible").click()

        //buscar por xpath (recuerda que se tiene que agregar la libreria require('cypress-xpath') )
        cy.frameLoaded('#dialog-body')
        cy.iframe().find("#ctl00_cphPrincipal_txtUserNamePasswordLast1").should("be.visible").type("Hola")
        cy.iframe().find("#ctl00_cphPrincipal_txtUserNamePassword").should("be.visible").type("adios")
        cy.iframe().find("#ctl00_cphPrincipal_Button1").should("be.visible").click()
        cy.iframe().wait(1500)
        
    })


}) //Cierre de describe