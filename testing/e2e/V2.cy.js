describe("V2", () => {
  it("tests V2", () => {
    cy.viewport(1130, 792);
    cy.visit("http://localhost:5173/");
    cy.get("ul > a:nth-of-type(2)").click();
    cy.get("a:nth-of-type(4) img").click();
    cy.get("div.gap-4 button").click();
    cy.get("div.mt-20 > div:nth-of-type(1) > p").click();
    cy.get("div.flex a:nth-of-type(2) > p").click();
    cy.get("a:nth-of-type(5) img").click();
    cy.get("div.flex a:nth-of-type(2) > p").click();
    cy.get("div.mt-6 p:nth-of-type(1) > input").click();
    cy.get("div.my-5 p:nth-of-type(1) > input").click();
    cy.get("a:nth-of-type(2) img").click();
  });
});
//# recorderSourceMap=BCBDBEBFBGBHBIBJBKBLBMBNB
