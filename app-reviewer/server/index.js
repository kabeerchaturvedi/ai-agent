import express from "express";
import cors from "cors";

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

app.post("/api/v1/reviews", (req, res) => {
  const code = req.body.code;
  console.log(code);
  res.send({
    review: "Great job!",
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
