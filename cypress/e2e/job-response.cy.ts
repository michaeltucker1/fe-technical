describe("Job accept/reject", () => {
  const workerId = "7f90df6e-b832-44e2-b624-3143d428001f";

  beforeEach(() => {
    cy.visit("/");
  });

  it("shows a success message when accepting a job", () => {
    cy.intercept("GET", `https://test.swipejobs.com/api/worker/${workerId}/job/*/accept`, { fixture: "job-response-success.json" });
    cy.contains("button", "I'll Take It").click();
    cy.contains("You successfully accepted a job.");
  });

  it("shows a error message when job isnt available", () => {
    cy.intercept("GET", `https://test.swipejobs.com/api/worker/${workerId}/job/*/accept`, { fixture: "job-response-fail.json" });
    cy.contains("button", "I'll Take It").click();
    cy.contains("Sorry, this role was no longer available"); 
  });

});
