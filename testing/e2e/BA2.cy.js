describe("BA2", () => {
  it("tests BA2", () => {
    cy.viewport(1115, 792);
    cy.visit("http://localhost:5174/list");
    cy.get("a:nth-of-type(1)").click();
    cy.get("label:nth-of-type(1) > img").click();
    cy.get("#image1").type("C:\\fakepath\\TSHIRT.png");
    cy.get("div:nth-of-type(2) > input").click();
    cy.get("div:nth-of-type(2) > input").type("B");
    cy.get("div:nth-of-type(2) > input").type("Black ");
    cy.get("div:nth-of-type(2) > input").type("Black T");
    cy.get("div:nth-of-type(2) > input").type("Black T shirt");
    cy.get("div:nth-of-type(2) > input").type("Black T-shirt");
    cy.get("textarea").click();
    cy.visit("chrome://new-tab-page/");
    cy.visit("https://chatgpt.com/");
    cy.get("p").click();
    cy.get("#prompt-textarea").type("D");
    cy.get("#prompt-textarea").type("Dame este texto escrito");
    cy.type("{enter}");
    cy.get("[data-testid='conversation-turn-2'] > div").click();
    cy.get("textarea").click();
    cy.get("textarea").type("The most natural performance tee. Classic, easy to wear, and effortlessly versatile. Made from 100% Pima cotton for a soft hand-feel and breathability, perfect on its own or layered.\n\nRibbed collar designed to maintain shape wash after wash\n\nMade of 100% Pima cotton, for the ultimate soft hand-feel\n\nSmooth, flat surface for a refined finish\n\nDo it all tee that is perfect on its own or layered\n\nNatural breathability that outperforms synthetic-rich blends");
    cy.get("div:nth-of-type(1) > select").dblclick();
    cy.get("div:nth-of-type(2) > select").click();
    cy.get("div:nth-of-type(2) > select").click();
    cy.get("div.flex-col input").click();
    cy.get("div.flex-col input").type("1");
    cy.get("div.flex-col input").click();
    cy.get("div.flex-col input").type("2");
    cy.get("div.flex-col input").click();
    cy.get("div:nth-of-type(5) div:nth-of-type(2) > p").click();
    cy.get("div:nth-of-type(5) div:nth-of-type(3) > p").click();
    cy.get("div.w-full button").click();
    cy.get("#shopify-section-template--19390472978484__product-group div.is-open > div").click();
  });
});
//# recorderSourceMap=BCBDBEBFBGBHBIBJAJAJBKAKAKBLALALBMAMAMAMAMBNBOBPBQAQAQAQAQBRARARARARARARBSASASBTBUAUBVAVAVAVAVAVAVBWBXBYBZBaBbBcBdBeBfBgBBhBBiBB
