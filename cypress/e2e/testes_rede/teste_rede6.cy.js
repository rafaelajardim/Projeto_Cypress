describe('Teste de busca para a palavra Ensino', () => {
  it('Deve carregar a página de busca com resultados para "ensino"', () => {
    cy.visit('https://redeintegra.mec.gov.br/busca?q=ensino');
    cy.url().should('include', 'q=ensino');

    cy.get('.result-item, .search-result, .resultado')
      .should('exist')
      .and('be.visible');
  });
});

