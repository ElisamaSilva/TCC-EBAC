describe('Adicionando produtos ao carrinho', () => {
  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/page/2/')
  });

  it('Deve adicionar 3 produtos diferentes ao carinho', () => {
    //Seleciona e Adiciona Produtos ao Carrinho
    //PRODUTO 1
    cy.addProduto('Atomic Endurance Running Tee (V-neck)', 1)
    cy.get('.woocommerce-message').should('contain', '“Atomic Endurance Running Tee (V-neck)” foi adicionado no seu carrinho.')

    //PRODUTO 2
    cy.get('.search').click().type('Cassia Funnel Sweatshirt')
    cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search').click()
    cy.get('.button-variable-item-M').click()
    cy.get('.button-variable-item-Purple').click()
    cy.get('.input-text').clear().type('1')
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message').should('contain', '“Cassia Funnel Sweatshirt” foi adicionado no seu carrinho.')

    //PRODUTO 3
    cy.get('.search').click().type('Augusta Pullover Jacket')
    cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search').click()
    cy.get('.button-variable-item-M').click()
    cy.get('.button-variable-item-Red').click()
    cy.get('.input-text').clear().type('1')
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message').should('contain', '“Augusta Pullover Jacket” foi adicionado no seu carrinho.')

    //Ver itens adicionados ao Carrinho
    cy.get('.woocommerce-message > .button').click()
    cy.get('.checkout-button').click()

    // Preenche as opções no checkout com dados aleatorios e finaliza a compra
    cy.get('.showlogin').click()
    cy.get('#username').type('aluno_ebac@teste.com')
    cy.get('#password').type('teste@teste.com')
    cy.get('.woocommerce-button').click()
    cy.get('#terms').click()
    cy.get('#place_order').click()

    // Valida a compra
    cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.');


  })

});