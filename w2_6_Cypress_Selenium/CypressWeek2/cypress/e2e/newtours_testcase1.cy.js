/// <reference types="Cypress" />

describe("Test case 1: Check Flight Finder flow", () => {
    it("Check Flight Finder flow", () => {
        // Login
        cy.visit("https://demo.guru99.com/test/newtours/");

        cy.fixture("success-login-form.json").then((loginForm) => {
            cy.get("input[name='userName']").type(loginForm.userName);
            cy.get("input[name='password']").type(loginForm.password);
            cy.get("input[name='submit']").click();
        });

        // assert that the user logged in successfully
        cy.url().should("include", "/login_sucess.php");
        // assert that the element's text includes the given substring
        cy.get("h3").should("include.text", "Login Successfully");

        //Switch to Flights tab
        cy.get("a[href='reservation.php']").click();
        cy.wait(1000);

        //Input Newtours Information
        cy.fixture("flightInformation.json").then((flightInformation) => {
            cy.get('input[name="tripType"]')
                .check(flightInformation.tripType)
                .should("have.value", flightInformation.tripType);

            cy.get('select[name="passCount"]')
                .select(flightInformation.passCount)
                .should("have.value", flightInformation.passCount);
            cy.get('select[name="fromPort"]')
                .select(flightInformation.fromPort)
                .should("have.value", flightInformation.fromPort);
            cy.get('select[name="fromMonth"]')
                .select(flightInformation.fromMonth)
                .should("have.value", flightInformation.fromMonth);
            cy.get('select[name="fromDay"]')
                .select(flightInformation.fromDay)
                .should("have.value", flightInformation.fromDay);
            cy.get('select[name="toPort"]')
                .select(flightInformation.toPort)
                .should("have.value", flightInformation.toPort);
            cy.get('select[name="toMonth"]')
                .select(flightInformation.toMonth)
                .should("have.value", flightInformation.toMonth);
            cy.get('select[name="toDay"]')
                .select(flightInformation.toDay)
                .should("have.value", flightInformation.toDay);
            cy.get('input[name="servClass"]')
                .check(flightInformation.servClass)
                .should("have.value", flightInformation.servClass);
            cy.get('select[name="airline"]')
                .select(flightInformation.airline)
                .should("have.value", flightInformation.airline);
            cy.get('input[name="findFlights"]').click();
        });
        // fill out the form
        cy.fixture("flightInformation.json").then((flightInformation) => {
            cy.get('input[name="tripType"]')
                .check(flightInformation.tripType)
                .should("have.value", flightInformation.tripType);

            cy.get('select[name="passCount"]')
                .select(flightInformation.passCount)
                .should("have.value", flightInformation.passCount);
            cy.get('select[name="fromPort"]')
                .select(flightInformation.fromPort)
                .should("have.value", flightInformation.fromPort);
            cy.get('select[name="fromMonth"]')
                .select(flightInformation.fromMonth)
                .should("have.value", flightInformation.fromMonth);
            cy.get('select[name="fromDay"]')
                .select(flightInformation.fromDay)
                .should("have.value", flightInformation.fromDay);
            cy.get('select[name="toPort"]')
                .select(flightInformation.toPort)
                .should("have.value", flightInformation.toPort);
            cy.get('select[name="toMonth"]')
                .select(flightInformation.toMonth)
                .should("have.value", flightInformation.toMonth);
            cy.get('select[name="toDay"]')
                .select(flightInformation.toDay)
                .should("have.value", flightInformation.toDay);
            cy.get('input[name="servClass"]')
                .check(flightInformation.servClass)
                .should("have.value", flightInformation.servClass);
            cy.get('select[name="airline"]')
                .select(flightInformation.airline)
                .should("have.value", flightInformation.airline);
            cy.get('input[name="findFlights"]').click();
        });
    });
});
