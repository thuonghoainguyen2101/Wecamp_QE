class AutomationPracticeFormPage {
    constructor() {
        // First Name Input
        this.firstName = "#firstName";
        // Last Name Input
        this.lastName = "#lastName";
        // Email Input
        this.userEmail = "#userEmail";
        // Gender Input Radio
        this.gender = "custom-radio:nth-child";

        // Mobile Input
        this.mobile = "#userNumber";
        // Date of Birth Input
        this.dateOfBitrh = "#dateOfBirthInput";
        // Subjects Input
        this.subjects = "subjectsInput";
        // Hobbies Input Checkbox
        this.hobbies = "custom-checkbox:nth-child";

        // Picture Input
        this.picture = "#uploadPicture";
        // Current Address Input
        this.currentAddress = "#currentAddress";
        // State Input
        this.state = "#state";
        // City  Input
        this.city = "#city";
        // Submit button
        this.submitButton = "#submit";
        // Success Label Modal
        this.successLabel = "example-modal-sizes-title-lg";
        // Close button
        this.closeButton = "#closeLargeModal";
    }
}

module.exports = AutomationPracticeFormPage;
