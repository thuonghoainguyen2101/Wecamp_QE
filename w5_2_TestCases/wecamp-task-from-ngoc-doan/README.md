# wecamp

//Install Cypress
cd your/project/repo
npm install cypress --save-dev

//Run Cypress with GUI
npx cypress open

//Run Cypress without GUI
npx cypress run

//Install cypress-xpath
npm install -D cypress-xpath
npm install --save-dev cypress-xpath

//Include in your project's cypress/support/index.js
import 'cypress-xpath‘
Usage:
cy.xpath(‘//div[@id="state"]//div[contains(@class, "placeholder")]’)
