describe("RC3", () => {
  it("tests RC3", () => {
    cy.viewport(1130, 792);
    cy.visit("http://localhost:5173/");
    cy.get("div.flex > div.flex > div > img").click();
    cy.get("#root > div > div.flex > div.flex > div p:nth-of-type(1)").click();
    cy.get("a:nth-of-type(2) > p").click();
    cy.get("a:nth-of-type(3) img").click();
    cy.get("button:nth-of-type(2)").click();
    cy.get("div:nth-of-type(2) > button").click();
    cy.get("a:nth-of-type(2) > p").click();
    cy.get("a:nth-of-type(9) img").click();
    cy.get("div.gap-4 button:nth-of-type(1)").click();
    cy.get("button:nth-of-type(3)").click();
    cy.get("div:nth-of-type(2) > button").click();
    cy.get("div.flex > div.flex > a > img").click();
    cy.get("div.flex > div.flex > div > img").click();
    cy.get("div.flex > div.flex > div p:nth-of-type(1)").click();
  });
});
//# recorderSourceMap=BCBDBEBFBGBHBIBJBKBLBMBNBOBPBQBRB
