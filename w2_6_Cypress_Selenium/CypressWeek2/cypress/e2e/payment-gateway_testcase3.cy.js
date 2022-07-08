/// <reference types="Cypress" />

/// <reference types="Cypress" />

describe("Test case 3: Check payment flow (negative case if leaves Expiration Month not selected)", () => {
    it("Check payment flow (negative case if leaves Expiration Month not selected)", () => {
        cy.visit("https://demo.guru99.com/payment-gateway/index.php");

        cy.fixture("payment-information.json").then((paymentForm) => {
            cy.get("input[type='submit']").click();

            cy.get("input[name='card_nmuber']").type(paymentForm.card_number);

            cy.get("select[name='year']")
                .select(paymentForm.expiration_year)
                .should("have.value", paymentForm.expiration_year);
            cy.get("input[name='cvv_code']").type(paymentForm.cvv_code);
            cy.get("input[name='submit']").click();

            // Assert on "Please select an item in the list." from month dropdown
            //
        });
    });
});
