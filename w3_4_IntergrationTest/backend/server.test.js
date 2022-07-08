// const app = require("./server.js");
// const request = require("supertest");
// const supertest = require("supertest");
// const request = supertest(app);

const app = require("./server");
const supertest = require("supertest");

describe("intergration tests", () => {
    it("should return a 200 response", async () => {
        const response = await supertest(app).get("/healthcheck");
        expect(response.status).toBe(200);
    }).timeout(10000);
});
