// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
Cypress.Commands.add("loginIn", (login, password) => {
    cy.get("[for='email'] > .login__input").type(login);
    cy.get("[for='pwd'] > .login__input").type(password);
    cy.get(".login__button").click();
  });
  
  // Cypress.Commands.add('login', (email, password) => { ... })
  //
  //
  // -- This is a child command --
  // Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
  //
  //
  // -- This is a dual command --
  // Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
  //
  //
  // -- This will overwrite an existing command --
  // Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })