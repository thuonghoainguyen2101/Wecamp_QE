/// <reference types="Cypress" />

describe("ToolsQA Practice Form", () => {
    it("Submit form successfully", () => {
        cy.visit("https://demoqa.com/");
        cy.get(".card:nth-child(2) svg").click();
        cy.get("#item-0").type("Cypress");

        cy.get("#firstName").type("Cypress");
        cy.get("#lastName").type("Test");
        cy.get("#userEmail").type("email@example.com");
        cy.get(".custom-radio:nth-child(1) > .custom-control-label").check();
        cy.get("userNumber").type("1234567890");
        cy.get("#dateOfBirthInput").click();
        cy.get(".react-datepicker__day--010:nth-child(1)").click();
        cy.get(".subjects-auto-complete__value-container").click();
        cy.get("#react-select-2-option-0").click();
        cy.get(".custom-checkbox:nth-child(1) > .custom-control-label").check();
        cy.get("#uploadPicture").type("C:\fakepath\test.txt");
        cy.get("#currentAddress").type("123 Main St");
        cy.get("state").click();
        cy.get("#react-select-3-option-0").click();
        cy.get("#city").click();
        cy.get("#react-select-4-option-0").click();
        cy.get(".col-12:nth-child(3)").click();
        cy.get("#submit").click();

        // assert
        cy.get("th:nth-child(2)").should(
            "contain",
            "Thanks for submitting the form"
        );
    });
});
