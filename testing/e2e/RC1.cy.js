describe("RC1", () => {
  it("tests RC1", () => {
    cy.viewport(1130, 792);
    cy.visit("http://localhost:5173/");
    cy.get("div.flex > div.flex > div > img").click();
    cy.get("input[type='email']").click();
    cy.get("input[type='email']").type("");
    cy.get("input[type='email']").type("U");
    cy.get("input[type='email']").type("User1@");
    cy.get("input[type='email']").type("User1@mail.com");
    cy.get("input[type='password']").type("U");
    cy.get("input[type='password']").type("User123456");
    cy.get("button").click();
    cy.get("div.flex > div.flex > div > div > div").click();
    cy.get("#root > div > div.flex > div.flex > div p:nth-of-type(1)").click();
    cy.get("p:nth-of-type(2)").click();
    cy.get("a:nth-of-type(2) > p").click();
    cy.get("a:nth-of-type(2) img").click();
    cy.get("div:nth-of-type(2) > button").click();
    cy.get("button:nth-of-type(2)").click();
    cy.get("div:nth-of-type(2) > button").click();
  });
});
//# recorderSourceMap=BCBDBEBFBGAGAGBHAHAHBIAIAIAIBJAJBKAKAKAKAKBLALALALBMBNBOBPBQBRBSBTBUB
