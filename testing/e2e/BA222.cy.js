describe("BA222", () => {
  it("tests BA222", () => {
    cy.viewport(1130, 792);
    cy.visit("http://localhost:5174/list");
    cy.get("div:nth-of-type(1) > input").click();
    cy.get("div:nth-of-type(1) > input").type("admin@unistyle.com");
    cy.get("div:nth-of-type(2) > input").click();
    cy.get("div:nth-of-type(2) > input").type("admin@unistyle.com");
    cy.get("button").click();
    cy.get("div:nth-of-type(2) > input").dblclick();
    cy.get("div:nth-of-type(2) > input").type("unistyle123");
    cy.get("#root > div > div.min-h-screen button").click();
    cy.get("div:nth-of-type(2) > div > p").click();
    cy.get("a:nth-of-type(1) > p").click();
    cy.get("label:nth-of-type(1) > img").click();
    cy.get("#image1").type("C:\\fakepath\\TSHIRT.png");
    cy.get("div:nth-of-type(2) > input").click();
    cy.get("div:nth-of-type(2) > input").type("T");
    cy.get("div:nth-of-type(2) > input").type("Tshirt");
    cy.get("textarea").click();
    cy.get("textarea").type("B");
    cy.get("textarea").type("Black");
    cy.get("div.flex-col input").click();
    cy.get("div.flex-col input").type("1");
    cy.get("div.flex-col input").click();
    cy.get("div:nth-of-type(5) div:nth-of-type(1) > p").click();
    cy.get("div:nth-of-type(5) div:nth-of-type(2) > p").click();
    cy.get("div:nth-of-type(5) div:nth-of-type(3) > p").click();
    cy.get("div.w-full button").click();
  });
});
//# recorderSourceMap=BCBDBEBFBGBHAHAHBIBJBKAKAKBLBMBNBOBPBQBRBSASASBTBUAUAUBVAVAVBWBXBYBZBaBbBcB
