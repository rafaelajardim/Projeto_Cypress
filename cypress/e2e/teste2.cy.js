describe('Teste busca por evento Formalização de parcerias', () => {
  it('Pesquisar o evento', () => {
    // Acessa a página de eventos
    cy.visit('https://integra.ifrs.edu.br/institucional/eventos');

    // Digita nome do evento
    cy.get('#integra-filter-criterio')
      .should('be.visible')
      .clear()
      .type('Formalização de parcerias');

    // Aguarda botão de busca ser habilitado
    cy.get('button[data-cy="integra-filter-buscar"]')
      .should('not.be.disabled')
      .click();

    // Resultado
    cy.get('.integra-card__title', { timeout: 10000 })
      .should('contain.text', 'Formalização de parcerias');
  });
});