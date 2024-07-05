describe("template spec", () => {
  it("Covid-19 API tests : General Stats", () => {
    cy.request(
      "https://practice.expandtesting.com/notes/api/health-check"
    ).then((response) => {
      expect(response.body).to.have.property("status");
      //expect(response.body).to.have.property("data");
      //expect(response.body.data).to.have.property("total_cases");
    });
  });
});
