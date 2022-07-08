/// <reference types="Cypress" />

describe("Test case 2: Check payment flow (negative case if Card Number had characters)", () => {
    it("Check payment flow (negative case if Card Number had characters)", () => {
        cy.visit("https://demo.guru99.com/payment-gateway/index.php");
        cy.get("input[type='submit']").click();
        cy.get("input[name='card_nmuber']").type("z");
        cy.get("#message1").should(
            "include.text",
            "Characters are not allowed"
        );
    });
});
