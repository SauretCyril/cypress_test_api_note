describe("control example json", () => {
  beforeEach(() => {
    cy.fixture("userData.json").as("data");
    cy.log(Cypress.env("baseurl"));
    cy.restoreLocalStorage();
  });

  it("check object example", () => {
    cy.get("@data").then((data) => {
      cy.wrap(data).should("have.property", "email");
      cy.wrap(data).should("have.property", "password");
    });
    cy.get("@data").then(({ email, password }) => {
      cy.wrap(email).should("be.a", "string");
    });

    cy.get("@data").then((data) => {
      cy.request({
        url: Cypress.env("baseurl") + "/login",
        method: "POST",
        body: {
          email: data.email,
          password: data.password,
        },
      })
        .its("body.success")
        .should("eql", true);
    });
  });

  afterEach(() => {
    cy.log("Saving local storage...");
    cy.saveLocalStorage();
  });
});
