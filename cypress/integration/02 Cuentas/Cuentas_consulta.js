/// <reference types="Cypress" /> 
//para que funcionen los comandos de cypress

require('cypress-xpath')

describe("Cuentas principales", () =>{
   
    const options = {
        method: 'get',
        url: 'https://appsrv-lnk-nomina-portal.azurewebsites.net/',
        qs: {
          // use qs to set query string to the url that creates
          // http://auth.corp.com:8080?redirectTo=http://localhost:7074/set_token
          redirectTo: 'https://lnk-logindev.lennken.com/',
        },
        form: true, // we are submitting a regular form body
        body: {
          username: 'admin.zenkast',
          password: 'Passw0rd$',
        },
      }

    Cypress.Commands.add('forceVisit', url => {
        cy.window().then(win => {
            return win.open(url, '_self'); 
          });
    });
    
    Cypress.Commands.add('stubRedirect', () => {
     
      cy.intercept(
        { method: "get", url: "https://appsrv-lnk-nomina-portal.azurewebsites.net/" },
        {
          // TODO: automatically handle applying these headers
          headers: {
            "access-control-allow-origin": window.location.origin,
            "Access-Control-Allow-Credentials": "true",
          },
          form: true, // we are submitting a regular form body
          body: {
            username: 'admin.zenkast',
            password: 'Passw0rd$',
          },
        }
      ).as("https://lnk-logindev.lennken.com/");
    })

    

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


    it("Segundo test -> entrar a un iframe", () =>{

        cy.visit("https://integras3qa.lennken.com/Default.aspx")
        cy.get("#ctl00_cphContenido_oLogin_UserName").should("be.visible").type("0000333")
        cy.get("#ctl00_cphContenido_oLogin_Password").should("be.visible").type("$0000333$")
        
        cy.get("#ctl00_cphContenido_oLogin_LoginButton").should("be.visible").click()  
        cy.get("#ctl00_cphPrincipal_repeaterModulo_ctl02_lnkModulo").should("be.visible").click()  
        cy.get("#ctl00_cphToolbar_linkChangePwd").should("be.visible").click()  
        
        //buscar por algun atributo el control
        //cy.get("[value='Cambiar']").should("be.visible").click()  

        //buscar por xpath (recuerda que se tiene que agregar la libreria require('cypress-xpath') )
        //cy.frameLoaded('#dialog-body')
        //cy.iframe().find("#ctl00_cphPrincipal_txtUserNamePasswordLast").should("be.visible").type("Hola")
        //cy.iframe().find("#ctl00_cphPrincipal_txtUserNamePassword").should("be.visible").type("adios")
        //cy.iframe().find("#ctl00_cphPrincipal_Button1").should("be.visible").click()
        //cy.iframe().wait(1500)
        

    })

}) //Cierre de describe