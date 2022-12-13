describe("Home Page", () => {
  it("Renders correctly", () => {
    cy.visit("http://localhost:5173");
    cy.contains("form");
  });

  it("Performs multiplication", () => {
    // Enter operands and select operation
    cy.get('[data-testid="operand1"]').type("2");
    cy.get('[data-testid="operand2"]').type("3");
    cy.get('[data-testid="operation-*"]').click();

    // Click the "Operate" button and assert that the result is correct
    cy.get('[data-testid="operate-button"]').click();
    cy.get('[data-testid="result"]').should("contain", "2 * 3 = 6");
  });

  it("Performs division", () => {
    // Enter operands and select operation
    cy.get('[data-testid="operand1"]').type("4");
    cy.get('[data-testid="operand2"]').type("2");
    cy.get('[data-testid="operation-/"]').click();

    // Click the "Operate" button and assert that the result is correct
    cy.get('[data-testid="operate-button"]').click();
    cy.get('[data-testid="result"]').should("contain", "4 / 2 = 2");
  });

  it("Performs addition", () => {
    // Enter operands and select operation
    cy.get('[data-testid="operand1"]').type("4");
    cy.get('[data-testid="operand2"]').type("2");
    cy.get('[data-testid="operation-+"]').click();

    // Click the "Operate" button and assert that the result is correct
    cy.get('[data-testid="operate-button"]').click();
    cy.get('[data-testid="result"]').should("contain", "4 + 2 = 6");
  });

  it("Performs substraction", () => {
    // Enter operands and select operation
    cy.get('[data-testid="operand1"]').type("4");
    cy.get('[data-testid="operand2"]').type("2");
    cy.get('[data-testid="operation--"]').click();

    // Click the "Operate" button and assert that the result is correct
    cy.get('[data-testid="operate-button"]').click();
    cy.get('[data-testid="result"]').should("contain", "4 - 2 = 2");
  });

  it("Performs Powering", () => {
    // Enter operands and select operation
    cy.get('[data-testid="operand1"]').type("4");
    cy.get('[data-testid="operand2"]').type("2");
    cy.get('[data-testid="operation-**"]').click();

    // Click the "Operate" button and assert that the result is correct
    cy.get('[data-testid="operate-button"]').click();
    cy.get('[data-testid="result"]').should("contain", "4 - 2 = 16");
  });

  it("Performs Log", () => {
    // Enter operands and select operation
    cy.get('[data-testid="operand1"]').type("2");
    cy.get('[data-testid="operand2"]').type("4");
    cy.get('[data-testid="operation-log"]').click();

    // Click the "Operate" button and assert that the result is correct
    cy.get('[data-testid="operate-button"]').click();
    cy.get('[data-testid="result"]').should(
      "contain",
      "4 - 2 = 1.2041199826559248"
    );
  });

  it("Performs Natiral Log", () => {
    // Enter operands and select operation
    cy.get('[data-testid="operand1"]').type("2");
    cy.get('[data-testid="operand2"]').type("4");
    cy.get('[data-testid="operation-ln"]').click();

    // Click the "Operate" button and assert that the result is correct
    cy.get('[data-testid="operate-button"]').click();
    cy.get('[data-testid="result"]').should(
      "contain",
      "4 - 2 = 2.772588722239781"
    );
  });
});
