describe('Teste busca por Portal Integra', () => {
  it('Digita no campo de busca e clica no botão buscar', () => {
    cy.visit('https://integra.ifrs.edu.br/tecnologias'); 

    // Digita Portal
    cy.get('#integra-filter-criterio')
      .should('be.visible')
      .type('portal integra');

    // Aguarda o botão de busca ser habilitado 
    cy.get('[data-cy="integra-filter-buscar"]')
      .should('not.be.disabled')
      .click();

    // resultados
    cy.contains('portal integra', { matchCase: false, timeout: 10000 }).should('be.visible');
  });
});