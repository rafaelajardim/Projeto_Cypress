describe('Teste de busca por "conecta"', () => {
  it('Realiza a busca por "conecta" e clica em Buscar', () => {
    // Visita a página
    cy.visit('https://redeintegra.mec.gov.br/tecnologias/programas-computador');

    cy.get('.v-progress-linear v-theme--customLightTheme v-locale--is-ltr').should('not.exist');

    // Digita conecta
    cy.get('input#input-368')
      .should('be.visible')
      .clear()
      .type('conecta');

    // Clica no botão Buscar 
    cy.contains('button', 'Buscar')
      .should('be.visible')
      .click();

    // Verifica se a URL mudou incluindo o termo 'conecta'
    cy.url().should('include', 'conecta');
  });
})