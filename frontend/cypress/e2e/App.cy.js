describe("Home Page", () => {
  it("Performs multiplication", () => {
    cy.visit("http://localhost:5173");
    // Enter operands and select operation
    cy.get("#operand1").type("2");
    cy.get("#operand2").type("3");
    cy.get("#operation-multi").click();

    // Click the "Operate" button and assert that the result is correct
    cy.get("#operate-button").click();
    cy.get("#result").should("contain", "2 * 3 = 6");
  });

  it("Performs division", () => {
    cy.visit("http://localhost:5173");
    // Enter operands and select operation
    cy.get("#operand1").type("4");
    cy.get("#operand2").type("2");
    cy.get("#operation-divide").click();

    // Click the "Operate" button and assert that the result is correct
    cy.get("#operate-button").click();
    cy.get("#result").should("contain", "4 / 2 = 2");
  });

  it("Performs addition", () => {
    cy.visit("http://localhost:5173");
    // Enter operands and select operation
    cy.get("#operand1").type("4");
    cy.get("#operand2").type("2");
    cy.get("#operation-add").click();

    // Click the "Operate" button and assert that the result is correct
    cy.get("#operate-button").click();
    cy.get("#result").should("contain", "4 + 2 = 6");
  });

  it("Performs substraction", () => {
    cy.visit("http://localhost:5173");
    // Enter operands and select operation
    cy.get("#operand1").type("4");
    cy.get("#operand2").type("2");
    cy.get("#operation-subtr").click();

    // Click the "Operate" button and assert that the result is correct
    cy.get("#operate-button").click();
    cy.get("#result").should("contain", "4 - 2 = 2");
  });

  it("Performs Powering", () => {
    cy.visit("http://localhost:5173");
    // Enter operands and select operation
    cy.get("#operand1").type("4");
    cy.get("#operand2").type("2");
    cy.get("#operation-power").click();

    // Click the "Operate" button and assert that the result is correct
    cy.get("#operate-button").click();
    cy.get("#result").should("contain", "4 ** 2 = 16");
  });

  it("Performs Log", () => {
    cy.visit("http://localhost:5173");
    // Enter operands and select operation
    cy.get("#operand1").type("4");
    cy.get("#operand2").type("2");
    cy.get("#operation-log").click();

    // Click the "Operate" button and assert that the result is correct
    cy.get("#operate-button").click();
    cy.get("#result").should("contain", "4 log 2 = 1.2041199826559248");
  });

  it("Performs Natural Log", () => {
    cy.visit("http://localhost:5173");
    // Enter operands and select operation
    cy.get("#operand1").type("4");
    cy.get("#operand2").type("2");
    cy.get("#operation-ln").click();

    // Click the "Operate" button and assert that the result is correct
    cy.get("#operate-button").click();
    cy.get("#result").should("contain", "4 ln 2 = 2.772588722239781");
  });
});
