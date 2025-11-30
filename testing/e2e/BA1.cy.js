describe("BA1", () => {
  it("tests BA1", () => {
    cy.viewport(1130, 792);
    cy.visit("http://localhost:5174/");
    cy.get("div:nth-of-type(1) > input").click();
    cy.get("div:nth-of-type(1) > input").type("admin@unistyle.com");
    cy.get("div:nth-of-type(2) > input").click();
    cy.get("div:nth-of-type(2) > input").type("unistyle123");
    cy.get("button").click();
    cy.get("a:nth-of-type(1) > p").click();
    cy.get("a:nth-of-type(2) > p").click();
    cy.get("div.w-\\[18\\%\\]").click();
    cy.get("a:nth-of-type(3) > p").click();
    cy.get("div:nth-of-type(1) > select").click();
    cy.get("div:nth-of-type(1) > select").click();
  });
});
//# recorderSourceMap=BCBDBEBFBGAGAGBHBIBJAJAJBKBLBMBNBOB
