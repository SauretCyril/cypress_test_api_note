//https://stackoverflow.com/questions/50471047/preserve-cookies-localstorage-session-across-tests-in-cypress
describe("control example json", () => {
  beforeEach(() => {
    cy.fixture("userData.json").as("data");
    cy.log(Cypress.env("baseurl"));
    cy.restoreLocalStorage();
  });

  it("should get tocken", () => {
    cy.get("@data").then((data) => {
      cy.request({
        method: "POST",
        url: Cypress.env("baseurl"),
        body: {
          email: data.email,
          password: data.password,
        },
      }).then((response) => {
        expect(response).property("status").to.equal(200);
        expect(response.body).property("data").to.not.be.oneOf([null, ""]);
        let token = response.body.data.token;
        cy.log(response.body.data.token);
      });
    });
  });

  it("add notes", () => {
    cy.get("@data").then((data) => {
      cy.request({
        method: "POST",
        url: Cypress.env("baseurl"),
        body: {
          email: data.email,
          password: data.password,
        },
      }).then((response) => {
        expect(response).property("status").to.equal(200);
        expect(response.body).property("data").to.not.be.oneOf([null, ""]);
        let token = response.body.data.token;
        cy.log(response.body.data.token);
      });
    });
  });

  afterEach(() => {
    cy.log("Saving local storage...");
    cy.saveLocalStorage();
  });
});
