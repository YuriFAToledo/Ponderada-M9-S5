//react-demo.cy.js
describe('React calculator example', () => {
    it('Should validate addition operation', () => {
    cy.visit('https://www.calculadora-online.xyz//');
    cy.get('input[value="7"]').click();
    cy.get('input[value="+"]').click();
    cy.get('input[value="9"]').click();
    cy.get('input[value="="]').click();
    cy.get('#total').should('have.text','16')
    })
    })