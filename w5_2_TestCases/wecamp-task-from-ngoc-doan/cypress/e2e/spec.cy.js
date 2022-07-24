import AutomationPracticeFormPage from "../pages/AutomationPracticeFormPage";

describe("Success Form", () => {
    beforeEach(() => {
        // cy.visit("/automation-practice-form");
        cy.visit("/");
    });

    it("should submit the form successfully", () => {
        // Load form Data
        cy.fixture("../fixtures/successForm.json").then((formData) => {
            // Fill in the form
            cy.get(AutomationPracticeFormPage.firstName).type(
                formData.firstName
            );
            cy.get(AutomationPracticeFormPage.lastName).type(formData.lastName);
            cy.get(AutomationPracticeFormPage.userEmail).type(
                formData.userEmail
            );
            cy.get(AutomationPracticeFormPage.mobile).type(formData.mobile);
            cy.get(AutomationPracticeFormPage.dateOfBitrh).type(
                formData.dateOfBitrh
            );
            // cy.get(AutomationPracticeFormPage.subjects).type(formData.subjects);
            // cy.get(AutomationPracticeFormPage.hobbies).type(formData.hobbies);
            // cy.get(AutomationPracticeFormPage.picture).type(formData.picture);
            cy.get(AutomationPracticeFormPage.currentAddress).type(
                formData.currentAddress
            );
            // cy.get(AutomationPracticeFormPage.state).type(formData.state);
            // cy.get(AutomationPracticeFormPage.city).type(formData.city);
            cy.get(AutomationPracticeFormPage.submitButton).click();

            // Assert that the success label is displayed
            cy.get(AutomationPracticeFormPage.successLabel).should(
                "be.visible"
            );
        });
    });
});
