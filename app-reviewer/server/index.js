import express from "express";
import cors from "cors";
import generateReview from "./review.js";

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

app.post("/api/v1/reviews", async (req, res) => {
  const code = req.body.code;

  try {
    const review = await generateReview(code);
    console.log(review,'review from server');

    res.send({
      review,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      review: "An error occurred while generating the review.",
    });
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
