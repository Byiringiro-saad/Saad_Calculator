import supertest from "supertest";

//app
import app from "../app.js";

describe("When request body is valid", () => {
  test("Multiplication", async () => {
    const res = await supertest(app).post("/math/doMath").send({
      one: 2,
      two: 4,
      operation: "*",
    });

    expect(res.status).toBe(200);
    expect(res.body.calcResponse).toBe(8);
  });

  test("Division", async () => {
    const res = await supertest(app).post("/math/doMath").send({
      one: 4,
      two: 2,
      operation: "/",
    });

    expect(res.status).toBe(200);
    expect(res.body.calcResponse).toBe(2);
  });

  test("Addition", async () => {
    const res = await supertest(app).post("/math/doMath").send({
      one: 2,
      two: 4,
      operation: "+",
    });

    expect(res.status).toBe(200);
    expect(res.body.calcResponse).toBe(6);
  });

  test("Substraction", async () => {
    const res = await supertest(app).post("/math/doMath").send({
      one: 2,
      two: 4,
      operation: "-",
    });

    expect(res.status).toBe(200);
    expect(res.body.calcResponse).toBe(-2);
  });

  test("Power", async () => {
    const res = await supertest(app).post("/math/doMath").send({
      one: 2,
      two: 4,
      operation: "**",
    });

    expect(res.status).toBe(200);
    expect(res.body.calcResponse).toBe(16);
  });

  test("Log", async () => {
    const res = await supertest(app).post("/math/doMath").send({
      one: 2,
      two: 4,
      operation: "log",
    });

    expect(res.status).toBe(200);
    expect(res.body.calcResponse).toBe(1.2041199826559248);
  });

  test("Natural log", async () => {
    const res = await supertest(app).post("/math/doMath").send({
      one: 2,
      two: 4,
      operation: "ln",
    });

    expect(res.status).toBe(200);
    expect(res.body.calcResponse).toBe(2.772588722239781);
  });
});

describe("When request body is invalid", () => {
  test("Invalid operation", async () => {
    const res = await supertest(app).post("/math/doMath").send({
      one: "2",
      two: 4,
      operation: "=",
    });

    expect(res.status).toBe(400);
  });
});
