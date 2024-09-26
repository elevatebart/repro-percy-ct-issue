import App from "./App";

describe("<App />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<App />);

    cy.contains("App").should("be.visible");

    cy.percySnapshot("App");
  });
});
