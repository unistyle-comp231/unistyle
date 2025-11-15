describe("V3", () => {
  it("tests V3", () => {
    cy.viewport(1130, 792);
    cy.visit("http://localhost:5173/collection");
    cy.get("a:nth-of-type(3) img").click();
    cy.get("button:nth-of-type(3)").click();
    cy.get("a:nth-of-type(2) > p").click();
    cy.get("a:nth-of-type(4) img").click();
    cy.get("div.flex a:nth-of-type(2) > p").click();
    cy.get("a:nth-of-type(8) img").click();
    cy.get("button:nth-of-type(2)").click();
    cy.get("div.border-t-2 a:nth-of-type(1) img").click();
  });
});
//# recorderSourceMap=BCBDBEBFBGBHBIBJBKBLB
