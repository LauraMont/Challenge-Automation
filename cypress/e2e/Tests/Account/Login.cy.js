import {login} from '@pages/Login.Page'
const baseUrl = Cypress.env('baseUrl');
describe('US: Login SwagLabs',()=>{
    it('Login exitoso con usuario valido',()=>{
        cy.visit(baseUrl);
        login.enterUsername('username');
    });
}); 