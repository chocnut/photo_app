const { context } = require("msw");

describe("Home", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://api.pexels.com/v1/curated?**", {
      fixture: "curated.json",
    });
    cy.intercept("GET", "https://api.pexels.com/v1/search?**", {
      fixture: "search.json",
    });
    cy.visit("http://localhost:3000/");
  });

  describe("Curated", () => {
    it("can paginate the list of curated photos", () => {
      cy.get('[data-testid="next"]').should("have.length", 1);
      cy.get('[data-testid="prev"]').should("have.length", 1);

      cy.get('[data-testid="next"]').click();
      cy.contains("Daniel Nouri");
      cy.contains("https://www.pexels.com/@danielnouri");
    });
  });

  describe("Search", () => {
    it("can use a text input to search for photos I’m interested", () => {
      cy.get("input").should("be.visible");
      cy.get("button").should("be.visible");
    });

    it("can see the results of my search in the photo viewing area", () => {
      cy.get("input").should("be.visible").eq(0).type("Cars");
      cy.get("button").should("be.visible").eq(0).click();

      cy.contains("Pixabay");
      cy.contains("https://www.pexels.com/@pixabay");
    });

    it("can paginate search results if needed", () => {
      cy.get("input").should("be.visible").eq(0).type("Cars");
      cy.get("button").should("be.visible").eq(0).click();

      cy.get('[data-testid="next"]').click();
      cy.contains("Charles Kettor");
      cy.contains("https://www.pexels.com/@charles-kettor-268979");
    });
  });
});
