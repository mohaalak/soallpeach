const supertest = require("supertest");
const { app } = require("../src/main");
describe("Count Me Testing", () => {
  it("should return 0 for get count", (done) => {
    supertest(app)
      .get("/count")
      .expect(200, "0", done);
  });

  it("should return sum of all requrest", async () => {
    await supertest(app)
      .post("/")
      .send("2")
      .expect(200);
    await supertest(app)
      .post("/")
      .send("4")
      .expect(200);

    await supertest(app)
      .get("/count")
      .expect(200, "6");
  });
});
