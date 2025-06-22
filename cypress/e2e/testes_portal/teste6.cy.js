describe('Menu - Verifica submenu do item Portfólio', () => {
  it('Clica em Portfólio e verifica se Ambientes de Inovação aparece', () => {
    cy.visit('https://integra.ifrs.edu.br');

    // Clica no item "Portfólio"
    cy.get('a.menu__link--has-children')
      .contains('Portfólio')
      .should('be.visible')
      .click();

    // Verifica se aparecem submenu
    cy.contains('a', 'Pessoas')
    cy.contains('a', 'Laboratórios')
    cy.contains('a', 'Grupos de Pesquisa CNPq')
    cy.contains('a', 'Ambientes de Inovação')
      .should('be.visible');
  });
});