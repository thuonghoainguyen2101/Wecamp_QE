/// <reference types="Cypress" />

describe("empty spec", () => {
    it("signup and login user", () => {
        cy.visit("https://demo.guru99.com/test/newtours/");
        // <input name="..."> --> input[name="..."]
        // <h1 id="..."> --> #...

        // click to ResigterPage (linkClick)
        cy.get('a[href="register.php"]').first().click();

        // fill out the form
        cy.get('input[name="firstName"]').type("Cypress");
        cy.get('input[name="lastName"]').type("Test");
        cy.get('input[name="phone"]').type("1234567890");
        cy.get('input[name="userName"]').type("cypress");
        cy.get('input[name="address1"]').type("123 Main St");
        cy.get('input[name="city"]').type("Anytown");
        cy.get('input[name="state"]').type("CA");
        cy.get('input[name="postalCode"]').type("12345");
        cy.get('select[name="country"]')
            .select("INDIA")
            .should("have.value", "INDIA");
        cy.get('input[name="email"]').type("test");
        cy.get('input[name="password"]').type("password");
        cy.get('input[name="confirmPassword"]').type("password");
        cy.get('input[name="submit"]').click();

        // assert that the user registered successfully
        cy.url().should("include", "/register_sucess.php");
        // assert that the element's text includes the given substring
        cy.get("p:nth-child(1) b").should("include.text", "Dear ");

        // click to the login Page (linkClick)
        cy.get('a[href="login.php"]').click();

        // fill out the form
        cy.get('input[name="userName"]').type("test");
        cy.get('input[name="password"]').type("password");
        cy.get('input[name="submit"]').click();

        // assert that the user logged in successfully
        cy.url().should("include", "/login_sucess.php");
        // assert that the element's text includes the given substring
        cy.get("h3").should("include.text", "Login Successfully");

        //Switch to Flights tab
        cy.get("a[href='reservation.php']").click();

        // fill out the form
        cy.get('input[name="tripType"]')
            .check("oneway")
            .should("have.value", "oneway");

        cy.get('select[name="passCount"]')
            .select("2")
            .should("have.value", "2");
        cy.get('select[name="fromPort"]')
            .select("London")
            .should("have.value", "London");
        cy.get('select[name="fromMonth"]')
            .select("November")
            .should("have.value", "11");
        cy.get('select[name="fromDay"]')
            .select("15")
            .should("have.value", "15");
        cy.get('select[name="toPort"]')
            .select("Paris")
            .should("have.value", "Paris");
        cy.get('select[name="toMonth"]')
            .select("November")
            .should("have.value", "11");
        cy.get('select[name="toDay"]').select("20").should("have.value", "20");
        cy.get('input[name="servClass"]')
            .check("Business")
            .should("have.value", "Business");
        cy.get('select[name="airline"]')
            .select("Unified Airlines")
            .should("have.value", "Unified Airlines");
        cy.get('input[name="findFlights"]').click();

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
