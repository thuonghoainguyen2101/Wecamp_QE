/// <reference types="Cypress" />

/// <reference types="Cypress" />

describe("Test case 4: Check payment flow (negative case if Card Number had shorter than 16 numbers)", () => {
    it("Check payment flow (negative case if Card Number had shorter than 16 numbers)", () => {
        cy.visit("https://demo.guru99.com/payment-gateway/index.php");

        cy.fixture("payment-information.json").then((paymentForm) => {
            cy.get("input[type='submit']").click();

            cy.get("input[name='card_nmuber']").type("1234567890");

            cy.get("select[name='month']")
                .select(paymentForm.expiration_month)
                .should("have.value", paymentForm.expiration_month);
            cy.get("select[name='year']")
                .select(paymentForm.expiration_year)
                .should("have.value", paymentForm.expiration_year);
            cy.get("input[name='cvv_code']").type(paymentForm.cvv_code);
            cy.get("input[name='submit']").click();

            // Assert if this dialog appeared
            cy.on("window:alert", (str) => {
                expect(str).to.equal("Check card number is 16 digits!");
            });
        });
    });
});
