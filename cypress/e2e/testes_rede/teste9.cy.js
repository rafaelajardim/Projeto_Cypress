describe('Teste de pesquisa de laboratório no mapa', () => {
  it('Deve digitar laboratório e clicar no botão lupa para buscar', () => {
    cy.visit('https://redeintegra.mec.gov.br/');

    // Digita laboratório
    cy.get('#input-29').type('laboratório', { force: true });

    // Clica no ícone lupa
    cy.get('#input-29')
      .parents('.v-field')
      .find('i.mdi-magnify')
      .click({ force: true });
  });
});



