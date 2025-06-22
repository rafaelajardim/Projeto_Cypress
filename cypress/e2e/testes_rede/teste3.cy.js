describe('Teste do link Portal Integra que está dentro de um <p>', () => {
  it('Ver se o link Portal Integra está ok', () => {
    cy.visit('https://redeintegra.mec.gov.br/');
    
    cy.contains('a', 'Portal Integra')
      .scrollIntoView()
      .should('be.visible')
      .and('have.attr', 'href', 'https://integra.ifrs.edu.br/vitrine/integra')
      .and('have.attr', 'target', '_blank');
  });
});







