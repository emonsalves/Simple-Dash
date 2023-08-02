import express from "express";

const app = express();

// Settings

const port = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Starting the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
