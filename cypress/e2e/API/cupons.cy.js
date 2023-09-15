describe("Testes automatizados para o serviço de cupons da EBAC-SHOP", () => {
    beforeEach(() => {
      // Autenticação
      cy.request({
        method: "POST",
        url: "http://lojaebac.ebaconline.art.br/rest-api/auth",
        headers: {
          authorization: "Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy",
        },
        body: {
          usuario: "admin_ebac",
          senha: "@admin!&b@c!2022"
        },
      });
    });
  
    it("Deve listar todos os cupons cadastrados", () => {
      cy.request({
        method: "GET",
        url: "http://lojaebac.ebaconline.art.br/rest-api/coupons",
      }).then((response) => {
        expect(response.status).to.eq(200);
        // Você pode adicionar mais asserções aqui para validar a resposta.
      });
    });
  
    it("Deve listar um cupom por ID", () => {
      // Substitua {id_do_cupom} pelo ID real do cupom
      cy.request({
        method: "GET",
        url: "http://lojaebac.ebaconline.art.br/rest-api/coupons/{id_do_cupom}",
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.message).to.eq("OK");
      });
    });
  
    it("Deve cadastrar um novo cupom", () => {
      const cupom = {
        code: "Ganhe10",
        amount: "10.00",
        discount_type: "fixed_product",
        description: "Cupom de teste",
      };
  
      cy.request({
        method: "POST",
        url: "http://lojaebac.ebaconline.art.br/rest-api/coupons",
        body: cupom,
      }).then((response) => {
        expect(response.status).to.eq(201);
      });
    });
  
    it("Não deve permitir a criação de cupons com o mesmo nome", () => {
      const cupomExistente = {
        code: "CupomExistente",
        amount: "5.00",
        discount_type: "fixed_product",
        description: "Cupom existente de teste",
      };
  
      cy.request({
        method: "POST",
        url: "http://lojaebac.ebaconline.art.br/rest-api/coupons",
        body: cupomExistente,
      }).then((response) => {
        expect(response.status).to.eq(201);
  
        // Tente criar um novo cupom com o mesmo nome (deve falhar)
        cy.request({
          method: "POST",
          url: "http://lojaebac.ebaconline.art.br/rest-api/coupons",
          body: cupomExistente,
          failOnStatusCode: false, // Evita que o Cypress falhe no teste
        }).then((response) => {
          expect(response.status).to.eq(400);
          expect(response.body.message).to.eq("Bad Request");
        });
      });
    });
  });
  