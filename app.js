const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res
    .status(200)
    .json({
      slackUsername: "Shazzar",
      backend: true,
      age: 22,
      bio: "My brain solves the problem, my code shows the working",
    });
});

const PORT = 3030;

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
