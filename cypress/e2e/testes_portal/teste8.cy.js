describe('Teste de busca vídeo na videoteca', () => {
  it('Busca por vídeo', () => {
    cy.visit('https://integra.ifrs.edu.br/institucional/videoteca/5/8');

    //Digita nome do vídeo
    cy.get('input[data-cy="integra-filter-criterio"]')
      .should('be.visible')
      .clear()
      .type('Minicurso 1/8 - introdução à busca de anterioridade em patentes');

    // Aguarda botão ser habilitado para clicar
    cy.get('button[data-cy="integra-filter-buscar"]')
      .should('not.be.disabled')
      .click();

    // Espera até o vídeo aparecer
    cy.get('.integra-card__title', { timeout: 15000 })
      .contains('Minicurso 1/8 - introdução à busca de anterioridade em patentes')
      .should('be.visible')
      .scrollIntoView()
      .click({ force: true }); 
    cy.url().should('include', '/video/');
  });
});