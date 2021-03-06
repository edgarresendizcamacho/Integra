// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (url,Usuario, contrasenia) => {
    let tiempo = 1000
    cy.visit(url)
    cy.get("#ctl00_cphContenido_oLogin_UserName").should("be.visible").type(Usuario)
    cy.get("#ctl00_cphContenido_oLogin_Password").should("be.visible").type(contrasenia)
    cy.get("#ctl00_cphContenido_oLogin_LoginButton").should("be.visible").click()
    cy.wait(tiempo)
})

Cypress.Commands.add('Texto_Visible', (nombreControl,texto, tiempo) => {
    cy.get(nombreControl).should("be.visible").type(texto)
    cy.wait(tiempo)
})

Cypress.Commands.add('Texto_Visible_xPath', (nombreControl,texto, tiempo) => {
    cy.xpath(nombreControl).should("be.visible").type(texto)
    cy.wait(tiempo)
})

Cypress.Commands.add('click_Normal', (nombreControl,tiempo) => {
    cy.get(nombreControl).should("be.visible").click()
    cy.wait(tiempo)
})

Cypress.Commands.add('click_Force', (nombreControl,tiempo) => {
    cy.get(nombreControl).should("be.visible").click({force:true})
    cy.wait(tiempo)
})

Cypress.Commands.add('click_xPath', (nombreControl,tiempo) => {
    cy.xpath(nombreControl).should("be.visible").click({force:true})
    cy.wait(tiempo)
})

Cypress.Commands.add('Pantalla_Nomina', (nombreControl,tiempo) => {
    cy.get(nombreControl).should("be.visible").click({force:true})
    cy.wait(tiempo)
})

Cypress.Commands.add('Proceso_Nomina', (empresaPagadora,tipoNomina,tiempo) => {

    //buscar por algun atributo el control
    cy.get("#ctl00_cphPrincipal_repeaterModulo_ctl03_lnkModulo").should("be.visible").click()
    cy.get(":nth-child(2) > .rmRootLink > .rmText").should("be.visible").click()
    cy.get(":nth-child(1) > .rmExpand > .rmText").should("be.visible").click()
    cy.xpath("(//a[contains(@class,'rmLink')])[2]").should("be.visible").click()
    
    cy.get("#ctl00_cphToolbar_dropEmpresaContrato").select([empresaPagadora])
    cy.wait(1000)
    cy.get("#ctl00_cphPrincipal_dropTipoNomina").select([tipoNomina])
    cy.wait(1000)
    cy.get("#ctl00_cphPrincipal_btnAction").should("be.visible").click()
    cy.wait(1000)
    cy.get("#ctl00_cphPrincipal_gvControl_ctl02_lblCalcular").should("be.visible").click()
    cy.wait(1000)
    cy.get("#ctl00_cphPrincipal_btnAction").should("be.visible").click()
})