/* eslint-disable jest/valid-expect */
/// <reference types="Cypress"/>

const { default: axios } = require("axios");

/* eslint-disable no-undef */
describe("bookish application", () => {
  before(() => {
    return axios
      .delete("http://localhost:8080/books?_cleanup=true")
      .catch((err) => err);
  });

  afterEach(() => {
    return axios
      .delete("http://localhost:8080/books?_cleanup=true")
      .catch((err) => err);
  });

  beforeEach(() => {
    const books = [
      { id: 1, name: "Refactoring" },
      { id: 2, name: "Domain-driven design" },
      { id: 3, name: "Build Microservices" },
    ];

    return books.map((item) =>
      axios.post("http://localhost:8080/books", item, {
        headers: { "Content-Type": "application/json" },
      })
    );
  });

  it("visit the bookish", () => {
    cy.visit("http://localhost:3000");
    cy.get("h2[data-test='heading']").contains("Bookish");
  });

  it("shows a book list", () => {
    cy.visit("http://localhost:3000");
    cy.get("div[data-test='book-list']").should("exist");
    // cy.get("div.book-item").should("have.length", 2 )
    cy.get("div.book-item").should((books) => {
      expect(books).to.have.length(3);
      const titles = [...books].map((x) => x.querySelector("h2").innerHTML);
      expect(titles).to.deep.equal([
        "Refactoring",
        "Domain-driven design",
        "Build Microservices",
      ]);
    });
  });

  it("Goes to the detail page", () => {
    cy.visit("http://localhost:3000");
    cy.get("div.book-item").contains("View Details").eq(0).click();
    cy.url().should("include", "/books/1");
    cy.get("h2.book-title").contains("Refactoring");
  });
});
