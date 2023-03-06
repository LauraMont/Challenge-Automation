import {login as Login} from '@pages/Login.Page'
const {login, endpoint} = Cypress.env('swagLabs')  
const baseUrl = Cypress.env('baseUrl');

describe('Iniciar sesion en SwagLabs',()=>{
    it('Iniciar sesion con usuario valido',()=>{ 
        cy.visit(baseUrl);
        Login.enterUsername(login.users.correctUser);
        Login.enterPassword(login.users.correctPass)
        Login.submitLogin()
        cy.url().should('include',endpoint.inventory)
    });  
    it('No poder Iniciar sesion con usuario invalido',()=>{ 
        cy.visit(baseUrl);
        Login.enterUsername(login.users.userInv);
        Login.enterPassword(login.users.correctPass)
        Login.submitLogin()
        cy.contains(login.errorMsg.PassOrUserInv)
    }); 
    it.only('No poder Iniciar sesion con password invalido',()=>{ 
        cy.visit(baseUrl);
        Login.enterUsername(login.users.correctUser);
        Login.enterPassword(login.users.passInv)
        Login.submitLogin()
        cy.contains(login.errorMsg.PassOrUserInv)
    }); 
    it.only('No poder Iniciar sesion con usuario nulo',()=>{ 
        cy.visit(baseUrl);
        Login.enterPassword(login.users.correctPass)
        Login.submitLogin()
        cy.contains(login.errorMsg.UserNull)
    }); 
    it.only('No poder Iniciar sesion con password nulo',()=>{ 
        cy.visit(baseUrl);
        Login.enterUsername(login.users.correctUser);
        Login.submitLogin()
        cy.contains(login.errorMsg.PassNull)
    });
    it.only('No poder Iniciar sesion con usuario y passowrd nulos',()=>{ 
        cy.visit(baseUrl);
        Login.submitLogin()
        cy.contains(login.errorMsg.UserNull)
    });
});