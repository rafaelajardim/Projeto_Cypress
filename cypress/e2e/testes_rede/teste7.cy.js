describe('Teste Rodapé - imagem do GOV.BR', () => {
  it('Deve conter o link para gov.br no rodapé e estar correto', () => {
    cy.visit('https://redeintegra.mec.gov.br');

    // Espera o rodapé carregar
    cy.get('footer', { timeout: 10000 }).should('be.visible');

    // Seleciona o link GOV.BR no rodapé
    cy.get('footer a[href="https://www.gov.br/"]')
      .should('have.attr', 'target', '_blank') // nova aba
      .should('be.visible')                   
      .and('have.attr', 'href', 'https://www.gov.br/'); 

    // Simula o clique abrindo na mesma aba
    cy.get('footer a[href="https://www.gov.br/"]')
      .invoke('removeAttr', 'target') 
      .click();

    // Resultado
    cy.url().should('include', 'gov.br');
  });
});


