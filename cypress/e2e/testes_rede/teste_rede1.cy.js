describe('Teste para link de notícia na Rede Integra', () => {
  it('Clica no título da notícia e verifica se entrou na página da notícia', () => {
    cy.visit('https://redeintegra.mec.gov.br/');

    // Espera as notícias carregarem
    cy.contains('h3.noticia-titulo', 'Reitor do Ifal representa o Conif no Fórum Nacional de Aprendizagem Profissional', { timeout: 10000 })
      .should('be.visible')
      .click();

    // Verifica se a URL mudou 
    cy.url().should('include', '/noticia/').and('not.include', '/noticias/');

    // Verifica resultado
    cy.get('h1, .noticia-titulo')
      .should('contain.text', 'Reitor do Ifal representa o Conif no Fórum Nacional de Aprendizagem Profissional');
  });
});




