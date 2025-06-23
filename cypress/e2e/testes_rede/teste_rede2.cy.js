describe('Teste imagem de perguntas frequentes', () => {
  it('Verifica e clica na imagem com alt Perguntas Frequentes', () => {
    cy.visit('https://redeintegra.mec.gov.br/');

    cy.get('a[href="/faq"] img[alt="Perguntas Frequentes"]')
      .should('be.visible')
      .and('have.attr', 'src', '/footer/faq.svg')
      .parents('a')
      .click();

    cy.url().should('include', '/faq');
  });
})






