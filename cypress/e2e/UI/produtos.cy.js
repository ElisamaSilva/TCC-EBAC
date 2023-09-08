describe('Adicionando produtos ao carrinho', () => {
  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/page/2/')
  });

  it('Deve adicionar produtos ao carinho', () => {
    //Adiciona Produtos
    cy.get('[class= "product-block grid"]')
      .contains('Atomic Endurance Running Tee (V-neck)').click()
    cy.get('.button-variable-item-M').click()
    cy.get('.button-variable-item-Blue').click()
    cy.get('.input-text').clear().type('1')
    cy.get('.single_add_to_cart_button').click()

    /*cy.get('[class= "product-block grid"]')
    .contains('Augusta Pullover Jacket').click()
cy.get('.button-variable-item-M').click()
    cy.get('.button-variable-item-Red').click()
    cy.get('.input-text').clear().type('1')*/

    /*cy.addProdutos('Atlas Fitness Tank', 4)
    cy.get('.woocommerce-message > .button').click()
    cy.get('.checkout-button').click()*/

    // Valida se os itens foram adicionados com sucesso
    // cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.');
  });

});