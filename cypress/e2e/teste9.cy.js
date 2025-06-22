describe('Teste de links de Rodapé - Serviços', () => {
  it('Verifica os links da seção Serviços no rodapé do Portal Integra', () => {
    cy.visit('https://integra.ifrs.edu.br/');

    // Vai até o final da página 
    cy.scrollTo('bottom');

    // Verifica se a seção "Serviços" está visível
    cy.contains('span', 'Serviços').should('be.visible');

    // Verifica o link "Prestação de Serviços"
    cy.get('a[href="/servicos"]')
      .should('be.visible')
      .and('contain.text', 'Prestação de Serviços');

    // Verifica o link "Consultoria"
    cy.get('a[href="/servicos/consultoria"]')
      .should('be.visible')
      .and('contain.text', 'Consultoria');

    // Verifica o link "Mentorias"
    cy.get('a[href="/servicos/mentoria"]')
      .should('be.visible')
      .and('contain.text', 'Mentorias');
  });
});