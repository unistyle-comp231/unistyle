describe("V1", () => {
  it("tests V1", () => {
    cy.viewport(1130, 792);
    cy.visit("http://localhost:5173/");
    cy.get("div.flex a:nth-of-type(2) > p").click();
    cy.get("div.items-center a:nth-of-type(3) > p").click();
    cy.get("#root > div > div.flex").click();
    cy.get("a:nth-of-type(4) > p").click();
    cy.get("ul > a:nth-of-type(1) > p").click();
    cy.get("#root > div > div:nth-of-type(3) > div:nth-of-type(2) a:nth-of-type(3) img").click();
    cy.get("button:nth-of-type(2)").click();
  });
});
//# recorderSourceMap=BCBDBEBFBGBHBIBJBKB
