//Unit testing math function
import mathService from "./math.services";

describe("When parameters are valid", () => {
  test("Multiplication", () => {
    mathService(2, 4, "*").then((response) => {
      expect(response).toBe(8);
    });
  });

  test("Division", () => {
    mathService(4, 2, "/").then((response) => {
      expect(response).toBe(2);
    });
  });

  test("Addition", () => {
    mathService(2, 4, "+").then((response) => {
      expect(response).toBe(6);
    });
  });

  test("Substraction", () => {
    mathService(2, 4, "-").then((response) => {
      expect(response).toBe(-2);
    });
  });

  test("Power", () => {
    mathService(2, 4, "**").then((response) => {
      expect(response).toBe(16);
    });
  });

  test("Log", () => {
    mathService(2, 4, "log").then((response) => {
      expect(response).toBe(1.2041199826559248);
    });
  });

  test("Natural log", () => {
    mathService(2, 4, "ln").then((response) => {
      expect(response).toBe(2.772588722239781);
    });
  });
});

describe("When parameters are invalid", () => {
  test("Passing invalid operation", () => {
    mathService(2, 4, "saad").catch((err) => {
      expect(err).toBe("Unknown operation");
    });
  });
});
