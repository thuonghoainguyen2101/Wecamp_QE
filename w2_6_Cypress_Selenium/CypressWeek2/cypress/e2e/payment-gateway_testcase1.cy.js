/// <reference types="Cypress" />

describe("Test case 1: Check payment flow (positive case)", () => {
    it("Check payment flow (positive case)", () => {
        cy.visit("https://demo.guru99.com/payment-gateway/index.php");

        cy.fixture("payment-information.json").then((paymentForm) => {
            cy.get("select[name='quantity']")
                .select(paymentForm.quantity)
                .should("have.value", paymentForm.quantity);
            cy.get("input[type='submit']").click();

            // Assert if Pay Amount is $80.00
            cy.get("font:nth-child(2)").should(
                "include.text",
                paymentForm.amount
            );

            // Assert if button Pay below now has $80.00 text
            cy.get("input[name='submit']").should(
                "include.value",
                "Pay $" + paymentForm.amount
            );

            cy.get("input[name='card_nmuber']").type(paymentForm.card_number);
            cy.get("select[name='month']")
                .select(paymentForm.expiration_month)
                .should("have.value", paymentForm.expiration_month);
            cy.get("select[name='year']")
                .select(paymentForm.expiration_year)
                .should("have.value", paymentForm.expiration_year);
            cy.get("input[name='cvv_code']").type(paymentForm.cvv_code);
            cy.get("input[name='submit']").click();

            // Assert if Payment successful! appeared.
            cy.get("h2").should("include.text", "Payment successfull!");
        });
    });
});
