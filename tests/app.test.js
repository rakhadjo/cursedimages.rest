const { expect, afterAll } = require("@jest/globals");
const request = require("supertest");
const app = require("../app");

describe("GET /api", () => {
  it("should return json format", (done) => {
    request(app).get("/api").expect(200, done);
  });
});

describe("GET", () => {
  it("should return 200", (done) => {
    request(app).get("/").expect(200, done);
  });
});

afterAll(done => {
    app.close()
    done()
})