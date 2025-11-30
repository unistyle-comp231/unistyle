describe("V5", () => {
  it("tests V5", () => {
    cy.viewport(1130, 792);
    cy.visit("http://localhost:5173/product/690ed9a2a6f4ce31a888c22d");
    cy.get("button:nth-of-type(2)").click();
    cy.get("div:nth-of-type(2) > button").click();
    cy.get("a:nth-of-type(2) > p").click();
    cy.get("a:nth-of-type(7) img").click();
    cy.get("div.gap-4 button").click();
    cy.get("div:nth-of-type(2) > button").click();
    cy.get("div.flex a:nth-of-type(2) > p").click();
    cy.get("div.items-center > div.flex p").click();
    cy.get("div.flex > div.flex > div > img").click();
  });
});
//# recorderSourceMap=BCBDBEBFBGBHBIBJBKBLBMB
