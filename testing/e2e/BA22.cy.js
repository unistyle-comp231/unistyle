describe("BA22", () => {
  it("tests BA22", () => {
    cy.viewport(1115, 791);
    cy.visit("http://localhost:5174/add");
    cy.get("a:nth-of-type(2) > p").click();
    cy.get("a:nth-of-type(1) > p").click();
    cy.get("label:nth-of-type(1) > img").click();
    cy.get("#image1").type("C:\\fakepath\\TSHIRT.png");
    cy.get("div:nth-of-type(2) > input").click();
    cy.get("div:nth-of-type(2) > input").type("N");
    cy.get("div:nth-of-type(2) > input").type("New ");
    cy.get("div:nth-of-type(2) > input").type("New T");
    cy.get("div:nth-of-type(2) > input").type("New T-shirt");
    cy.get("textarea").type("B");
    cy.get("textarea").type("Black one.");
    cy.get("div.flex-col input").click();
    cy.get("div.flex-col input").type("1");
    cy.get("div.flex-col input").type("2");
    cy.get("div.flex-col input").dblclick();
    cy.get("div:nth-of-type(5) > div").click();
    cy.get("div:nth-of-type(5) div:nth-of-type(2) > p").click();
    cy.get("div:nth-of-type(5) div:nth-of-type(3) > p").click();
    cy.get("div.w-full button").click();
    cy.get("a:nth-of-type(2)").click();
    cy.get("div:nth-of-type(4) > div > p").click();
  });
});
//# recorderSourceMap=BCBDBEBFBGBHBIBJAJAJAJAJBKAKAKBLALALBMAMAMAMAMAMAMAMBNANANANANBOAOAOBPBQBRBSBTBUBVBWBXBYB
