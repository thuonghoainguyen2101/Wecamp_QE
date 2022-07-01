describe("empty spec", () => {
    it("should visit", () => {
        // Login
        cy.visit("https://demo.guru99.com/test/newtours/");
        cy.wait(2000);
        cy.get("input[name='userName']").click();
        cy.get("input[name='userName']").type("tutorial");
        cy.get("input[name='password']").click();
        cy.get("input[name='password']").type("tutorial");
        cy.get("input[name='submit']").click();
        cy.wait(1000);
        cy.get("h3").should("be.visible");
        cy.get("h3").contains("Login Successfully");

        //Switch to Flights tab
        cy.get("a[href='reservation.php']").click();
        cy.wait(1000);

        //Input Newtours Information
        cy.get("select[name='fromMonth']")
            .select("5")
            .should("have.value", "5");

        cy.get("select[name='fromDay").select("1").should("have.value", "1");

        cy.get("select[name='toMonth']").select("6").should("have.value", "6");

        cy.get("select[name='toDay']").select("30").should("have.value", "30");

        cy.get("input[name='findFlights']").click();

        cy.get("font:nth-child(1) > b > font:nth-child(1)").should(
            "be.visible"
        );
        cy.get("font:nth-child(1) > b > font:nth-child(1)").contains(
            "After flight finder - No Seats Avaialble"
        );
    });
});
