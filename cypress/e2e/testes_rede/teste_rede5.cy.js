describe('Teste do link do card Laboratórios', () => {
  it('Deve navegar para /laboratorios ao clicar no card Laboratórios', () => {
    cy.visit('https://redeintegra.mec.gov.br/');

    // Seleciona o card 
    cy.get('a.v-card[href="/laboratorios"]')
      .should('be.visible')
      .within(() => {
        cy.get('.v-card-text').should('contain.text', 'Laboratórios');
      })
      .click();

    // Resultado
    cy.url().should('eq', 'https://redeintegra.mec.gov.br/laboratorios');
  });
});

