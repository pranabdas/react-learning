describe("Heading test", () => {
  it("header contains correct text", () => {
    cy.visit("http://localhost:3000");

    cy.get("h1").invoke("text").should("equal", "Cypress end-to-end testing");
  });
});
