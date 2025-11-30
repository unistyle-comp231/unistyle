describe("RC2", () => {
  it("tests RC2", () => {
    cy.viewport(1130, 792);
    cy.visit("http://localhost:5173/");
    cy.get("div.flex > div.flex > div > img").click();
    cy.get("p:nth-of-type(2)").click();
    cy.get("input[type='text']").click();
    cy.get("input[type='text']").type("U");
    cy.get("input[type='text']").type("User2");
    cy.get("input[type='email']").type("U");
    cy.get("input[type='email']").type("User2@");
    cy.get("input[type='email']").type("User2@mail.com");
    cy.get("input[type='password']").type("U");
    cy.get("input[type='password']").type("User123456");
    cy.get("button").click();
    cy.get("#root > div > div.flex").click();
    cy.get("div.flex > div.flex > div > img").click();
    cy.get("#root > div > div.flex > div.flex > div p:nth-of-type(1)").click();
    cy.get("a:nth-of-type(2) > p").click();
    cy.get("a:nth-of-type(4) img").click();
    cy.get("div.gap-4 button").click();
    cy.get("div:nth-of-type(2) > button").click();
    cy.get("button > svg").click();
  });
});
//# recorderSourceMap=BCBDBEBFBGBHAHAHAHAHBIAIAIBJAJAJAJAJBKAKAKAKBLALBMAMAMAMAMBNANANANBOBPBQBRBSBTBUBVBWB
