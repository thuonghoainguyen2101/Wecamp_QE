/// <reference types="Cypress" />

describe("empty spec", () => {
    it("signup and login user", () => {
        cy.visit("https://demo.guru99.com/test/newtours/");
        // <input name="..."> --> input[name="..."]
        // <h1 id="..."> --> #...

        // click to ResigterPage (linkClick)
        cy.get('a[href="register.php"]').first().click();

        // fill out the form
        cy.fixture("registerForm.json").then((registerForm) => {
            cy.get('input[name="firstName"]').type(registerForm.firstName);
            cy.get('input[name="lastName"]').type(registerForm.lastName);
            cy.get('input[name="phone"]').type(registerForm.phone);
            cy.get('input[name="userName"]').type(registerForm.userName);
            cy.get('input[name="address1"]').type(registerForm.address1);
            cy.get('input[name="city"]').type(registerForm.city);
            cy.get('input[name="state"]').type(registerForm.state);
            cy.get('input[name="postalCode"]').type(registerForm.postalCode);
            cy.get('select[name="country"]')
                .select(registerForm.country)
                .should("have.value", registerForm.country);
            cy.get('input[name="email"]').type(registerForm.email);
            cy.get('input[name="password"]').type(registerForm.password);
            cy.get('input[name="confirmPassword"]').type(registerForm.password);
            cy.get('input[name="submit"]').click();
        });

        // assert that the user registered successfully
        cy.url().should("include", "/register_sucess.php");
        // assert that the element's text includes the given substring
        cy.get("p:nth-child(1) b").should("include.text", "Dear ");

        // click to the login Page (linkClick)
        cy.get('a[href="login.php"]').click();

        // fill out the form
        cy.fixture("registerForm.json").then((loginForm) => {
            cy.get('input[name="userName"]').type(loginForm.email);
            cy.get('input[name="password"]').type(loginForm.password);
            cy.get('input[name="submit"]').click();
        });

        // assert that the user logged in successfully
        cy.url().should("include", "/login_sucess.php");
        // assert that the element's text includes the given substring
        cy.get("h3").should("include.text", "Login Successfully");

        //Switch to Flights tab
        cy.get("a[href='reservation.php']").click();

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

        // assert that the flight search results are displayed
        cy.url().should("include", "/reservation2.php");
        // assert that the result page is loaded
        cy.url().should("include", "/reservation2.php");
        cy.get("font:nth-child(1) > b > font:nth-child(1)").should(
            "include.text",
            "After flight finder - No Seats Avaialble"
        );
    });
});
