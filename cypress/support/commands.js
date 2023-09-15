Cypress.Commands.add('autenticacao', (usuario, senha) => {
  cy.request({
      method: 'POST',
      url: "http://lojaebac.ebaconline.art.br/rest-api/auth",
      body: {
          "usuario": usuario,
          "senha": senha 
      }
  }).then((response) => {
      expect(response.status).to.equal(200)
      return response.body.authorization
  })
})