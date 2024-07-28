/* eslint-disable no-undef */
describe("bookish application",()=>{
    it("visit the bookish",()=>{
        cy.visit("http://localhost:3000/")
        cy.get("h2[data-test='heading']").contains("Bookish")
    })
})