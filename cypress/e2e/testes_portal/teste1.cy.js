describe('Teste no Integra Chat', () => {
  it('digita mensagem e clica no botão enviar', () => {
    cy.visit('https://integra.ifrs.edu.br/chat');

    cy.get('input.form-control.text-input')
      .should('be.visible')
      .type('Quais documentos são necessários para iniciar o processo de depósito de patente no INPI?');

    cy.get('img[alt="Enviar Mensagem"]')
      .parents('button')
      .should('not.be.disabled')
      .click();
  });
});