const request = require("supertest");
const express = require("express");

// Create a test app and router
const app = express();
const router = express.Router();

// Import the route handler
router.get("/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log({ id });
  res.json({ id, name: `Item ${id}` });
});

app.use("/", router);

describe("GET /items/:id", () => {
  it("should return item with valid numeric ID", async () => {
    const response = await request(app)
      .get("/items/1")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toEqual({
      id: 1,
      name: "Item 1",
    });
  });

  it("should handle string IDs by converting to number", async () => {
    const response = await request(app)
      .get("/items/123")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toEqual({
      id: 123,
      name: "Item 123",
    });
  });

  it("should handle non-numeric IDs", async () => {
    const response = await request(app)
      .get("/items/abc")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toEqual({
      id: null,
      name: "Item NaN",
    });
  });
});
