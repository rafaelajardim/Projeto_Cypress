describe('Teste o botão que leva para a Rede Integra', () => {
  it('Clica no botão "Acesse a Rede Integra"', () => {
    cy.visit('https://integra.ifrs.edu.br/');

    // Abrir na mesma aba
    cy.contains('a', 'Acesse a Rede Integra')
      .should('have.attr', 'href', 'https://redeintegra.mec.gov.br/')
      .invoke('removeAttr', 'target')
      .click();
    cy.url().should('include', 'redeintegra.mec.gov.br');
  });
});