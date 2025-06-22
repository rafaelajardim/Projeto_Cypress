describe('Teste para preencher campos e botão limpar', () => {
  it('Preenche e limpa os campos do formulário de contato', () => {
    cy.visit('https://integra.ifrs.edu.br/...'); // Substitua com a URL correta

    // Preenche dados
    cy.get('#emailContato').type('Rafaela');
    cy.get('input[type="email"]').type('rafa.jardim@gmail.com');
    cy.get('input[type="tel"]').type('55999999999');
    cy.get('select').select('Reitoria');

    // Clica em limpar
    cy.get('button.btn-reset').click();

    // Ver se os campos estão vazios após limpar
    cy.get('#emailContato').should('have.value', '');
    cy.get('input[type="email"]').should('have.value', '');
    cy.get('input[type="tel"]').should('have.value', '');
    cy.get('textarea').should('have.value', '');
  });
});