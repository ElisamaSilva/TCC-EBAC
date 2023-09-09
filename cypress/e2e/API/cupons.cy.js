describe('Testes da API de Cupons', () => {

    it('Deve listar todos os cupons cadastrados', () => {
cy.request({
    method: 'GET',
url: '',
headrs:{
    authorization: ''
}

}).should((reponse) => {
    cy.log(response)
    expect (response.status).to.equal(200)
})

    })

})