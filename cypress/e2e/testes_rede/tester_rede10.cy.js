describe('Teste de pesquisa por serviços na barra de pesquisa', () => {
  it('Deve digitar serviço e clicar em buscar', () => {
    cy.visit('https://redeintegra.mec.gov.br/');

    // Digita laboratório
    cy.get('#input-29').type('serviços', { force: true });

    // Clicar 
    cy.get('#input-29')
      .parents('.v-field')
      .find('i.mdi-magnify')
      .click({ force: true });
  });
});



