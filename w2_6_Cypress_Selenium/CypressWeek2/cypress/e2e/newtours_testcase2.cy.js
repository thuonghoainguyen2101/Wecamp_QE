/// <reference types="Cypress" />
// Test case 2: Check the login flow (negative case)

describe("Test case 2: Check the login flow (negative case)", () => {
    it("Check the login flow (negative case)", () => {
        // Login
        cy.visit("https://demo.guru99.com/test/newtours/");

        cy.fixture("fail-login-form.json").then((loginForm) => {
            cy.get("input[name='userName']").type(loginForm.userName);
            cy.get("input[name='password']").type(loginForm.password);
            cy.get("input[name='submit']").click();
        });

        // assert that the user logged in successfully
        cy.get("span").should("be.visible");
        cy.get("span").should(
            "include.text",
            "Enter your userName and password correct"
        );
    });
});
