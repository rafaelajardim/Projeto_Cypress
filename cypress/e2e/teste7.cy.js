describe('Teste de busca poalab na lupa de pesquisa', () => {
  it('Clica na lupa e realiza a pesquisa', () => {
    cy.visit('https://integra.ifrs.edu.br');

    // Abre campo de busca
    cy.get('input#BootstrapVueNext__ID__v-2__input___')
      .should('be.visible')
      .click();
    
    //Digita poalab
    cy.get('#busca-input') 
      .should('be.visible')
      .type('poalab{enter}');

    // Resultado
    cy.get('.resultado-busca')
      .should('contain.text', 'poa lab');
  });
});
