import {login} from '../../../support/pages/Login.Page'
//import {login} from '../../../support/pages/Login.Page'

const baseUrl = Cypress.env('baseUrl');
describe('US: Login SwagLabs',()=>{
    it.only('Login exitoso con usuario valido',()=>{ 
        cy.visit(baseUrl);
        login.enterUsername('username');
    });  
});