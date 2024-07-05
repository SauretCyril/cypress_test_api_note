describe("notes add", () => {
  beforeEach(() => {
    cy.fixture("notesData.json").as("notes");
    cy.log(Cypress.env("baseurl"));
  });

  /*it("add notes", () => {
    cy.get("@notes").then(notes) => {
      cy.request({
        method: "POST",
        url: Cypress.env("baseurl") + "/notes",
        body: {
          title: notes.title,
          description: notes.description,
          category: notes.category,
        },
        headers: {
          aut: "BeUser1",
        },
      }).then((response) => {
        expect(response).property("status").to.equal(200);
      });
    });*/
});
