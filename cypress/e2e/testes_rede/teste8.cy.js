describe('Teste rodapé GOV.BR', () => {
  it('Testar o link da imagem gov.br no rodapé', () => {
    cy.visit('https://redeintegra.mec.gov.br');

    // Espera o rodapé carregar
    cy.get('footer', { timeout: 10000 }).should('be.visible');

    // Seleciona o link 
    cy.get('footer a[href="https://www.gov.br/"]')
      .should('have.attr', 'target', '_blank') // Abre em nova aba
      .should('be.visible')                    // Está visível
      .and('have.attr', 'href', 'https://www.gov.br/'); // Confirma URL

    // Abrindo na mesma aba
    cy.get('footer a[href="https://www.gov.br/"]')
      .invoke('removeAttr', 'target') 
      .click();

    // Resultado
    cy.url().should('include', 'gov.br');
  });
});

