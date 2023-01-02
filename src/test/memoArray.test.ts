import request from "supertest";
import app from "../app";
describe("test create memo", () => {
    const memo = {
        userId: "testUser",
    };

    test("Should have memo created", async () => {
        const res = await request(app).post("/memo/addMemo").send(memo);
        console.log("res", res.body);
        expect(res.body).toHaveProperty("id");
        expect(res.body).toHaveProperty("published");
        expect(res.body).toHaveProperty("memoDate");
    });
});
