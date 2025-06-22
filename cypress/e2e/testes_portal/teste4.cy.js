describe('Teste busca por "rafaela ribeiro"', () => {
  it('Digita no campo de busca e clica no botão Buscar', () => {
    cy.visit('https://integra.ifrs.edu.br/portfolio/pessoas'); 

    // Digita nome
    cy.get('#integra-filter-criterio')
      .should('be.visible')
      .type('rafaela ribeiro');

    // Aguarda o botão de busca ser habilitado 
    cy.get('[data-cy="integra-filter-buscar"]')
      .should('not.be.disabled')
      .click();

    // resultados
    cy.contains('rafaela ribeiro', { matchCase: false, timeout: 10000 }).should('be.visible');
  });
});