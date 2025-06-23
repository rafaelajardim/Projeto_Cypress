describe('Teste busca por Portal Integra', () => {
  it('Deve digitar no campo de busca e verificar os resultados', () => {
    // Acessa a página de tecnologias do IFRS
    cy.visit('https://integra.ifrs.edu.br/tecnologias');

    // Digita 'portal integra' no campo de busca
    cy.get('#integra-filter-criterio')
      .should('be.visible')
      .type('portal integra');

    // Clica no botão de busca
    cy.get('[data-cy="integra-filter-buscar"]')
      .should('be.enabled') // mais direto que .not.be.disabled
      .click();

    // Resultado 
    cy.contains(/portal integra/i, { timeout: 10000 }) 
      .should('be.visible');
  });
});
