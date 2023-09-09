Cypress.Commands.add('addProduto', (produto, quantidade) => {
    cy.get('[class= "product-block grid"]')
      .contains(produto).click()
    cy.get('.button-variable-item-M').click()
    cy.get('.button-variable-item-Blue').click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()

})