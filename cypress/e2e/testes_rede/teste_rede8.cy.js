describe('Teste Normativas', () => {
  it('Deve navegar para /laboratorios ao clicar no card Laboratórios', () => {
    cy.visit('https://redeintegra.mec.gov.br/');

    // Seleciona o card normativa
    cy.get('a.v-card[href="/normativas"]')
      .should('be.visible')
      .within(() => {
        cy.get('.v-card-text').should('contain.text', 'Normativas');
      })
      .click();

    // Resultado
    cy.url().should('eq', 'https://redeintegra.mec.gov.br/normativas');
  });
});
